import React from 'react'
import { NO_CONSENT_FROM_USER, SET_CONSENT } from '../utils/constants'

const initialState = NO_CONSENT_FROM_USER

const ConsentStateContext = React.createContext()
const ConsentDispatchContext = React.createContext()

const consentReducer = (_, { consent, type }) => {
  switch (type) {
    case SET_CONSENT:
      return consent

    default:
      throw Error('Consent reducer action not recognised')
  }
}

const ConsentProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(consentReducer, initialState)
  return (
    <ConsentStateContext.Provider value={state}>
      <ConsentDispatchContext.Provider value={dispatch}>
        {children}
      </ConsentDispatchContext.Provider>
    </ConsentStateContext.Provider>
  )
}

const useConsentState = () => {
  const context = React.useContext(ConsentStateContext)
  if (context === undefined) {
    throw new Error(`useConsentState must be used within a ConsentProvider`)
  }
  return context
}

const useConsentDispatch = () => {
  const context = React.useContext(ConsentDispatchContext)
  if (context === undefined) {
    throw new Error(`useConsentDispatch must be used within a ConsentProvider`)
  }
  return context
}

export { ConsentProvider, useConsentState, useConsentDispatch }
