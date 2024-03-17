
import React, { useEffect } from 'react'
import './css_files/Navbar1.css'
import srchimg from './css_files/magnifying-glass-1976105_1280.jpg'
import axios from "axios"
import { UserContext } from './context/UserContext'
import { useContext ,useState} from 'react'
import {URL} from './url'
import { useNavigate} from 'react-router-dom'
import { ImProfile } from "react-icons/im";
import {

 Outlet,
  Link
} from "react-router-dom";
import { AiFillProfile } from "react-icons/ai";

export default function Navbar1(props) {
  const {user,setUser}=useContext(UserContext)
  const [prompt,setPrompt]=useState("")
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate=useNavigate()
  console.log(prompt)
 
const handleEnter=(e)=>{
 

 (prompt!=="")?navigate("?search="+prompt):navigate("/")

}
  const handleLogout=async ()=>{
    try{
   
      const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
   setUser(null)
   navigate("/login")
  //  console.log(user)
 
    }catch(err){
      console.log(err)
    }
   
    }

  return (  <div >
    <div>
     
    
<div >
    <ul className='navbar'>
      <li className='blog item'><div className="dropdown">
     <div className="dropdown-toggle" onClick={toggleDropdown}>
       <ImProfile/>
      
  
     </div>
    
     {isOpen && (
       <div className="dropdown-toggle">
         <ul>
         <h6><Link to="/login">login</Link></h6>
         <h6><Link to="/register">register</Link></h6>
        
         <h6><Link to={`/profile/${user?._id}`}>my profile</Link></h6>
         <h6><Link to={`/myblogs/${user?._id}`}>my blogs</Link></h6>
         <h6><Link to="/logout" onClick={handleLogout}><p className='linkStyle'>logout</p></Link></h6>
           {/* Add more options as needed */}
         </ul>
       </div>
     )}
   </div></li>
    <li className='searchBar item'> 
  
<div className='searchA'>
    <img src={srchimg} className='image' onClick={(e)=>{handleEnter(e)}} ></img>
  <input type="text" className='search' placeholder="search posts" onChange={(e)=>{
    setPrompt(e.target.value)
   
    }}    />

   </div>
    </li> 
    <li style={{display:'flex',flexDirection:'row'}}>
    <li className='login item' style={{marginRight:'20px'}} >
     {!user? <Link to="/login" className='login_link'>login</Link>
     :<p>relogin</p> }
    
    </li>
    <li className='sign_up item'>  <Link to="/register" className='login_link'>sign up</Link> </li>
    <li className='sign_up item'>  <Link to="/logout" className='login_link' onClick={handleLogout}> logout</Link> </li>
   
    </li>
   
    </ul>
   
</div>
<Outlet/>

    </div>
     </div>
  )
}
