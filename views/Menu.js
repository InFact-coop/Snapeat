import React from 'react'
import styled from 'styled-components'
import { useRouteDispatch } from '../context/routeContext'
import {
  CHANGE_VIEW,
  GO_BACK,
  // WELCOME,
  // HOME,
  // SIGN_UP,
  // ONBOARDING,
  // SUCCESS,
  PRIVACY,
  SIGN_OUT,
  TERMS_AND_CONDITIONS,
} from '../utils/constants'

import logo from '../public/logos/logo3.svg'
import close from '../public/icons/close_white.svg'

const Menu = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div className="bg-navy text-white font-subheader font-semibold text-center w-screen h-screen ">
      <HeaderContainer>
        <Logo alt="Snapeat logo" src={logo} />
        <CloseButton
          alt="Close menu"
          onClick={() => routeDispatch({ type: GO_BACK })}
          onKeyPress={() => routeDispatch({ type: GO_BACK })}
        />
      </HeaderContainer>
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          className="mb-9d5"
          onClick={() => routeDispatch({ type: SIGN_OUT })}
          onKeyPress={() => routeDispatch({ type: SIGN_OUT })}
        >
          Sign out
        </div>
        <div
          className="mb-9d5"
          onClick={() =>
            routeDispatch({ type: CHANGE_VIEW, view: TERMS_AND_CONDITIONS })
          }
          onKeyPress={() =>
            routeDispatch({ type: CHANGE_VIEW, view: TERMS_AND_CONDITIONS })
          }
        >
          Terms & Conditions
        </div>
        <div
          className="mb-2"
          onClick={() => routeDispatch({ type: CHANGE_VIEW, view: PRIVACY })}
          onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: PRIVACY })}
        >
          Privacy
        </div>
      </div>
      {/* useful for dev routing */}
      {/* <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
      >
        Home
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
      >
        Welcome
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: SIGN_UP })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: SIGN_UP })}
      >
        Sign up
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: ONBOARDING })}
        onKeyPress={() =>
          routeDispatch({ type: CHANGE_VIEW, view: ONBOARDING })
        }
      >
        Onboarding
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: PRIVACY })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: PRIVACY })}
      >
        Privacy
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: SUCCESS })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: SUCCESS })}
      >
        Success
      </div>
      <div
        className="mb-2"
        onClick={() => routeDispatch({ type: GO_BACK })}
        onKeyPress={() => routeDispatch({ type: GO_BACK })}
      >
        Go back
      </div> */}
    </div>
  )
}

const Logo = styled.img.attrs({
  className: 'w-auto sm:w-25',
})`
  margin-left: calc((100vw - 80px) / 2);

  @media ${cssTheme('media.sm')} {
    margin-left: calc((100vw - 100px) / 2);
  }
`

const CloseButton = styled.button.attrs({
  className: 'w-5 h-5 my-2d5 mr-6',
})`
  justify-self: end;
  background: url(${close}) center/cover no-repeat;
`

const HeaderContainer = styled.div.attrs({
  className: 'absolute w-screen top-0 left-0 z-2 mt-5d5',
})`
  display: grid;
  grid-template-columns: 1fr 12.5%;
`
export default Menu
