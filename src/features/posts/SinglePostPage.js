import * as React from 'react'
import { useSelector } from 'react-redux'
import PostUser from './PostUser'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => postId === post.id)
  )
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
      </article>
    </section>
  )
}

export default SinglePostPage
