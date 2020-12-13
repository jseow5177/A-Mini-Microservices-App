const express = require('express')
const commentControllers = require('./comment.controller')

const router = express.Router()

router.route('/posts/:id/comments')
  .get(commentControllers.retrieveComments)
  .post(commentControllers.addNewComment)

router.route('/events')
  .post(commentControllers.receiveEvent)

module.exports = router