import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import getView from '../views/getView'
import { useRouteState } from '../state/routeContext'

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen h-screen',
})``

const Index = () => {
  const { currentView } = useRouteState()

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Snapeat" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/iphone-icon.png" rel="apple-touch-icon" sizes="180x180" />
      </Head>

      <Container>{getView(currentView)}</Container>
    </>
  )
}

export default Index
