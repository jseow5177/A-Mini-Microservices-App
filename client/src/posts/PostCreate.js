import React, { useState } from 'react'
import axios from 'axios'

function PostCreate () {
  const [title, setTitle] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:4000/posts', {
      title
    })

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={handleTitleChange} className="form-control" />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate