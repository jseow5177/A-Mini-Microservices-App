const { query } = require('express')
const express = require('express')
const queryControllers = require('./query.controller')

const router = express.Router()

// Receive PostCreated and CommentCreated event and process them into an appropriate data structure
router.route('/events')
  .post(queryControllers.receiveEvent)

// Return all posts along with their comments to the frontend
router.route('/posts')
  .get(queryControllers.retrievePosts)

module.exports = router