import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'

import { toast } from 'react-toastify'

import { useAuth } from '../context/authContext'

import AuthenticatedApp from '../apps/AuthenticatedApp'
import UnauthenticatedApp from '../apps/UnauthenticatedApp'

import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/index.css'

import getLastPath from '../utils/getLastPath'

toast.configure()

const Container = styled.section.attrs({
  className: 'bg-lightgray w-screen h-screen',
})``

// TODO: check that everything that was in _app.js and pages/index.js (ie toast and css and ting) is still in new setup

const Index = ({ project }) => {
  const { user } = useAuth()

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
        {user ? <AuthenticatedApp project={project} /> : <UnauthenticatedApp />}
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
