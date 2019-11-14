import React from "react"
import App from "next/app"

import { toast } from "react-toastify"
import { RouteProvider } from "../utils/routeContext"
import { ThemeProvider } from "styled-components"

import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../tailwind.config.js"

import "react-toastify/dist/ReactToastify.min.css"
import "../styles/index.css"

const { theme } = resolveConfig(tailwindConfig)
toast.configure()

class Snapeat extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <RouteProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RouteProvider>
    )
  }
}

export default Snapeat
