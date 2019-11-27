import React, { useEffect } from 'react'
import styled from 'styled-components'
import AppProviders from '../context'

import views from '../views'

import { CHANGE_PROJECT } from '../utils/constants'
import { useProjectDispatch } from '../context/projectContext'

import { useRouteState } from '../context/routeContext'

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen',
})``

const AuthenticatedApp = ({ project }) => {
  const { currentView } = useRouteState()

  const projectDispatch = useProjectDispatch()

  useEffect(
    () => projectDispatch({ project: { project }, type: CHANGE_PROJECT }),
    [],
  )

  const CurrentView = views[currentView]

  return (
    <AppProviders>
      <Container>
        <CurrentView />
      </Container>
    </AppProviders>
  )
}

export default AuthenticatedApp
