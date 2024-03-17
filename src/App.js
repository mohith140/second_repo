
import React, { useState } from 'react';
import Navbar1 from './Navbar1.js'
import Home from './Home.js'
import Login from './Login.js';
import EditPost from './EditPost.js'
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './Register.js';
import PostDetails from './PostDetails.js';
import CreatePost from './CreatePost.js';
import MyBlogs from './MyBlogs.js'
import Profile from './Profile.js'
import { UserContext,UserContextProvider } from './context/UserContext.js';
import { useContext } from 'react';
import UserNavbar from './UserNavbar.js'
import { useEffect } from 'react';
export default function App() {
  const {var1}=useContext(UserContext)
  //const [var1,setVar1]=useState(false)

  return (
   
       
    <div >
    {console.log(var1+"iam user")}
  
    <UserContextProvider><BrowserRouter><Routes>
    <Route exact path='*' element={<Navbar1/>}></Route></Routes>
        </BrowserRouter>
      </UserContextProvider>
    <UserContextProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
       
        <Route exact path='/posts/post/:id' element={<PostDetails/>}></Route>
        <Route exact path='/create' element={<CreatePost/>}></Route>
        <Route exact path='/profile/:id' element={<Profile/>}></Route>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
        
      </Routes>
   </BrowserRouter>
   </UserContextProvider>
   


    </div>
  
  )
}
