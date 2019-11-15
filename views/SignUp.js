import React from "react"
import { useRouteDispatch } from "../utils/routeContext"
import { GO_BACK } from "../utils/constants"

const SignUp = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>SignUp</h2>
      <button onClick={() => routeDispatch({ type: GO_BACK })}>Go back!</button>
    </div>
  )
}

export default SignUp
