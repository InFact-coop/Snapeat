import React from "react"
import { useRoute } from "../utils/routeContext"
import { HOME } from "../utils/constants"

const Away = () => {
  const [_route, setRoute] = useRoute()
  return (
    <div>
      Away <button onClick={() => setRoute(HOME)}>Back home</button>
    </div>
  )
}

export default Away
