import React from "react"
import { useRouteDispatch } from "../utils/routeContext"
import { GO_BACK } from "../utils/constants"

const Away = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>Away</h2>
      <button onClick={() => routeDispatch({ type: GO_BACK })}>Go back!</button>
    </div>
  )
}

export default Away
