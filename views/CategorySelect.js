import React from 'react'
import { useRouteDispatch } from '../utils/routeContext'
import { MENU, CHANGE_VIEW } from '../utils/constants'

const CategorySelect = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2 className="mb-4">Sign up</h2>
      <button onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}>
        Menu
      </button>
    </div>
  )
}

export default CategorySelect
