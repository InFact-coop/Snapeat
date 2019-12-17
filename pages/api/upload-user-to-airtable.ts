import { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import * as R from 'ramda'

//eslint-disable-next-line
import { prisma } from '../../prisma/generated/ts'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})

const base = Airtable.base(process.env.AIRTABLE_BASE)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { ages, postCode, project, consentGDPR = true, user } = req.body

    const fragment = `
    fragment ProjectId on Project {
        airtableId
    }`

    const { airtableId } = await prisma
      .project({ slug: project })
      .$fragment(fragment)

    const [{ id: airtableParent }] = await base('Users').create([
      {
        fields: {
          Project: [airtableId],
          'Postcode Area': postCode,
          'Consent for Data Usage': consentGDPR,
        },
      },
    ])

    await base('Children').create(
      R.map(age => ({
        fields: {
          Parent: [airtableParent],
          'Age Group': age,
        },
      }))(ages),
    )

    await prisma.updateUser({
      data: { airtableId: airtableParent },
      where: { id: user.id },
    })

    return res.status(200).json({})
  } catch (e) {
    //eslint-disable-next-line no-console
    console.log('There was an error in upload-user-to-airtable:', e)
    return res.status(400).json({})
  }
}
