import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../views/Spinner'

const AuthContext = React.createContext()

const fetchAuth0User = async () => {
  if (typeof window !== 'undefined' && window.__user) {
    return window.__user
  }

  try {
    const { data: auth0User } = await axios.get('/api/me')

    if (typeof window !== 'undefined') {
      window.__user = auth0User
    }
    return auth0User
  } catch (err) {
    delete window.__user
  }
}

const fetchSnapeatUser = async email => {
  try {
    const {
      data: { doesUserExist: snapeatUserExists },
    } = await axios.get(`/api/does-user-exist?email=${email}`)

    if (snapeatUserExists) {
      const {
        data: { user: snapeatUser },
      } = await axios.get(`/api/get-user?email=${email}`)

      return snapeatUser
    }

    return null
  } catch (err) {
    //eslint-disable-next-line
    console.log('error fetching user', err)
  }
}

const AuthProvider = props => {
  const [auth0Loading, setAuth0Loading] = useState(
    () => !(typeof window !== 'undefined' && window.__user),
  )

  const [auth0User, setAuth0User] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }
    return window.__user || null
  })

  const [snapeatLoading, setSnapeatLoading] = useState(false)
  const [snapeatUser, setSnapeatUser] = useState(null)

  useEffect(() => {
    if (!auth0Loading && auth0User) {
      return
    }
    setAuth0Loading(true)

    fetchAuth0User().then(fetchedAuth0User => {
      if (!fetchedAuth0User) {
        setAuth0Loading(false)
        return
      }
      setAuth0User(fetchedAuth0User)
      setAuth0Loading(false)
    })
  }, [])

  useEffect(() => {
    if (!auth0User) return
    if (!snapeatLoading && snapeatUser) return

    setSnapeatLoading(true)

    fetchSnapeatUser(auth0User.name)
      .then(fetchedSnapeatUser => {
        if (!fetchedSnapeatUser) {
          setSnapeatLoading(false)
          return
        }
        setSnapeatUser(fetchedSnapeatUser)
        setSnapeatLoading(false)
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Error fetching snapeat user', e)
        return null
      })
  }, [auth0User])

  if (auth0Loading || snapeatLoading) return <Spinner />

  return <AuthContext.Provider value={{ auth0User, snapeatUser }} {...props} />
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
