import auth0 from '../../lib/auth0'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

export default async function me(req, res) {
  try {
    const {
      data: { data: user },
    } = await auth0.handleProfile(req, res)

    if (user) {
      return res.status(200).json({ user })
    }

    if (!user) {
      res.status(404).end()
    }
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
