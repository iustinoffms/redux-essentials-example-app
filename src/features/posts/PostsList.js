import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllPosts, fetchPosts } from './postsSlice'
import PostUser from './PostUser'
import ReactionButtons from './ReactionButtons'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)

  console.log(posts)

  const postStatus = useSelector((state) => state.posts.status)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  React.useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <PostUser userId={post.user} />
          <p className="posts-content">{post.content}</p>
          <TimeAgo timestamp={post.date} />
          <br></br>
          <Link to={`posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
          <Link to={`editPost/${post.id}`} className="button muted-button">
            EditPost
          </Link>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  )
}

export default PostsList
