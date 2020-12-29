const axios = require('axios')

const events = []

const eventControllers = {

  postEvent: function (req, res) {
    const event = req.body

    events.push(event)

    console.log(event)

    // Emit to post service
    axios.post('http://posts-srv:4000/events', event)
    // Emit to comment service
    axios.post('http://comments-srv:4001/events', event)
    // Emit to query service
    axios.post('http://query-srv:4002/events', event)
    // Emit to moderation service
    axios.post('http://moderation-srv:4003/events', event)

    return res.status(200).send({ status: 'OK' })
  },

  retrieveEvents: function (req, res) {
    return res.status(200).send(events)
  }

}

module.exports = eventControllers