import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/generated/ts'
import * as R from 'ramda'

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

    const updateCategories = await Promise.all(
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

    const updateTags = await Promise.all(
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
    console.log('There was an error uploading the photo:', e) //eslint-disable-line no-console
  }
}
