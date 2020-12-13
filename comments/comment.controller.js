const axios = require('axios')
const { randomBytes } = require('crypto')
const commentsByPostId = require('./index')

const commentControllers = {

  addNewComment: async function (req, res) {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body    

    // Check if the post has existing comments
    const comments = commentsByPostId[req.params.id] || []

    comments.push({
      commentId,
      content
    })

    commentsByPostId[req.params.id] = comments

    // Emit event to event bus
    await axios.post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: {
        commentId,
        content,
        postId: req.params.id
      }
    })

    return res.status(201).send(comments)
  },

  retrieveComments: function (req, res) {
    return res.send(commentsByPostId[req.params.id] || [])
  },

  receiveEvent: function (req, res) {
    console.log(req.body)
    return res.status(200).send({ status: 'OK' })
  }

}

module.exports = commentControllers