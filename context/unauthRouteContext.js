import React from 'react'
import * as R from 'ramda'
import { LANDING, CHANGE_VIEW, GO_BACK } from '../utils/constants'

const initialState = {
  currentView: LANDING,
  history: [LANDING],
}

const UnauthRouteStateContext = React.createContext()
const UnauthRouteDispatchContext = React.createContext()

const unauthRouteReducer = (state, { view, type }) => {
  const lastView = R.nth(-2)(state.history)

  switch (type) {
    case CHANGE_VIEW:
      return {
        currentView: view,
        history: [...state.history, view],
      }
    case GO_BACK:
      return {
        currentView: lastView,
        history: [...state.history, lastView],
      }

    default:
      throw Error(
        'Route reducer action not recognised (from unathRouteContext)',
      )
  }
}

const UnauthRouteProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(unauthRouteReducer, initialState)
  return (
    <UnauthRouteStateContext.Provider value={state}>
      <UnauthRouteDispatchContext.Provider value={dispatch}>
        {children}
      </UnauthRouteDispatchContext.Provider>
    </UnauthRouteStateContext.Provider>
  )
}

const useRouteStateUnauth = () => {
  const context = React.useContext(UnauthRouteStateContext)
  if (context === undefined) {
    throw new Error(
      `useRouteState must be used within a RouteProvider (from unathRouteContext)`,
    )
  }
  return context
}

const useRouteDispatchUnauth = () => {
  const context = React.useContext(UnauthRouteDispatchContext)
  if (context === undefined) {
    throw new Error(
      `useRouteDispatch must be used within a RouteProvider (from unathRouteContext)`,
    )
  }
  return context
}

export { UnauthRouteProvider, useRouteStateUnauth, useRouteDispatchUnauth }
