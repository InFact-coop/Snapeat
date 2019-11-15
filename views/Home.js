import React from "react"
import { useRouteDispatch } from "../utils/routeContext"
import { CHANGE_VIEW, AWAY } from "../utils/constants"
import illustration from "../public/illustrations/illustration_1.png"

const Home = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>Home</h2>
      <img src={illustration} alt="" />
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: AWAY })}>
        Go away
      </button>
    </div>
  )
}

export default Home
