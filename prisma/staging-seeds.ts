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
    const snapeatTest = await prisma.createProject({
      name: 'SnapEat Trial',
      slug: 'snapeat-trial',
    })

    console.log('categories', categories)
    console.log('tags', tags)
    console.log('proportions', proportions)
  } catch (e) {
    console.log(JSON.stringify(e, undefined, 2)) //eslint-disable-line no-console
  }
}

seedDatabase()
