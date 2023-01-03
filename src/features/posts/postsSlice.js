import { createSlice } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
    updatePost: (state, action) => {
      const { id, title, content, user } = action.payload
      const selectedPostForEdit = state.find((post) => post.id === id)
      if (title && content) {
        selectedPostForEdit.title = title
        selectedPostForEdit.content = content
        selectedPostForEdit.user = user
      }
    },
  },
})
// export const selectPosts = (state) => state.posts

export const { addPost, updatePost } = postsSlice.actions
export default postsSlice.reducer
