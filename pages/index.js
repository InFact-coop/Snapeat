import React from "react"
import Head from "next/head"
import styled from "styled-components"

import getView from "../views/getView"
import { useRouteState } from "../utils/routeContext"

const Container = styled.section.attrs({
  className: "bg-lightgray w-screen h-screen",
})``

const Index = () => {
  const { currentView } = useRouteState()

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>{getView(currentView)}</Container>
    </>
  )
}

export default Index
