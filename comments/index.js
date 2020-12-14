const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const commentRoutes = require('./comment.routes')

const PORT = 4001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', commentRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})