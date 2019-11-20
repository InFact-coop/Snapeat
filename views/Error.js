import React from 'react'
import { useRouteDispatch } from '../utils/routeContext'
import { MENU, CHANGE_VIEW, GO_BACK } from '../utils/constants'

const Error = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2 className="mb-4">Error</h2>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}>
        Go to menu
      </button>{' '}
      <button onClick={() => routeDispatch({ type: GO_BACK })}>Go back</button>
    </div>
  )
}

export default Error
