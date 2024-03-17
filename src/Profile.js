// UserProfile.js
import React, { useState } from 'react';
import './css_files/Profile.css'; // Import your CSS file
import HomePost from'./HomePost'

import { useContext, useEffect } from "react"


import axios from "axios"
import { IF, URL } from "./url"
import { UserContext } from "./context/UserContext"
import { useNavigate, useParams } from "react-router-dom"
const UserProfile = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userEducation, setUserEducation] = useState('');
  const param=useParams().id
  const {user,setUser}=useContext(UserContext)
  const fetchProfile=async ()=>{
    try{
       const res=await axios.get(URL+"/api/users/"+user._id)
       setUserName(res.data.username)
       setUserEmail(res.data.email)
      
    }
    catch(err){
       console.log(err)
    }
  }
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEducationChange = (e) => {
    setUserEducation(e.target.value);
  };

  const handleUpdateProfile = () => {
    // Handle update profile logic here
    console.log({
      userName,
      userEmail,
      userEducation,
    });
  };

  const handleDeleteProfile = () => {
    // Handle delete profile logic here
    console.log("Profile deleted");
  };
  useEffect(()=>{
    fetchProfile()
  
  },[param])
  
  return (
    <>
<div style={{marginTop:"20px"}}>
   <HomePost m_right="20"/> 
   </div>
   <HomePost m_right="20"/> 
   <HomePost m_right="20"/>
   <HomePost m_right="20"/>
    <div className="user-profile">
      <label className="profile-label">User Name:</label>
      <input className="profile-input" type="text" value={userName} onChange={handleNameChange} />

      <label className="profile-label">Email:</label>
      <input className="profile-input" type="email" value={userEmail} onChange={handleEmailChange} />

      <label className="profile-label">Education:</label>
      <input className="profile-input" type="text" value={userEducation} onChange={handleEducationChange} />

      <div className="profile-buttons">
        {/* <button className="update-button" onClick={handleUpdateProfile}>Update</button>
        <button className="delete-button" onClick={handleDeleteProfile}>Delete</button>
      </div> */}
      </div>
    </div>
    </>
  );
};

export default UserProfile;
