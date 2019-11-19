import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return console.error('Image upload error:', err) //eslint-disable-line no-console
      }

      console.log('files', files) //eslint-disable-line no-console
      return res.status(200).json({ response: 'ok' })
    })
  } catch (e) {
    console.log('There was an error uploading the photo:', e) //eslint-disable-line no-console
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
