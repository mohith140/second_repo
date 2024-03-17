import React from 'react'
import './css_files/PostDetails.css'; 
import { FaDeleteLeft } from 'react-icons/fa6';
import { URL } from "./url"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import axios from 'axios';
 function Comment({post,c}) {
    const {user}=useContext(UserContext)
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
    <div>
       <div className="comment-container" >
             <div className="comment-content">
               <h6>{c.comment}</h6>
             </div>
             <div className="actions">
             
               <FaDeleteLeft onClick={()=>deleteComment(c._id)} className="delete-icon" />
             </div>
           </div>
    </div>
  )
}

export default Comment
