import React from 'react'
import App from 'next/app'

import { toast } from 'react-toastify'

import { RouteProvider } from '../context/routeContext'
import { AuthProvider } from '../context/authContext'

import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/index.css'

toast.configure()

class Snapeat extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AuthProvider>
        <RouteProvider>
          <Component {...pageProps} />
        </RouteProvider>
      </AuthProvider>
    )
  }
}

export default Snapeat
