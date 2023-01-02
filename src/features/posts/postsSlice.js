import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
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
