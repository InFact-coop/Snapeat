import styled from 'styled-components'

import snapeatLogo from '../public/logos/splash_logo.svg'
import menuBG from '../public/backgrounds/menu_bg.svg'
import dividerSVG from '../public/icons/divider.svg'

import { useRouteDispatchUnauth } from '../context/unauthRouteContext'
import { CHANGE_VIEW, SECURITY_UNAUTH } from '../utils/constants'

const Landing = () => {
  const routeDispatch = useRouteDispatchUnauth()
  return (
    <Container>
      <MenuContainer>
        <SnapeatLogo alt="logo" src={snapeatLogo} />
      </MenuContainer>
      <div className="p-4">
        <Text className="font-bold">Welcome!</Text>
        <Text>New here?</Text>
        <br />
        <Text>Don&apos;t worry, just sign up to gain access to Snapeat.</Text>
        <Text>Returning?</Text>
        <br />

        <Text>Just log in!</Text>
      </div>
      <ButtonContainer>
        <Login>
          <a href="/api/login" className="w-full">
            Log in
          </a>
        </Login>
        <div className="flex m-4">
          <img className="" src={dividerSVG} />
          <p className="m-1 text-center">or</p>
          <img className="" src={dividerSVG} />
        </div>

        <Signup
          onClick={() => {
            return routeDispatch({ type: CHANGE_VIEW, view: SECURITY_UNAUTH })
          }}
        >
          Sign up
        </Signup>
      </ButtonContainer>
    </Container>
  )
}

const Text = styled.p.attrs({
  className: 'font-xl m-4',
})``

const Container = styled.section.attrs({
  className: 'h-full w-full',
})`
  display: grid;
  grid-template-rows: 18% 1fr 40%;
`

const MenuContainer = styled.div.attrs({
  className: 'w-screen px-6 pt-5d5',
})`
  background: url(${menuBG}) left top/cover no-repeat;
`

const SnapeatLogo = styled.img.attrs({
  className: 'w-auto sm:w-25',
})`
  margin-left: calc((100vw - 48px - 80px) / 2);

  @media ${cssTheme('media.sm')} {
    smargin-left: calc((100vw - 48px - 100px) / 2);
  }
`

const Login = styled.button.attrs({
  className: 'bg-navy rounded-button w-full text-white py-4 mt-6',
})``

const Signup = styled.button.attrs({
  className:
    'bg-white rounded-button w-full text-navy py-4 border border-solid border-navy mb-8',
})``

const ButtonContainer = styled.div.attrs({
  className: 'w-screen px-6 pt-5d5 bg-white',
})`
  border-radius: ${cssTheme('borderRadius.tooltip')};
`

export default Landing
