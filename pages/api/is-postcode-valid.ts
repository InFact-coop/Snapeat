import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
  const postcode = req.query.postcode as string

  try {
    if (postcode) {
      const {
        data: { result },
      } = await axios.get(
        `https://api.postcodes.io/postcodes/${postcode}/autocomplete`,
      )
      return res.status(200).json({ postCodeArray: result })
    }
    return res.status(200).json({ postCodeArray: null })
  } catch (e) {
    console.log(`Error validating postcode ${postcode}`) //eslint-disable-line no-console
  }
}
