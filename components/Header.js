import styled from 'styled-components'
import { useRouteDispatch } from '../context/routeContext'
import { CHANGE_VIEW, MENU } from '../utils/constants'
import snapeatLogo from '../public/logos/logo2.svg'
import menuIcon from '../public/icons/menu.svg'
import menuBG from '../public/backgrounds/menu_bg.svg'

const MenuContainer = styled.div.attrs({
  className: 'w-screen px-6 pt-5d5',
})`
  display: grid;
  grid-template-columns: 1fr 12.5%;
  grid-template-rows: 40% 1fr;
  align-items: center;
  background: url(${menuBG}) left top/cover no-repeat;
`

const SnapeatLogo = styled.img.attrs({
  className: 'w-auto sm:w-25',
})`
  margin-left: calc((100vw - 48px - 80px) / 2);

  @media ${cssTheme('media.sm')} {
    margin-left: calc((100vw - 48px - 100px) / 2);
  }
`

const HeaderWithLogo = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <MenuContainer>
      <SnapeatLogo alt="logo" src={snapeatLogo} />
      <div
        onClick={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
        onKeyPress={() => routeDispatch({ type: CHANGE_VIEW, view: MENU })}
      >
        <img alt="menu" src={menuIcon} />
      </div>
    </MenuContainer>
  )
}

export { HeaderWithLogo }
