import React from "react"

import App from "next/app"
import { RouteProvider } from "../utils/routeContext"

class Snapeat extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <RouteProvider>
        <Component {...pageProps} />
      </RouteProvider>
    )
  }
}

export default Snapeat
