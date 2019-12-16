/* eslint-disable */
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

    const dbCategories = await prisma.categories()
    const dbTags = await prisma.tags()
    const dbProportions = await prisma.proportions()
    interface AirtableDbLink {
      name: string
      airtableId: string
    }

    const getAirtableIds = (airtableArray: AirtableDbLink[], prismaArray) =>
      R.pipe(
        x => R.filter(({ name }) => R.contains(name)(airtableArray))(x),
        x => R.map(({ airtableId }) => airtableId)(x as AirtableDbLink[]),
      )(prismaArray)

    const Categories = getAirtableIds(categories, dbCategories)
    const Tags = getAirtableIds(tags, dbTags)
    const ProportionFruit = getAirtableIds([proportionFruit], dbProportions)
    const ProportionVeg = getAirtableIds([proportionVeg], dbProportions)

    console.log('Categories', Categories)
    console.log('Tags', Tags)
    console.log('ProportionFruit', ProportionFruit)
    console.log('ProportionVeg', ProportionVeg)

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

    console.log('airtableMeal', airtableMeal)

    prisma.updateMeal({
      data: { airtableId: airtableMeal },
      where: { id: mealId },
    })
  } catch (e) {
    //eslint-disable-next-line no-console
    console.log('There was an error in upload-meal-to-airtable:', e)
  }
}
