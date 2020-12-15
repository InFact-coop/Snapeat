import React, { useEffect } from 'react'
import AuthenticatedAppProviders from '../context/AuthenicatedAppProviders'
import { useAuth } from '../context/authContext'

import views from '../views'

import { CHANGE_VIEW, HOME, ONBOARDING } from '../utils/constants'

import { useRouteState, useRouteDispatch } from '../context/routeContext'

const AuthenticatedApp = () => {
  const { currentView } = useRouteState()
  const routeDispatch = useRouteDispatch()

  const { snapeatUser } = useAuth()

  useEffect(() => {
    routeDispatch({
      type: CHANGE_VIEW,
      view: snapeatUser ? HOME : ONBOARDING,
    })

    return () => ({})
  }, [])

  const CurrentView = views[currentView]

  return (
    <AuthenticatedAppProviders>
      <CurrentView />
    </AuthenticatedAppProviders>
  )
}

export default AuthenticatedApp
