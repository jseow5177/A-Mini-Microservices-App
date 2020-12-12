const { randomBytes } = require('crypto')
const commentsByPostId = require('./index')

const commentControllers = {

  addNewComment: function (req, res) {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body    

    // Check if the post has existing comments
    const comments = commentsByPostId[req.params.id] || []

    comments.push({
      commentId,
      content
    })

    commentsByPostId[req.params.id] = comments

    return res.status(201).send(comments)
  },

  retrieveComments: function (req, res) {
    return res.send(commentsByPostId[req.params.id] || [])
  }

}

module.exports = commentControllers