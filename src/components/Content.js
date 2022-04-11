import React from 'react'
import {savedPosts} from "../posts.json"
import '../App.module.css'
import PostItem from './PostItem'

const Content = () => {
  return (
    <div>
         <div className={CSS.TtileBar}>
              <h1>My photos</h1>
          </div>
          <div className={CSS.SearchResult}>
           {savedPosts.map(post=>{
             return <PostItem post={post} key={post.title}/>
           })}
          </div>
    </div>
  )
}

export default Content
