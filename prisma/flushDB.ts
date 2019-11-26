import { prisma } from './generated/ts'

const flushDB = async () => {
  const deleteCategories = await prisma.deleteManyCategories({
    id_not: 0,
  })

  const deleteTags = await prisma.deleteManyTags({
    id_not: 0,
  })

  const deleteProportions = await prisma.deleteManyProportions({
    id_not: 0,
  })
  const deleteMeals = await prisma.deleteManyMeals({
    id_not: 0,
  })

  const deleteUsers = await prisma.deleteManyUsers({
    id_not: 0,
  })

  const deleteProjects = await prisma.deleteManyProjects({
    id_not: 0,
  })

  const deleteChildren = await prisma.deleteManyChildren({
    id_not: 0,
  })

  console.log(JSON.stringify(deleteChildren, undefined, 2)) //eslint-disable-line no-console
  console.log(JSON.stringify(deleteCategories, undefined, 2)) //eslint-disable-line no-console
}

export default flushDB
