import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const postcode = req.query.postcode as string

  try {
    const {
      data: { result },
    } = await axios.get(
      `https://api.postcodes.io/postcodes/${postcode}/validate`,
    )

    return res.status(200).json({ postCodeIsValid: result })
  } catch (e) {
    console.log(`Error validating postcode ${postcode}`, e) //eslint-disable-line no-console
  }
}
