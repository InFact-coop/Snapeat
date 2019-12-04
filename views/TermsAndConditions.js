import React, { useEffect } from 'react'

import { useRouteDispatch, useRouteState } from '../context/routeContext'
import {
  useRouteDispatchUnauth,
  useRouteStateUnauth,
} from '../context/unauthRouteContext'

import {
  HOME,
  CHANGE_VIEW,
  SECURITY_AUTH,
  SECURITY_UNAUTH,
} from '../utils/constants'

import {
  HeaderWithGSTCLogo,
  Text,
  Footer,
  Button,
} from '../components/SecurityPages'

export const TermsAndConditionsAuth = () => {
  const routeDispatch = useRouteDispatch()
  const { history } = useRouteState()
  return <Content routeDispatch={routeDispatch} history={history} />
}

export const TermsAndConditionsUnauth = () => {
  const routeDispatch = useRouteDispatchUnauth()
  const { history } = useRouteStateUnauth()
  return <Content routeDispatch={routeDispatch} history={history} />
}

const Content = ({ routeDispatch, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const returnTo = () => {
    if (history[history.length - 2] === SECURITY_UNAUTH) {
      return SECURITY_UNAUTH
    } else if (history[history.length - 2] === SECURITY_AUTH) {
      return SECURITY_AUTH
    } else return HOME
  }
  return (
    <div>
      <HeaderWithGSTCLogo
        text="Terms & Conditions"
        close={() => routeDispatch({ type: CHANGE_VIEW, view: returnTo() })}
      />
      <div className="py-1">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          aliquet enim tortor at auctor urna nunc. Cras tincidunt lobortis
          feugiat vivamus at augue eget arcu dictum. Nisl rhoncus mattis rhoncus
          urna neque viverra justo nec ultrices. Feugiat scelerisque varius
          morbi enim nunc faucibus a. Ipsum dolor sit amet consectetur
          adipiscing elit pellentesque habitant morbi. Tellus molestie nunc non
          blandit massa. Ipsum dolor sit amet consectetur adipiscing elit duis.
          Arcu risus quis varius quam. Nam at lectus urna duis convallis
          convallis tellus id. Mauris commodo quis imperdiet massa tincidunt.
          Pellentesque habitant morbi tristique senectus et netus. Nunc sed
          blandit libero volutpat sed cras. Egestas sed tempus urna et. Aliquet
          bibendum enim facilisis gravida neque. Ac odio tempor orci dapibus
          ultrices in iaculis. Blandit cursus risus at ultrices mi tempus
          imperdiet.
        </Text>
        <Text>
          In pellentesque massa placerat duis ultricies lacus sed. Semper eget
          duis at tellus at urna condimentum. Eros donec ac odio tempor orci
          dapibus ultrices. Diam sit amet nisl suscipit adipiscing bibendum.
          Viverra tellus in hac habitasse. Enim blandit volutpat maecenas
          volutpat blandit aliquam etiam erat. Nunc consequat interdum varius
          sit amet mattis vulputate enim. Facilisi nullam vehicula ipsum a.
          Egestas sed sed risus pretium. Et ultrices neque ornare aenean euismod
          elementum nisi quis. Tortor at auctor urna nunc. Ornare quam viverra
          orci sagittis eu volutpat. Ut morbi tincidunt augue interdum velit. In
          metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Venenatis urna cursus eget nunc. Posuere sollicitudin aliquam ultrices
          sagittis.
        </Text>
      </div>
      <Footer>
        <Button
          className="mt-10"
          onClick={() => routeDispatch({ type: CHANGE_VIEW, view: returnTo() })}
        >
          Go back
        </Button>
      </Footer>
    </div>
  )
}
