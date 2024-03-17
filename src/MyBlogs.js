import React, { useEffect, useState } from 'react'
import HomePost1 from './HomePost1'
import HomePost from './HomePost'
import { URL } from './url'
import axios from "axios"
import Navbar1 from './Navbar1'
import {  useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { UserContext } from './context/UserContext';
import  { useContext } from 'react';

export default function Home() {
  const [posts,setPosts]=useState(null)
  const {user}=useContext(UserContext)
  const {search}=useLocation()
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  if(user)
  console.log(user)
     const fetchPosts=async()=>{
  console.log(user+"myname")
  try{
  const res=await axios.get(URL+"/api/posts/user/"+"65f5dc743d54c9a657bf1557")

 setPosts(res.data || []);
 if(res.data.length===0){
  setNoResults(true)
}
else{
  setNoResults(false)
}
setLoader(false)
  }catch(err){
    setLoader(true)
    console.log(err)
  }
 
 }
 useEffect(()=>{
fetchPosts()
 },[])
  return (
    <div>

   <div style={{marginTop:"20px"}}>
   <HomePost1/> 
   </div>
 
   {loader?"kk":!noResults?posts===null?<></>:posts.map((post)=>(
    
    <div style={{textDecorationLine: "none", color: "#ff6666"}}>
    <Link  to={user?`/posts/post/${post._id}`:"/login"}>
    <HomePost1 key={post._id} post={post}/>
    </Link>
    </div>
          
   )):<h1>no results for your search</h1>
        }
    </div>
  )
}
