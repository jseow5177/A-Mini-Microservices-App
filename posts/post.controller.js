const axios = require('axios')
const { randomBytes } = require('crypto')

/**
 * In memory storage to store posts with their comments
  {
    j123j42: {
      id: 'j123j42',
      title: 'post title',
      comments: [
        { id: 'klj3kl', content: 'comment!' }
      ]
    }
  }
 */
const posts = {}

const postControllers = {

  addNewPost: async function (req, res) {
    const postId = randomBytes(4).toString('hex') // Create random hexadecimal string
    const { title } = req.body

    // Save new post created
    posts[postId] = {
      postId, title
    }

    // Emit event to event bus
    await axios.post('http://event-bus-srv:4005/events', {
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

  // Receive event emitted by event bus
  receiveEvent: function (req, res) {
    return res.status(200).send({ status: 'OK' })
  }

}

module.exports = postControllers