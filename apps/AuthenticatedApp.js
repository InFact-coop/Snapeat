import React, { useEffect } from 'react'
import AuthenticatedAppProviders from '../context/AuthenicatedAppProviders'

import views from '../views'

import { CHANGE_PROJECT } from '../utils/constants'
import { useProjectDispatch } from '../context/projectContext'

import { useRouteState } from '../context/routeContext'

const AuthenticatedApp = ({ project }) => {
  const { currentView } = useRouteState()

  const projectDispatch = useProjectDispatch()

  useEffect(
    () => projectDispatch({ project: { project }, type: CHANGE_PROJECT }),
    [],
  )

  const CurrentView = views[currentView]

  return (
    <AuthenticatedAppProviders>
      <CurrentView />
    </AuthenticatedAppProviders>
  )
}

export default AuthenticatedApp
