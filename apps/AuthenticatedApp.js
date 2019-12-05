import React, { useEffect } from 'react'
import axios from 'axios'
import AuthenticatedAppProviders from '../context/AuthenicatedAppProviders'
import { useAuth } from '../context/authContext'

import views from '../views'

import {
  CHANGE_PROJECT,
  CHANGE_VIEW,
  HOME,
  ONBOARDING,
} from '../utils/constants'
import { useProjectDispatch } from '../context/projectContext'

import { useRouteState, useRouteDispatch } from '../context/routeContext'

const AuthenticatedApp = ({ project }) => {
  const { currentView } = useRouteState()
  const routeDispatch = useRouteDispatch()

  const {
    user: { name: email },
  } = useAuth()

  const projectDispatch = useProjectDispatch()

  useEffect(
    () => projectDispatch({ project: { project }, type: CHANGE_PROJECT }),
    [],
  )

  useEffect(() => {
    const source = axios.CancelToken.source()
    const redirectIfOnboarded = async () => {
      try {
        const res = await axios(
          `${process.env.HOST}/api/does-user-exist?email=${email}`,
        )

        const {
          data: { doesUserExist },
        } = res

        routeDispatch({
          type: CHANGE_VIEW,
          view: doesUserExist ? HOME : ONBOARDING,
        })
      } catch (e) {
        // eslint-disable-next-line
        console.log('Inside useEffect catch')
      }
    }

    redirectIfOnboarded()

    return () => {
      source.cancel()
    }
  }, [])

  const CurrentView = views[currentView]

  return (
    <AuthenticatedAppProviders>
      <CurrentView />
    </AuthenticatedAppProviders>
  )
}

export default AuthenticatedApp
