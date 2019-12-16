import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/generated/ts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const doesUserExist = await prisma.$exists.user({
    email: req.query.email as string,
  })

  return res.status(200).json({ doesUserExist })
}
