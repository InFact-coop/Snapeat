import React from 'react'

import views from '../views'

import { useRouteStateUnauth } from '../context/unauthRouteContext'

const UnauthenticatedApp = () => {
  const { currentView } = useRouteStateUnauth()

  const CurrentView = views[currentView]

  return <CurrentView />
}

export default UnauthenticatedApp
