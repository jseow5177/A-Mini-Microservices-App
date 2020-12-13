const express = require('express')
const eventControllers = require('./event.controller')

const router = express.Router()

router.route('/posts')
  .post(eventControllers.postEvent)

module.exports = router