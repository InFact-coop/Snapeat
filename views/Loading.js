import React from 'react'
import { useRouteDispatch } from '../state/routeContext'
import { MENU, CHANGE_VIEW } from '../utils/constants'

const Loading = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2 className="mb-4">Loading</h2>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}>
        Go to menu
      </button>
    </div>
  )
}

export default Loading
