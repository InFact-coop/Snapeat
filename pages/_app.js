import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { toast } from 'react-toastify'
import resolveConfig from 'tailwindcss/resolveConfig'

import { AuthProvider } from '../context/authContext'

import tailwindConfig from '../tailwind.config'

import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/index.css'

toast.configure()

const { theme } = resolveConfig(tailwindConfig)

class Snapeat extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    )
  }
}

export default Snapeat
