import styled from 'styled-components'

import logo from '../public/logos/logo1.svg'

import { Button } from '../components/SecurityPages'

const Container = styled.section.attrs({
  className:
    'bg-lightgray w-screen h-screen flex flex-col justify-center items-center p-4',
})``

const Logo = styled.img.attrs({
  src: logo,
  className: 'm-6',
})``

const App = () => {
  return (
    <Container>
      <Logo />
      <Button className="m-6">
        <a href="/api/login">Log in</a>
      </Button>
      <a className="underline m-6" href="/api/logout">
        Or Sign up
      </a>
    </Container>
  )
}

export default App
