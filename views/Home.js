import React from "react"
import { useRouteDispatch } from "../utils/routeContext"
import { CHANGE_VIEW, AWAY } from "../utils/constants"

const Home = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: AWAY })}>
        Go away
      </button>
    </div>
  )
}

export default Home
