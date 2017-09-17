import Koa from 'koa'
import Router from 'koa-router'
import mongoose from 'koa-mongoose'
import bodyParser from 'koa-body-parser'
import logger from 'koa-logger'
import cors from 'kcors'

import routers from './routes'

const app = new Koa()
const router = new Router()

app.use(mongoose({
  user: 'admin',
  pass: 'admin',
  host: 'ds133964.mlab.com',
  port: '33964',
  database: 'lucasfontesgaspareto',
  useMongoClient: true
}))
app.use(bodyParser())
app.use(logger())
app.use(cors({
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))

routers(app, router)

app.use(router.routes())
app.use(router.allowedMethods())

export default app
