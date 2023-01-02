import React from 'react'
import { useSelector } from 'react-redux'

const PostUser = ({ userId }) => {
  console.log('here is the userId', userId, "and it's type is:", typeof userId)
  const user = useSelector((state) =>
    state.users.find((user) => user.id === Number(userId))
  )

  console.log(user)
  return <span>by {user ? user.name : 'Unkown user'}</span>
}
export default PostUser
