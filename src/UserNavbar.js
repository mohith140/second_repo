
import React from 'react'
import './css_files/Navbar1.css'
import srchimg from './css_files/magnifying-glass-1976105_1280.jpg'
import axios from "axios"
import { UserContext } from './context/UserContext'
import { useContext } from 'react'
import {URL} from './url'

import {
 BrowserRouter,
 Outlet,
  Link
} from "react-router-dom";

export default function UserNavbar(props) {
  const {user,setUser}=useContext(UserContext)
  
  const handleLogout=async ()=>{
    try{
   
      const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
   setUser(null)
 
    }catch(err){
      console.log(err)
    }
   
    }
  return (  
    <div>
     

<div >
    <ul className='navbar'>
      <li className='blog item'><h3>Blog</h3></li>
    <li className='searchBar item'> 
  
<div className='searchA'>
    <img src={srchimg} className='image'></img>
  <input type="text" className='search'/>
   </div>
    </li> 
    <li style={{display:'flex',flexDirection:'row'}}>
    <li className='login item' style={{marginRight:'20px'}} >
      
    
    </li>
  
    <li className='sign_up item'>  <BrowserRouter><Link to="/logout" className='login_link' onClick={handleLogout}> logout</Link></BrowserRouter> </li>
   
    </li>
    
    </ul>

</div>
<Outlet/>
    </div>
  )
}
