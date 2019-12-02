import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useRouteDispatch } from '../context/routeContext'
import { CHANGE_VIEW, HOME } from '../utils/constants'

import logo from '../public/logos/logo1.svg'
import successBG from '../public/backgrounds/success_bg.svg'

const Success = () => {
  const routeDispatch = useRouteDispatch()

  useEffect(() => {
    const timeout = window.setTimeout(
      () => routeDispatch({ type: CHANGE_VIEW, view: HOME }),
      2000,
    )
    return () => {
      window.clearTimeout(timeout)
    }
  }, [routeDispatch])

  return (
    <Container>
      <img alt="Snapeat logo" src={logo} className="m-auto mb-40" />
      <Heading>All set</Heading>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: 'pt-5d5 w-screen h-screen font-xxl text-center',
})`
  background: url(${successBG}) center 35% / 95% no-repeat;
`

const Heading = styled.h1.attrs({
  className: 'font-bold absolute',
})`
  bottom: calc(100vh - 35% - (0.95 * 100vw * 0.75));
  left: calc((100vw - 68px) / 2);
`
export default Success
