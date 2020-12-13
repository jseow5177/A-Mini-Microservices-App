const posts = require('./index')

const queryControllers = {

  retrievePosts: function (req, res) {
    return res.status(200).send(posts)
  },

  receiveEvent: function (req, res) {
    const { type, data } = req.body

    if (type === 'PostCreated') {
      const { postId, title } = data

      posts[postId] = { postId, title, comments: [] }
    }

    if (type === 'CommentCreated') {
      const { commentId, content, postId } = data

      const post = posts[postId]
      post.comments.push({ commentId, content })
    }

    return res.status(200).send({ status: 'OK' })

  }

}

module.exports = queryControllers