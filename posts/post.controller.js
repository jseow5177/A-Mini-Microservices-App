const axios = require('axios')
const { randomBytes } = require('crypto')
const posts = require('./index')

const postControllers = {

  addNewPost: async function (req, res) {
    const postId = randomBytes(4).toString('hex') // Create random hexadecimal string
    const { title } = req.body

    // Save new post created
    posts[postId] = {
      postId, title
    }

    // Emit event to event bus
    await axios.post('http://localhost:4005/events', {
      type: 'PostCreated',
      data: {
        postId, title
      }
    })

    return res.status(201).send(posts[postId])
  },

  retrievePosts: function (req, res) {
    return res.status(200).send(posts)
  },

  receiveEvent: function (req, res) {
    console.log(req.body)
    return res.status(200).send({ status: 'OK' })
  }

}

module.exports = postControllers