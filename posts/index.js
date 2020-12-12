const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const postRoutes = require('./post.routes')

const PORT = 4000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// In-memory storage for posts created
const posts = {}

app.use('/', postRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = posts