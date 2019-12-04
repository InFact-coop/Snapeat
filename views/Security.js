import React, { useEffect } from 'react'

import { useRouteDispatch } from '../context/routeContext'
import { useConsentDispatch, useConsentState } from '../context/consentContext'
import {
  HOME,
  CHANGE_VIEW,
  TERMS_AND_CONDITIONS,
  PRIVACY,
  SET_CONSENT,
  NO_CONSENT_FROM_USER,
  ACTIVE_CONSENT_FROM_USER,
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

  const consentDispatch = useConsentDispatch()
  const hasConsent = useConsentState() === ACTIVE_CONSENT_FROM_USER

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeaderWithGSTCLogo text="T&C & Privacy" />

      <div className="py-1">
        <Text>
          SnapEat is owned and managed by Guys & St Thomas&#39; Charitable
          Trust. <br />
          Everything you share on SnapEat will be stored safely and your
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
          If you are still happy to take part in the SnapEat Project please read
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
          <Checkbox
            type="checkbox"
            id="termsConditions"
            onClick={e =>
              consentDispatch({
                type: SET_CONSENT,
                consent: e.target.checked
                  ? ACTIVE_CONSENT_FROM_USER
                  : NO_CONSENT_FROM_USER,
              })
            }
          />
          <Label htmlFor="termsConditions">
            I have read and agree to the terms and conditions and the privacy
            policy.
          </Label>
        </Grid>
        <Button
          onClick={() =>
            hasConsent && routeDispatch({ type: CHANGE_VIEW, view: HOME })
          }
          active={hasConsent}
        >
          I Agree
        </Button>
      </Footer>
    </div>
  )
}

export default Security
