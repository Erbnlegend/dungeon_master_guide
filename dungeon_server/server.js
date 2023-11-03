import express from 'express'
import fs from 'fs-extra'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import services from './services/getMonsters.js'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.post('/api/updatemonsters', async (req, res) => {

  try {
    const data = await services.getMonsters()
    res.send(data)
  } catch (err) {
    console.error(err)
    const { message } = err

    res.status(500)
    res.send({
      message
    })
  }
})

const listener = app.listen(80, () => {
  console.log(`listening for calls on port ${listener.address().port}`)
})