import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectPosts } from './postsSlice'
import PostUser from './PostUser'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <PostUser userId={post.user} />
          <p className="posts-content">{post.content}</p>
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
