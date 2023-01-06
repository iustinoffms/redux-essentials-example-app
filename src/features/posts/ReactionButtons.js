import * as React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const reactions = Object.keys(reactionEmoji).map((key) => (
    <button
      key={key}
      onClick={() => dispatch(reactionAdded({ id: post.id, key }))}
    >
      {post.reactions[key]}
      {reactionEmoji[key]}
    </button>
  ))
  return <div style={{ display: 'flex' }}>{reactions}</div>
}

export default ReactionButtons
