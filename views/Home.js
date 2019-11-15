import React from "react"
import { useRouteDispatch } from "../utils/routeContext"
import { CHANGE_VIEW, WELCOME } from "../utils/constants"

const Home = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>Home</h2>{" "}
      <button
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
      >
        Go to welcome
      </button>
    </div>
  )
}

export default Home
