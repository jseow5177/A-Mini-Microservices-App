const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const queryRoutes = require('./query.routes')
const queryControllers = require('./query.controller')

const PORT = 4002
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', queryRoutes)

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`)

  const res = await axios.get('http://event-bus-srv:4005/events')
  const events = res.data

  for (let event of events) {
    console.log('Processing event: ', event.type)

    queryControllers.handleEvent(event.type, event.data)
  }

})
