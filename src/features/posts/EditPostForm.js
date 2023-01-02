import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updatePost } from './postsSlice'
import PostUser from './PostUser'
import { selectUsers } from '../users/usersSlice'

const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => postId === post.id)
  )

  const users = useSelector(selectUsers)
  const history = useHistory()
  const dispatch = useDispatch()

  const [title, setTitle] = React.useState(post.title)
  const [content, setContent] = React.useState(post.content)
  const [userId, setUserId] = React.useState('')

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
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
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
          useSelector="true"
          onChange={onContentChanged}
        />
      </form>
      <button
        type="button"
        onClick={() => {
          dispatch(updatePost({ id: postId, title, content, user: userId }))
          history.push('/')
        }}
      >
        Save Post
      </button>
    </section>
  )
}

export default EditPostForm
