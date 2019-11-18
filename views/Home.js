import React from 'react'
import styled from 'styled-components'

import { useRouteDispatch } from '../utils/routeContext'
import { CHANGE_VIEW, MENU, WELCOME } from '../utils/constants'

import buttonBG from '../public/backgrounds/camera_bg.svg'
import menuBG from '../public/backgrounds/menu_bg.svg'
import cameraBG from '../public/icons/camera_icn.svg'

import menu from '../public/icons/menu.svg'
import logo from '../public/logos/logo2.svg'
import cameraButton from '../public/icons/btn_round.svg'

const Home = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <Dashboard>
      <MenuContainer>
        <Logo alt="logo" src={logo} />
        <div
          onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
          onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
        >
          <img alt="menu" src={menu} />
        </div>
      </MenuContainer>
      <CameraContainer>
        <p className="font-bold">What is your child eating for dinner?</p>
        <p>Share a photo</p>
      </CameraContainer>
      <ButtonContainer>
        <p className="self-end">Snap a photo of their meal</p>
        <div
          onClick={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
          onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: WELCOME })}
        >
          <img
            className="w-20 sm:w-auto"
            alt="camera-button"
            src={cameraButton}
          />
        </div>
      </ButtonContainer>
    </Dashboard>
  )
}

const Dashboard = styled.div.attrs({
  className: 'w-full h-full text-center text-navy',
})`
  display: grid;
  grid-template-rows: 18% 1fr 25%;
  background: url(${cameraBG}) center/45% auto no-repeat;
`

const ButtonContainer = styled.div.attrs({
  className: 'w-full',
})`
  display: grid;
  grid-template-rows: 1fr 144px;
  grid-gap: 10px;
  justify-items: center;
  background: url(${buttonBG}) left bottom/contain no-repeat;
`

const CameraContainer = styled.div.attrs({
  className: 'w-full font-xl px-4 pt-5 pb-2d5',
})``

const MenuContainer = styled.div.attrs({
  className: 'w-full px-6 pt-5d5',
})`
  display: grid;
  grid-template-columns: 1fr 12.5%;
  background: url(${menuBG}) left top/cover no-repeat;
`

const Logo = styled.img.attrs({
  className: 'mr-12 w-20 sm:w-auto',
})`
  justify-self: end;
`

export default Home
