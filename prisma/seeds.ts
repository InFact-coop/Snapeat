// To seed the database
// 1. Install ts-node - `yarn global add typescript ts-node`
// 2. Go to your terminal make sure you are in `snapeat/prisma/` directory
// 3. run `env-cmd -f ../.config/dev.env ts-node seeds.ts`

import { prisma } from './generated/ts'
import flushDB from './flushDB'
import * as R from 'ramda'
import { CATEGORY_ARRAY, TAG_ARRAY, PROPORTION_ARRAY } from '../utils/constants'

const seedDatabase = async () => {
  try {
    await flushDB()

    // create categories
    const categories = await Promise.all(
      R.map((category: string) =>
        prisma.createCategory({
          name: category,
        }),
      )(CATEGORY_ARRAY),
    )

    // create tags
    const tags = await Promise.all(
      R.map((tag: string) =>
        prisma.createTag({
          name: tag,
        }),
      )(TAG_ARRAY),
    )

    // create proportions
    const proportions = await Promise.all(
      R.map((proportion: string) =>
        prisma.createProportion({
          name: proportion,
        }),
      )(PROPORTION_ARRAY),
    )

    // create project
    const alexandraRose = await prisma.createProject({
      name: 'Alexandra Rose',
      slug: 'alexandra-rose',
    })

    const foodForLifeProject = await prisma.createProject({
      name: 'Food for Life Lambeth and Southwark',
      slug: 'food-for-life',
    })

    const healthyHighStreetsProject = await prisma.createProject({
      name: 'Healthy High Streets',
      slug: 'healthy-high-streets',
    })

    const collaborationForHealthyLivesProject = await prisma.createProject({
      name: 'Collaboration for Healthy Lives',
      slug: 'healthy-lives',
    })

    // create user
    const lucy = await prisma.createUser({
      consentGDPR: true,
      postCode: 'E50DW',
      email: 'lucy@infactcoop.com',
      projects: {
        connect: {
          id: alexandraRose.id,
        },
      },
    })

    // create meal
    const meal = await prisma.createMeal({
      imageURL:
        'http://res.cloudinary.com/infact-digital-co-operative/image/upload/v1574773242/taew6klwnhdryupxiubc.jpg',
      user: {
        connect: {
          id: lucy.id,
        },
      },
      proportionFruit: {
        connect: {
          id: proportions[0].id,
        },
      },
      proportionVeg: {
        connect: {
          id: proportions[1].id,
        },
      },
      categories: {
        connect: [
          {
            id: categories[1].id,
          },
          {
            id: categories[0].id,
          },
        ],
      },
      tags: {
        connect: [
          {
            id: tags[4].id,
          },
          {
            id: tags[2].id,
          },
        ],
      },
    })

    console.log('categories', categories)
    console.log('tags', tags)
    console.log('proportions', proportions)
    console.log('project', alexandraRose)
    console.log('lucy', lucy)
    console.log('meal', meal)
  } catch (e) {
    console.log(JSON.stringify(e, undefined, 2)) //eslint-disable-line no-console
  }
}

seedDatabase()
