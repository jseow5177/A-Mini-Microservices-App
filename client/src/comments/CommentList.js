import React from 'react'

function CommentList ({ comments }) {
  
  const renderedComments = comments.map(comment => {
    let content

    switch (comment.status) {
      case 'approved':
        content = comment.content
        break
      case 'pending':
        content = 'This comment is awaiting moderation'
        break
      case 'rejected':
        content = 'This comment has been rejected'
        break
      default:
        content = ''
    }

    return (
      <li key={comment.commentId}>
        {content}
      </li>
    )
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

export default CommentList