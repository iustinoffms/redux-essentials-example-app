import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { client } from '../../api/client'
// const initialState = [
//   {
//     id: '1',
//     title: 'First Post!',
//     content: 'Hello!',
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
//   },
//   {
//     id: '2',
//     title: 'Second Post',
//     content: 'More text',
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
//   },
// ]

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('fakeAPI/posts')
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
    updatePost: (state, action) => {
      const { id, title, content, user } = action.payload
      const selectedPostForEdit = state.posts.find((post) => post.id === id)
      if (title && content) {
        selectedPostForEdit.title = title
        selectedPostForEdit.content = content
        selectedPostForEdit.user = user
      }
    },
    reactionAdded: (state, action) => {
      const { id, key } = action.payload
      const selectedPost = state.posts.find((post) => post.id === id)
      selectedPost.reactions[key]++
    },
  },
})
// export const selectPosts = (state) => state.posts

export const { addPost, updatePost, reactionAdded } = postsSlice.actions
export default postsSlice.reducer
export const selectAllPosts = (state) => state.posts.posts
export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId)
