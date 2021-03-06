import { NextApiRequest, NextApiResponse } from 'next'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  const doesPhoneNumberExist = await prisma.$exists.user({
    phoneNumber: req.query.phonenumber as string,
  })

  return res.status(200).json({ doesPhoneNumberExist })
}
