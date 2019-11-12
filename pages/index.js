import React from "react"
import Head from "next/head"
import { HOME } from "../utils/constants"
import getView from "../views"
import { useRoute } from "../utils/routeContext"

const Index = () => {
  const [route] = useRoute()

  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Snapeat</h1>
        {getView(route)}
      </main>
    </>
  )
}

export default Index
