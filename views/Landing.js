import styled from 'styled-components'

import snapeatLogo from '../public/logos/splash_logo.svg'
import menuBG from '../public/backgrounds/landing_bg.svg'
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
      <div className="px-4">
        <Text className="font-bold">Welcome!</Text>
        <Text>New here?</Text>
        <br />
        <Text>Don&apos;t worry, just sign up to gain access to Snapeat.</Text>
        <Text>Returning?</Text>
        <br />
        <Text>Just log in!</Text>
        <a
          href="https://airtable.com/shrA8ckDkLTVqLoab"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sm sm:font-lg m-4 underline text-red"
        >
          Something wrong? Tell us here
        </a>
      </div>
      <ButtonContainer>
        <Login href="api/login">Login</Login>

        <div className="flex justify-between my-3 sm:my-4">
          <img className="w-45" src={dividerSVG} alt="divider" />
          <p className="w-20 m-1 text-center">or</p>
          <img className="w-45" src={dividerSVG} alt="divider" />
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

const MenuContainer = styled.div.attrs({
  className: 'w-screen flex justify-center px-6 pt-4',
})`
  background: url(${menuBG}) left top/cover no-repeat;
`

const SnapeatLogo = styled.img.attrs({
  className: 'h-12 sm:h-15',
})``

const Text = styled.p.attrs({
  className: 'font-lg sm:font-xl m-4',
})``

const Container = styled.section.attrs({
  className: 'h-full w-full',
})`
  display: grid;
  grid-template-rows: 22% 1fr 200px;

  @media ${cssTheme('media.sm')} {
    grid-template-rows: 22% 1fr 260px;
  }
`

const Login = styled.a.attrs({
  className:
    'block text-center bg-navy rounded-button shadow-button w-full text-white py-4',
})``

const Signup = styled.button.attrs({
  className:
    'bg-white rounded-button shadow-button w-full text-navy py-4 border border-solid border-navy',
})``

const ButtonContainer = styled.div.attrs({
  className: 'w-screen rounded-card shadow-tooltip px-6 py-5 sm:py-12 bg-white',
})``

export default Landing
