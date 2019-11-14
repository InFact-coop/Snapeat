import React from "react"
import Head from "next/head"
import getView from "../views/getView"
import { useRouteState } from "../utils/routeContext"

const Index = () => {
  const { currentView } = useRouteState()

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Snapeat</h1>
        {getView(currentView)}
      </main>
    </>
  )
}

export default Index
