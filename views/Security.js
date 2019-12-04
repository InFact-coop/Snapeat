import React, { useEffect } from 'react'

import { useRouteDispatch } from '../context/routeContext'
import { useRouteDispatchUnauth } from '../context/unauthRouteContext'
import {
  HOME,
  CHANGE_VIEW,
  TERMS_AND_CONDITIONS_AUTH,
  TERMS_AND_CONDITIONS_UNAUTH,
  PRIVACY_AUTH,
  PRIVACY_UNAUTH,
  WELCOME,
} from '../utils/constants'

import {
  HeaderWithGSTCLogo,
  Button,
  Text,
  Label,
  Grid,
  Checkbox,
  Footer,
} from '../components/SecurityPages'

export const SecurityAuth = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <Content
      routeDispatch={routeDispatch}
      privacy={PRIVACY_AUTH}
      termsAndConditions={TERMS_AND_CONDITIONS_AUTH}
      continueTo={HOME}
    />
  )
}

export const SecurityUnauth = () => {
  const routeDispatch = useRouteDispatchUnauth()
  return (
    <Content
      routeDispatch={routeDispatch}
      privacy={PRIVACY_UNAUTH}
      termsAndConditions={TERMS_AND_CONDITIONS_UNAUTH}
      continueTo={WELCOME}
    />
  )
}

const Content = ({
  routeDispatch,
  privacy,
  termsAndConditions,
  continueTo,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HeaderWithGSTCLogo text="T&C & Privacy" />

      <div className="py-1">
        <Text>
          Snapeat is owned and managed by Guys & St Thomas&#39; Charitable
          Trust. <br />
          Everything you share on Snapeat will be stored safely and your
          personal data will always be private. Read our Plain English Privacy
          Policy{' '}
          <button
            className="inline underline text-blue"
            onClick={() => routeDispatch({ type: CHANGE_VIEW, view: privacy })}
          >
            here
          </button>
          <span>.</span>
        </Text>

        <Text>
          If you are still happy to take part in the Snapeat Project please read
          our{' '}
          <button
            className="inline underline text-blue"
            onClick={() =>
              routeDispatch({
                type: CHANGE_VIEW,
                view: termsAndConditions,
              })
            }
          >
            Terms and Conditions
          </button>{' '}
          and, if you agree with them, click &#39;I Agree&#39; so that your
          family can take part.
        </Text>
      </div>
      <Footer>
        <Grid>
          <Checkbox type="checkbox" id="termsConditions" />
          <Label htmlFor="termsConditions">
            I have read and agree to the terms and conditions and the privacy
            policy.
          </Label>
        </Grid>
        <Button
          onClick={() => {
            routeDispatch({ type: CHANGE_VIEW, view: continueTo })
          }}
        >
          I Agree
        </Button>
      </Footer>
    </div>
  )
}
