import React from 'react'
import postImage from './css_files/aiImage.webp'
import {IF} from "./url"
import './css_files/HomePost.css'
export default function HomePost1({post}) {
const post1={...post}

console.log(post1)
  return (
    <div style={{textDecorationColor: "black", color: "black"}}>
    <div className='blog' >
        <div className='blog_Image'>
        <img src={IF+post1.photo} className='blog_Image1'/></div>
        <div className='blog_content'>
            <ul style={{listStyleType:'none'}}>
            <li>
            <h2>{post1.title}</h2></li>
            <li className='blog_detail'>
              <div>@ {post1.username}</div>
              <div> <p style={{display:"inline"}}>{new Date(post1.updatedAt).toString().slice(0,15)+"  ,  "}</p>
       <p style={{display:"inline"}}>{new Date(post1.updatedAt).toString().slice(16,24)}</p></div>
            </li>
            <li>
            <h6>{post1.desc+`Artificials Intelligence (AI) has become a discussed subject,
 in today’s fast-moving world. It has transitioned from being a concept in 
 science fiction to a reality that impacts our daily lives. People all over 
 the world are fascinated by AI and its ability to bring their imaginations 
 to work in their daily lives.`}
 </h6></li></ul>
        </div>
    </div>
    </div>
  )
}
