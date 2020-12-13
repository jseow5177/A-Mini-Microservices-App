const axios = require('axios')

const eventControllers = {

  postEvent: function (req, res) {
    const event = req.body

    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)

    return res.status(200).send({ status: 'OK' })
  }

}

module.exports = eventControllers