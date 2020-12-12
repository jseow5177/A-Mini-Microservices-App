const express = require('express')
const bodyParser = require('body-parser')
const commentRoutes = require('./comment.routes')

const PORT = 4001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// In-memory storage for comments created
const commentsByPostId = {}

app.use('/', commentRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = commentsByPostId