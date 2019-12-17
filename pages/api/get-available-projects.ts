import { NextApiRequest, NextApiResponse } from 'next'
//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'
import { PROJECT_NOT_FOUND } from '../../utils/constants'

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const projects = await prisma.projects()
    if (!projects) {
      return res.status(404).json({ projects: { error: PROJECT_NOT_FOUND } })
    }

    return res.status(200).json({ projects })
  } catch (e) {
    console.log(`Error getting available projects`, e) //eslint-disable-line no-console
    return res.status(404).json({ projects: { error: PROJECT_NOT_FOUND } })
  }
}
