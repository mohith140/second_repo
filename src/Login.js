import React, { useEffect, useState } from 'react';
import './css_files/Login.css'; // Import your CSS file for styling
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from './url';
const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
       console.log(res.data+"hell")
      setUser(res.data)
      navigate("/")

    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
useEffect(()=>{

},[])
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
