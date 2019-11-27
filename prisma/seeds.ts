// To seed the database
// 1. Install ts-node - `yarn global add typescript ts-node`
// 2. Go to your terminal make sure you are in `loan-application-platform/prisma/` directory
// 3. run `env-cmd -f ../.config/dev.env ts-node seeds.ts`

import { prisma } from './generated/ts'
import flushDB from './flushDB'

const seedDatabase = async () => {
  try {
    await flushDB()

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
  } catch (e) {
    console.log(JSON.stringify(e, undefined, 2)) //eslint-disable-line no-console
  }
}

seedDatabase()
