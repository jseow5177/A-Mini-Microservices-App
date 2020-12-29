const express = require('express')
const postControllers = require('./post.controller')

const router = express.Router()

// This route is unused. posts retrieval is done though the query service
router.route('/posts')
  .get(postControllers.retrievePosts)

router.route('/posts/create')
  .post(postControllers.addNewPost)

router.route('/events')
  .post(postControllers.receiveEvent)

module.exports = router