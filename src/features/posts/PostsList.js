import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllPosts, fetchPosts } from './postsSlice'
import PostUser from './PostUser'
import ReactionButtons from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { Spinner } from '../../components/Spinner'
import { useSlider } from '@mui/base'
import { selectUsers } from '../users/usersSlice'

const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const users = useSelector(selectUsers)



  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  React.useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading content..." />
  } else if (postStatus === 'success') {
    content = orderedPosts.map((post) => (
      <SinglePost key={post.id} post={post} />
    ))
  } else if (postStatus === 'error') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
export default PostsList

export const SinglePost = ({ post }) => {
  return (
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
  )
}
