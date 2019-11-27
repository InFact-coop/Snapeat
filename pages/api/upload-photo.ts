import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
// import axios from 'axios'

// import { prisma } from '../../prisma/generated/ts'

const cloudinary = require('cloudinary').v2

cloudinary.config({
  //eslint-disable-next-line
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //eslint-disable-next-line
  api_key: process.env.CLOUDINARY_API_KEY,
  //eslint-disable-next-line
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

//eslint-disable-next-line
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, _fields, files) => {
      if (err) {
        //eslint-disable-next-line no-console
        console.error('form parsing error', err)
      }

      const { photo } = files

      cloudinary.uploader.upload(`${photo.path}`, (error: any, result: any) => {
        if (error) {
          //eslint-disable-next-line no-console
          console.error('cloudinary error error', error)
        }

        const { url } = result

        res.status(200).json({ url })
      })
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
