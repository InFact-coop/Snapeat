import { NextApiRequest, NextApiResponse } from 'next'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts/index'

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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

    res.status(200)
  } catch (e) {
    //eslint-disable-next-line no-console
    console.log('There was an error uploading the photo:', e)
  }
}
