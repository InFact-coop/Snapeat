import React from "react"
import Head from "next/head"
import styled from "styled-components"

import getView from "../views/getView"
import { useRouteState } from "../utils/routeContext"

const Container = styled.section.attrs({
  className: "bg-lightgray",
})``

const Index = () => {
  const { currentView } = useRouteState()

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Welcome to Snapeat</h1>
        {getView(currentView)}
      </Container>
    </>
  )
}

export default Index
