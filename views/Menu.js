import React from 'react'
import { useRouteDispatch } from '../context/routeContext'
import {
  GO_BACK,
  CHANGE_VIEW,
  WELCOME,
  HOME,
  SIGN_UP,
  ONBOARDING,
  SUCCESS,
} from '../utils/constants'

const Menu = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
      >
        Home
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
      >
        Welcome
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: SIGN_UP })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: SIGN_UP })}
      >
        Sign up
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: ONBOARDING })}
        onKeyPress={() =>
          routeDispatch({ type: CHANGE_VIEW, view: ONBOARDING })
        }
      >
        Onboarding
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: SUCCESS })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: SUCCESS })}
      >
        Success
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: GO_BACK })}
        onKeyPress={() => routeDispatch({ type: GO_BACK })}
      >
        Go back
      </div>
    </div>
  )
}

export default Menu
