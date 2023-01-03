import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from './postsSlice'
import { selectUsers } from '../users/usersSlice'
import { v4 as uuidv4 } from 'uuid'

const AddPostForm = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [userId, setUserId] = React.useState('')

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const dispatch = useDispatch()

  const users = useSelector(selectUsers)

  const selectUserOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  }
  const onContentChanged = (e) => {
    setContent(e.target.value)
  }
  const onUserSelect = (e) => {
    setUserId(e.target.value)
  }

  const onSavePost = () => {
    dispatch(
      addPost({
        id: uuidv4(),
        title,
        content,
        user: userId,
        date: new Date().toISOString(),
      })
    )
    setTitle('')
    setContent('')
    setUserId('')
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onUserSelect}>
          <option value=""></option>
          {selectUserOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
