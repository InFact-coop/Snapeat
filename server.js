const { join } = require('path')
const express = require('express')
const next = require('next')
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(cors())

  server.get('/service-worker.js', (req, res) => {
    const filePath = join(__dirname, '.next', '/service-worker.js')
    app.serveStatic(req, res, filePath)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) //eslint-disable-line
  })
})
