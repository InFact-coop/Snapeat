import React, { useEffect } from 'react'

import { useRouteDispatch } from '../state/routeContext'
import {
  HOME,
  CHANGE_VIEW,
  TERMS_AND_CONDITIONS,
  PRIVACY,
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

const Security = () => {
  const routeDispatch = useRouteDispatch()
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
            onClick={() => routeDispatch({ type: CHANGE_VIEW, view: PRIVACY })}
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
              routeDispatch({ type: CHANGE_VIEW, view: TERMS_AND_CONDITIONS })
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
          onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
        >
          I Agree
        </Button>
      </Footer>
    </div>
  )
}

export default Security
