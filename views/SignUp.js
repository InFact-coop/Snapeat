import React from 'react'
import { useRouteDispatch } from '../utils/routeContext'
import { GO_BACK, HOME, CHANGE_VIEW } from '../utils/constants'

const SignUp = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>SignUp</h2>
      <div>
        <button onClick={() => routeDispatch({ type: GO_BACK })}>
          Go back to welcome!
        </button>
      </div>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}>
        Go home
      </button>
    </div>
  )
}

export default SignUp
