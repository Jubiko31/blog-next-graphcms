import React from 'react'

const Card = ({ post }) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default Card