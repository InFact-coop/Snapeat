import React from 'react'
import * as R from 'ramda'
import { HOME, CHANGE_VIEW, GO_BACK, FOOD_DATA } from './constants'

const initialState = {
  currentView: FOOD_DATA,
  history: [HOME, FOOD_DATA],
}

const RouteStateContext = React.createContext()
const RouteDispatchContext = React.createContext()

const routeReducer = (state, { view, type }) => {
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
      throw Error('Route reducer action not recognised')
  }
}

const RouteProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(routeReducer, initialState)
  return (
    <RouteStateContext.Provider value={state}>
      <RouteDispatchContext.Provider value={dispatch}>
        {children}
      </RouteDispatchContext.Provider>
    </RouteStateContext.Provider>
  )
}

const useRouteState = () => {
  const context = React.useContext(RouteStateContext)
  if (context === undefined) {
    throw new Error(`useRouteState must be used within a RouteProvider`)
  }
  return context
}

const useRouteDispatch = () => {
  const context = React.useContext(RouteDispatchContext)
  if (context === undefined) {
    throw new Error(`useRouteDispatch must be used within a RouteProvider`)
  }
  return context
}

export { RouteProvider, useRouteState, useRouteDispatch }
