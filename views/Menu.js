import React from 'react'
import { useRouteDispatch } from '../utils/routeContext'
import { GO_BACK } from '../utils/constants'
import illustration from '../public/illustrations/illustration_2.png'

const Menu = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <h2>Menu</h2>
      <img src={illustration} alt="" />
      <button onClick={() => routeDispatch({ type: GO_BACK })}>Go back!</button>
    </div>
  )
}

export default Menu