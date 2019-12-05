import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { useAuth } from '../context/authContext'
import { ProjectProvider } from '../context/projectContext'

import { RouteProvider } from '../context/routeContext'
import { UnauthRouteProvider } from '../context/unauthRouteContext'
import { ConsentProvider } from '../context/consentContext'

import AuthenticatedApp from '../apps/AuthenticatedApp'
import UnauthenticatedApp from '../apps/UnauthenticatedApp'

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen h-screen',
})``

// TODO: check that everything that was in _app.js and pages/index.js (ie toast and css and ting) is still in new setup

const Index = () => {
  const { user } = useAuth()

  const project = {
    createdAt: '2019-11-27T15:18:16.772Z',
    id: 'ck3hfom9x004q0805dyv92igf',
    name: 'Alexandra Rose',
    slug: 'alexandra-rose',
    updatedAt: '2019-11-27T15:18:16.772Z',
  }

  useEffect(() => {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

    if (iOS) {
      const pwa = document.getElementById('manifest-link')
      pwa.parentNode.removeChild(pwa)
    }
  }, [])

  return (
    <>
      <Head>
        <title>SnapEat</title>
        <link rel="icon" href="/favicon.ico" />
        <link id="manifest-link" href="/manifest.json" rel="manifest" />
        <link href="/iphone-icon.png" rel="apple-touch-icon" sizes="180x180" />
      </Head>

      <ProjectProvider>
        <Container>
          <ConsentProvider>
            {user ? (
              <RouteProvider>
                <AuthenticatedApp project={project} />
              </RouteProvider>
            ) : (
              <UnauthRouteProvider>
                <UnauthenticatedApp />
              </UnauthRouteProvider>
            )}
          </ConsentProvider>
        </Container>
      </ProjectProvider>
    </>
  )
}

export default Index
