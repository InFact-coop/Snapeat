import React from "react"
import { HOME } from "./constants"

const RouteContext = React.createContext()

const useRoute = () => {
  const context = React.useContext(RouteContext)
  if (!context) {
    throw new Error(`useRoute must be used within a RouteProvider`)
  }
  return context
}

const RouteProvider = props => {
  const [route, setRoute] = React.useState(HOME)
  const value = React.useMemo(() => [route, setRoute], [route])
  return <RouteContext.Provider value={value} {...props} />
}

export { RouteProvider, useRoute }
