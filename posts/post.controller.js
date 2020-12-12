const { randomBytes } = require('crypto')
const posts = require('./index')

const postControllers = {

  addNewPost: function (req, res) {
    const postId = randomBytes(4).toString('hex') // Create random hexadecimal string
    const { title } = req.body

    // Save new post created
    posts[postId] = {
      postId, title
    }

    return res.status(201).send(posts[postId])
  },

  retrievePosts: function (req, res) {
    return res.status(200).send(posts)
  }

}

module.exports = postControllers