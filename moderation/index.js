const express = require('express')
const bodyParser = require('body-parser')
const moderationRoutes = require('./moderation.routes')

const PORT = 4003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', moderationRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})