const express = require('express')
const eventControllers = require('./event.controller')

const router = express.Router()

router.route('/events')
  .post(eventControllers.postEvent)

module.exports = router