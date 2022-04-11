import React from 'react'

const PostItem = ({post}) => {
 
  return (
    <div>
        <p>{post.title}</p>
        <img src={post.image} alt={post.title}/>
        <p>{post.description}</p>
    </div>
  )
}

export default PostItem