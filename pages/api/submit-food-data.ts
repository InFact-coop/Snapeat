import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../prisma/generated/ts'
import { userInfo } from 'os'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log('values in api', req.body)
    const {
      project,
      imageURL,
      categories,
      proportionFruit,
      proportionVeg,
      tags,
      user,
    } = req.body

    const meal = await prisma.createMeal({
      imageURL,
      user: { connect: { email: user.email } },
      proportionVeg,
      proportionFruit,
      categories,
      tags,
    })

    console.log('meal', meal)

    res.status(200)
  } catch (e) {
    console.log('There was an error uploading the photo:', e) //eslint-disable-line no-console
  }
}
