import React from 'react'
import { useRouteDispatch } from '../state/routeContext'
import { HOME, CHANGE_VIEW } from '../utils/constants'

const SignUp = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2 className="mb-4">Sign up</h2>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}>
        Go home
      </button>
    </div>
  )
}

export default SignUp
