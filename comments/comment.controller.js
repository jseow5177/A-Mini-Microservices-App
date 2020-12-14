const axios = require('axios')
const { randomBytes } = require('crypto')

// In-memory storage for comments created
const commentsByPostId = {}

const commentControllers = {

  addNewComment: async function (req, res) {
    const commentId = randomBytes(4).toString('hex') // Generate random hexadecimal string
    const { content } = req.body    

    // Check if the post has existing comments
    const comments = commentsByPostId[req.params.id] || []

    comments.push({
      commentId,
      content,
      status: 'pending' // A default status of pending
    })

    commentsByPostId[req.params.id] = comments

    // Emit CommentCreated event to event bus
    await axios.post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: {
        commentId,
        content,
        postId: req.params.id,
        status: 'pending'
      }
    })

    return res.status(201).send(comments)
  },

  retrieveComments: async function (req, res) {
    return res.send(commentsByPostId[req.params.id] || [])
  },

  receiveEvent: async function (req, res) {
    const { type, data } = req.body

    if (type === 'CommentModerated') {
      const { postId, commentId, status, content } = data

      const comments = commentsByPostId[postId]

      const comment = comments.find(comment => comment.commentId === commentId)

      comment.status = status // Update status of moderated comment
      
      // Emit CommentUpdated event to the event bus
      await axios.post('http://localhost:4005/events', {
        type: 'CommentUpdated',
        data: {
          commentId,
          status,
          postId,
          content
        }
      })

    }

    return res.status(200).send({ status: 'OK' })
  }

}

module.exports = commentControllers