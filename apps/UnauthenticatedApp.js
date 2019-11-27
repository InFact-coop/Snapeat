import styled from 'styled-components'

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen',
})``

const App = () => {
  return (
    <Container>
      UnauthenticatedApp <a href="/api/login">Login</a>
      <a href="/api/logout">Logout</a>
    </Container>
  )
}

export default App
