
import React, { useContext, useState } from 'react';
import { AiTwotoneEdit } from "react-icons/ai"
import { FaDeleteLeft } from "react-icons/fa6";

import './css_files/PostDetails.css'; // Import your component-specific CSS file
import aiImage from './css_files/aiImage.webp'
import { useParams } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { URL,IF } from './url';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';
const PostDetails = () => {
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
   const postId=useParams().id
   const {user}=useContext(UserContext)
   const [post,setPost]=useState({})
   const [loader,setLoader]=useState(false)
   const navigate=useNavigate()
 
   const fetchPosts=async ()=>{
    try{
      const res= await axios.get(URL+"/api/posts/"+postId)
    
      setPost(res.data)
    }
    catch(err){
      console.log(err)
    }
   }
   const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})

      navigate("/")

    }
    catch(err){
      console.log(err)
    }

  }

   const fetchPostComments=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)

    }
    catch(err){
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()

  },[postId])
  const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true})
      
      // fetchPostComments()
      // setComment("")
      window.location.reload(true)

    }
    catch(err){
         console.log(err)
    }

  }
 
 
  const postComment1=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true})
      
      // fetchPostComments()
      // setComment("")
      window.location.reload(true)

    }
    catch(err){
         console.log(err)
    }

  }
  useEffect(()=>{
    fetchPosts()

  },[postId])
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
   
    <div className="blog-post">
          
      <div className="post-details">
      <h2>{post.title}</h2>
      {user?._id === post?.user_Id && (
        <div className="action-buttons">
          <p className="cursor-pointer" onClick={() => navigate("/edit/" + postId)}>
            <AiTwotoneEdit className="edit-icon" />
          </p>
          <p className="cursor-pointer" onClick={handleDeletePost}>
            <FaDeleteLeft className="delete-icon" />
          </p>
        </div>
      )}
        <img src={IF+""+post.photo} alt="Blog Post" className="post-image" />
        <div className="post-text">
         
          <p>{post.title+`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed eu semper nulla.
            Proin aliquet nulla in ex dapibus, vitae posuere purus rhoncus. Donec auctor justo nec lectus
            luctus, sit amet ultricies dolor mattis. ...`}
          </p>
        </div>
      
      </div>
      <div><p>Categories:</p>
          <div className="category_total">
          {post.categories?.map((c,i)=>(
            <>
            <div key={i} className="category">{c}</div>
            </>
            
          ))}
            
          </div></div>
      <div className="comments-section">
        <h3>Comments</h3>
      
          {comments?.map((commen, index) => (
            <Comment post={post} c={commen}/>
          ))}
        

        <div className="comment-input" >
          <textarea
         
            placeholder="Write your comment..."
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
          ></textarea>
          <button  onClick={postComment}>Submit Comment</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

