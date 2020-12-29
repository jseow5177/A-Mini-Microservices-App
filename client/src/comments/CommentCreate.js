import React, { useState } from 'react'
import axios from 'axios'

function CommentCreate({ postId }) {
  const [content, setContent] = useState('')

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} onChange={handleChangeContent} className="form-control" />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate