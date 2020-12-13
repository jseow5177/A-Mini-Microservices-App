const express = require('express')
const postControllers = require('./post.controller')

const router = express.Router()

router.route('/posts')
  .get(postControllers.retrievePosts)
  .post(postControllers.addNewPost)

router.route('/events')
  .post(postControllers.receiveEvent)

module.exports = router