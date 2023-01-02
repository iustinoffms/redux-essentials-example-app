import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]

const usersSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    // define your reducers here
  },
})

export default usersSlice.reducer
export const selectUsers = (state) => state.users
