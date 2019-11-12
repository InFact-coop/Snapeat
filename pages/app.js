import React from "react"
import Head from "next/head"
import { HOME } from "../utils/constants"
import { RouteProvider, useRoute } from "../utils/constants"

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Welcome to Snapeat</h1>
      <RouteProvider></RouteProvider>
    </main>
  </div>
)

export default Home
