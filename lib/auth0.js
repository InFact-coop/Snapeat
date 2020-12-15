import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: `${process.env.HOST}/api/callback`,
  postLogoutRedirectUri: process.env.HOST,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 24 * 180,
  },
})
