import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostUser from './PostUser'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

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
        </article>
      ))}
    </section>
  )
}

export default PostsList
