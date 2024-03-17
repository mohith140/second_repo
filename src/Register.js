import {Link,useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import axios from "axios"
import {URL} from "./url"

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
      const navigate=useNavigate()
  const handleRegister = async() => {
    try{
  const res=await axios.post(URL+"/api/auth/register",{username,email,password})
  setUsername(res.data.username)
  setEmail(res.data.email)
  setPassword(res.data.password)
  setError(false)
  navigate("/login")
    }catch(err){
      setError(true)
      console.log(err)
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
        </form>
      </div>
    </div>
  )
}
