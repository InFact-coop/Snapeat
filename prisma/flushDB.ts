import { prisma } from './generated/ts'

const flushDB = async () => {
  const deleteEmployers = await prisma.deleteManyProjects({
    id_not: 0,
  })

  console.log(JSON.stringify(deleteEmployers, undefined, 2)) //eslint-disable-line no-console
}

export default flushDB
