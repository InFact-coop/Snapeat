import { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import moment from 'moment'
import * as R from 'ramda'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})

const base = Airtable.base(process.env.AIRTABLE_BASE)

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      imageURL,
      categories,
      proportionFruit,
      proportionVeg,
      tags,
      userAirtableId,
      mealId,
    } = req.body

    const prismaCategories = await prisma.categories()
    const prismaTags = await prisma.tags()
    const prismaProportions = await prisma.proportions()

    const getAirtableIds = (airtableArray, prismaArray) =>
      R.pipe(
        x => R.filter(({ name }) => R.contains(name)(airtableArray))(x as any),
        x =>
          R.map(
            ({ airtableId }: { name: string; airtableId: string }) =>
              airtableId,
          )(x as any),
      )(prismaArray)

    const Categories = getAirtableIds(categories, prismaCategories)
    const Tags = getAirtableIds(tags, prismaTags)
    const ProportionFruit = getAirtableIds([proportionFruit], prismaProportions)
    const ProportionVeg = getAirtableIds([proportionVeg], prismaProportions)

    const [{ id: airtableMeal }] = await base('Meals').create([
      {
        fields: {
          Image: [
            {
              url: imageURL,
            },
          ],
          'User ID': [userAirtableId],
          'Proportion of Fruit': ProportionFruit,
          'Proportion of Veg': ProportionVeg,
          Categories,
          Tags,
          'Date and Time': moment(),
        },
      },
    ])

    prisma.updateMeal({
      data: { airtableId: airtableMeal },
      where: { id: mealId },
    })
  } catch (e) {
    //eslint-disable-next-line no-console
    console.log('There was an error in upload-meal-to-airtable:', e)
  }
}
