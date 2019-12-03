import styled from 'styled-components'

import logo from '../public/logos/logo1.svg'

import { Button } from '../components/SecurityPages'

import { useRouteDispatchUnauth } from '../context/unauthRouteContext'
import { CHANGE_VIEW, SECURITY_UNAUTH } from '../utils/constants'

const Container = styled.section.attrs({
  className:
    'bg-lightgray w-screen h-screen flex flex-col justify-center items-center p-4',
})``

const Logo = styled.img.attrs({
  src: logo,
  className: 'm-6',
})``

const Landing = () => {
  const routeDispatch = useRouteDispatchUnauth()

  return (
    <Container>
      <Logo />
      <Button className="m-6">
        <a href="/api/login" className="w-full">
          Log in
        </a>
      </Button>
      <button
        onClick={() => {
          return routeDispatch({ type: CHANGE_VIEW, view: SECURITY_UNAUTH })
        }}
        className="underline m-6"
      >
        Or Sign up
      </button>
    </Container>
  )
}

export default Landing
