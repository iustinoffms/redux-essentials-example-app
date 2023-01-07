import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = []

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
  const response = await client.get('fakeAPI/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.push(...action.payload)
    })
  },
})

export default usersSlice.reducer
export const selectUsers = (state) => state.users
