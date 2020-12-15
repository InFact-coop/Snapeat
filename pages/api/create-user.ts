import * as R from 'ramda'
import { NextApiRequest, NextApiResponse } from 'next'
//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

interface Request {
  postCode: string
  ages: string[]
  project: string
  phoneNumber: string
  email: string
}

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { postCode, ages, project, phoneNumber, email }: Request = req.body

    const ageToChildren = R.map((age: string) => ({ age }))(ages)

    const user = await prisma.createUser({
      consentGDPR: true,
      postCode,
      email,
      projects: {
        connect: [
          {
            slug: project,
          },
        ],
      },
      children: {
        create: ageToChildren,
      },
      phoneNumber,
    })

    if (user) {
      return res.status(200).json({ user })
    }

    if (!user) {
      return res.status(500).end()
    }
  } catch (e) {
    console.log(`Error creating user`, e) //eslint-disable-line no-console
    return res.status(400).end()
  }
}
