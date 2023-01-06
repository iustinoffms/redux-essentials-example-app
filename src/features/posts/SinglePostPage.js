import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostUser from './PostUser'
import ReactionButtons from './ReactionButtons'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) => selectPostById(state, postId))
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostUser userId={post.user} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
      </article>
    </section>
  )
}

export default SinglePostPage
