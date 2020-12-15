import React from 'react'
import { SET_FOOD_PHOTO } from '../utils/constants'

const initialState = {
  foodPhoto: {},
}

const FoodDataStateContext = React.createContext()
const FoodDataDispatchContext = React.createContext()

const foodDataReducer = (state, { payload, type }) => {
  switch (type) {
    case SET_FOOD_PHOTO:
      return {
        foodPhoto: payload,
      }

    default:
      throw Error('FoodData reducer action not recognised')
  }
}

const FoodDataProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(foodDataReducer, initialState)
  return (
    <FoodDataStateContext.Provider value={state}>
      <FoodDataDispatchContext.Provider value={dispatch}>
        {children}
      </FoodDataDispatchContext.Provider>
    </FoodDataStateContext.Provider>
  )
}

const useFoodDataState = () => {
  const context = React.useContext(FoodDataStateContext)
  if (context === undefined) {
    throw new Error(`useFoodDataState must be used within a FoodDataProvider`)
  }
  return context
}

const useFoodDataDispatch = () => {
  const context = React.useContext(FoodDataDispatchContext)
  if (context === undefined) {
    throw new Error(
      `useFoodDataDispatch must be used within a FoodDataProvider`,
    )
  }
  return context
}

export { FoodDataProvider, useFoodDataState, useFoodDataDispatch }
