import { NextApiRequest, NextApiResponse } from 'next'
import * as R from 'ramda'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      imageURL,
      categories,
      proportionFruit,
      proportionVeg,
      tags,
      user,
    } = req.body

    //create meal

    const meal = await prisma.createMeal({
      imageURL,
      user: { connect: { email: user.email } },
      proportionVeg: {
        connect: {
          name: proportionVeg,
        },
      },
      proportionFruit: {
        connect: {
          name: proportionFruit,
        },
      },
    })

    //update meal categories

    await Promise.all(
      R.map((category: string) =>
        prisma.updateMeal({
          data: {
            categories: {
              connect: {
                name: category,
              },
            },
          },
          where: {
            id: meal.id,
          },
        }),
      )(categories),
    )

    await Promise.all(
      R.map((tag: string) =>
        prisma.updateMeal({
          data: {
            tags: {
              connect: {
                name: tag,
              },
            },
          },
          where: {
            id: meal.id,
          },
        }),
      )(tags),
    )

    res.status(200).json({ meal })
  } catch (e) {
    //eslint-disable-next-line no-console
    console.log('There was an error uploading the photo:', e)
  }
}
