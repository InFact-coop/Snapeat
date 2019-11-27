import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'

import { CHANGE_PROJECT } from '../utils/constants'
import { useRouteState } from '../state/routeContext'
import { useProjectDispatch } from '../state/projectContext'
import getLastPath from '../utils/getLastPath'

import views from '../views'

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen h-screen',
})``

const Index = ({ project }) => {
  const projectDispatch = useProjectDispatch()
  const { currentView } = useRouteState()

  useEffect(
    () => projectDispatch({ project: { project }, type: CHANGE_PROJECT }),
    [],
  )

  const CurrentView = views[currentView]

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

      <Container>
        <CurrentView />
      </Container>
    </>
  )
}

Index.getInitialProps = async ctx => {
  const { req } = ctx
  const projectSlug = getLastPath(req.originalUrl)
  try {
    const { data } = await axios.get(
      `${process.env.HOST}/api/get-project-from-slug?slug=${projectSlug}`,
    )

    return data
  } catch (e) {
    // eslint-disable-next-line
    console.log(
      `There was an error in Index getInitialProps for slug ${projectSlug}`,
      e,
    )
    return e.response.data
  }
}

export default Index
