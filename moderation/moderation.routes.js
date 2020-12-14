const express = require('express')
const moderationControllers = require('./moderation.controller')

const router = express.Router()

router.route('/events')
  .post(moderationControllers.moderateComment)

module.exports = router