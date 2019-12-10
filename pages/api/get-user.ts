import { NextApiRequest, NextApiResponse } from 'next'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

import { USER_NOT_FOUND } from '../../utils/constants'

const fragment = `
fragment UserWithProjects on User {
  id
  consentGDPR
  email
  projects {
    slug
  }
}
`

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.email as string
  try {
    const user = await prisma.user({ email }).$fragment(fragment)
    if (!user) {
      return res.status(404).json({ user: { error: USER_NOT_FOUND } })
    }

    return res.status(200).json({ user })
  } catch (e) {
    console.log(`Error getting user ${email}`, e) //eslint-disable-line no-console
    return res.status(404).json({ project: { error: USER_NOT_FOUND } })
  }
}
