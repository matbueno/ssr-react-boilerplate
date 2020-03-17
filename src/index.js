import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import multer from 'multer'
import next from 'next'

import router from '_api/router'

import '_db'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.config()
const port = process.env.PORT || 3000

const upload = multer()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(upload.array())
  server.use('/api', router)

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, () => {
    console.info(`[${dev ? 'Development' : 'Production'}]: Server is running in port ${port}`)
  })
})
