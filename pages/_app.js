import React from 'react'
import App from 'next/app'

import { toast } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import resolveConfig from 'tailwindcss/resolveConfig'
import { RouteProvider } from '../state/routeContext'
import { FoodDataProvider } from '../state/foodDataContext'
import tailwindConfig from '../tailwind.config'

import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/index.css'

const { theme } = resolveConfig(tailwindConfig)
toast.configure()

class Snapeat extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <RouteProvider>
        <ThemeProvider theme={theme}>
          <FoodDataProvider>
            <Component {...pageProps} />
          </FoodDataProvider>
        </ThemeProvider>
      </RouteProvider>
    )
  }
}

export default Snapeat
