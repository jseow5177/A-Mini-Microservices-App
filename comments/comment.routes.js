const express = require('express')
const commentControllers = require('./comment.controller')

const router = express.Router()

router.route('/posts/:id/comments')
  .get(commentControllers.retrieveComments)
  .post(commentControllers.addNewComment)

module.exports = router