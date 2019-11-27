import { NextApiRequest, NextApiResponse } from 'next'
//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'
import { PROJECT_NOT_FOUND } from '../../utils/constants'

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug as string
  try {
    const project = await prisma.project({ slug })
    if (!project) {
      return res.status(404).json({ project: { error: PROJECT_NOT_FOUND } })
    }

    return res.status(200).json({ project })
  } catch (e) {
    console.log(`Error getting project from slug ${slug}`, e) //eslint-disable-line no-console
    return res.status(404).json({ project: { error: PROJECT_NOT_FOUND } })
  }
}
