import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = React.createContext()

const fetchUser = async () => {
  if (typeof window !== undefined && window.__user) {
    return window.__user
  }

  try {
    const { data: user } = await axios.get('/api/me')

    if (typeof window !== 'undefined') {
      window.__user = user
    }
    return user
  } catch (err) {
    delete window.__user
  }
}

const AuthProvider = props => {
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window.__user),
  )

  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }
    return window.__user || null
  })

  useEffect(() => {
    if (!loading && user) {
      return
    }
    setLoading(true)

    fetchUser().then(fetchedUser => {
      if (!fetchedUser) {
        // window.location.href = '/api/login'
        setLoading(false)
        return
      }
      setUser(fetchedUser)
      setLoading(false)
    })
  }, [])

  if (loading) return <div />

  // const login = () => {}
  const register = () => {}
  // const logout = () => {}

  return <AuthContext.Provider value={{ user, register }} {...props} />
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
