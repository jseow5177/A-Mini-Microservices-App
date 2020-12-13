const express = require('express')
const bodyParser = require('body-parser')
const eventRoutes = require('./event.routes')

const PORT = 4005
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', eventRoutes)

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
