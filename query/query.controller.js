const posts = {}

const queryControllers = {

  handleEvent: function (type, data) {
    if (type === 'PostCreated') {
      const { postId, title } = data

      posts[postId] = { postId, title, comments: [] }
    }

    if (type === 'CommentCreated') {
      const { commentId, content, postId, status } = data

      const post = posts[postId]
      post.comments.push({ commentId, content, status })
    }

    if (type === 'CommentUpdated') {
      const { commentId, content, postId, status } = data

      const post = posts[postId]
      const comment = post.comments.find(comment => comment.commentId === commentId)

      // Update everything about a comment as CommentUpdated is a generic update event
      comment.status = status
      comment.content = content
    }
  },

  retrievePosts: function (req, res) {
    return res.status(200).send(posts)
  },

  receiveEvent: function (req, res) {
    const { type, data } = req.body

    queryControllers.handleEvent(type, data)

    return res.status(200).send({ status: 'OK' })

  }

}

module.exports = queryControllers