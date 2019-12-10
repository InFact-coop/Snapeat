import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { useAuth } from '../context/authContext'

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
  const { auth0User } = useAuth()

  useEffect(() => {
    const iOS =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)

    if (iOS) {
      const manifestLink = document.getElementById('manifest-link')
      manifestLink.parentNode.removeChild(manifestLink)
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

      <Container>
        <ConsentProvider>
          {auth0User ? (
            <RouteProvider>
              <AuthenticatedApp />
            </RouteProvider>
          ) : (
            <UnauthRouteProvider>
              <UnauthenticatedApp />
            </UnauthRouteProvider>
          )}
        </ConsentProvider>
      </Container>
    </>
  )
}

export default Index
