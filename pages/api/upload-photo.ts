import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import axios from 'axios'

import { prisma } from '../../prisma/generated/ts'

const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
      if (err) {
        throw new Error(err)
      }

      const { photo } = files

      cloudinary.uploader.upload(`${photo.path}`, (error, result) => {
        if (error) {
          throw new Error(error)
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
