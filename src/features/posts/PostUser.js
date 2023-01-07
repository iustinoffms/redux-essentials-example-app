import React from 'react'
import { useSelector } from 'react-redux'

const PostUser = ({ userId }) => {
  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  )

  return <span>by {user ? user.name : 'Unkown user'}</span>
}
export default PostUser
