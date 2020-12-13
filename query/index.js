const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const queryRoutes = require('./query.routes')

const PORT = 4002
const app = express()

/**
 * In memory storage to store posts with their comments
  {
    j123j42: {
      id: 'j123j42',
      title: 'post title',
      comments: [
        { id: 'klj3kl', content: 'comment!' }
      ]
    }
  }
 */
const posts = {}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', queryRoutes)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

module.exports = posts