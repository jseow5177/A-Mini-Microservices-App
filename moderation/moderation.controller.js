const axios = require('axios')

const moderationControllers = {

  moderateComment: async function (req, res) {
    const { type, data } = req.body

    if (type === 'CommentCreated') {
      // Check if the comment contains the word 'orange'
      // If it does, the comment status is set to rejected
      // Else, set to approved
      const status = data.content.includes('orange') ? 'rejected' : 'approved'

      // Emit CommentModerated event to event bus
      await axios.post('http://event-bus-srv:4005/events', {
        type: 'CommentModerated',
        data: {
          commentId: data.commentId,
          content: data.content,
          postId: data.postId,
          status
        }
      })

      return res.status(200).send({ status: 'OK' })
    }
  }

}

module.exports = moderationControllers