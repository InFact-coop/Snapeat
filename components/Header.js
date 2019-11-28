import styled from 'styled-components'
import { useRouteDispatch } from '../context/routeContext'
import { CHANGE_VIEW, MENU } from '../utils/constants'
import logo from '../public/logos/logo2.svg'
import menuBG from '../public/backgrounds/menu_bg.svg'
import menu from '../public/icons/menu.svg'

const MenuContainer = styled.div.attrs({
  className: 'w-screen px-6 pt-5d5',
})`
  display: grid;
  grid-template-columns: 1fr 12.5%;
  grid-template-rows: 40% 1fr;
  align-items: center;
  background: url(${menuBG}) left top/cover no-repeat;
`

const Logo = styled.img.attrs({
  className: 'w-auto sm:w-25',
})`
  margin-left: calc((100vw - 48px - 80px) / 2);

  @media ${cssTheme('media.sm')} {
    margin-left: calc((100vw - 48px - 100px) / 2);
  }
`

const Header = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <MenuContainer>
      <Logo alt="logo" src={logo} />
      <div
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
      >
        <img alt="menu" src={menu} />
      </div>
    </MenuContainer>
  )
}

export { Header, Logo }
