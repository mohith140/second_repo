import React from 'react'
import postImage from './css_files/aiImage.webp'
import './css_files/HomePost.css'
export default function HomePost(props) {

  return (
    <div>
    <div className='blog' style={(props.m_right!==undefined)?{marginRight:""+props.m_right+"%"}:{}}>
        <div className='blog_Image'>
        <img src={postImage} className='blog_Image1'/></div>
        <div className='blog_content'>
            <ul style={{listStyleType:'none'}}>
            <li>
            <h2>AI Blogs</h2></li>
            <li className='blog_detail'>
              <div>@mail</div>
              <div><p style={{display:'inline'}} >16/6/24  </p><p style={{display:'inline'}}>13:30</p></div>
            </li>
            <li>
            <h6>Artificials Intelligence (AI) has become a discussed subject,
 in today’s fast-moving world. It has transitioned from being a concept in 
 science fiction to a reality that impacts our daily lives. People all over 
 the world are fascinated by AI and its ability to bring their imaginations 
 to work in their daily lives.
 </h6></li></ul>
        </div>
    </div>
    </div>
  )
}
