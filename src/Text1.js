import React from 'react'
import './Text1.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import { useState } from 'react';
import { Button } from 'bootstrap';

const Text1=(props)=> {
    
      
      const [inp1,setInp]=useState("hello");
    const onchange1=(e)=>{
setInp(e.target.value);
    }
  
  return (
    <div>
      <h1>hello..</h1>
      <form >
        <p>hello{inp1}</p>
        {console.log(inp1+"hjk")}
        <input
        type="text"
        value={inp1}
        onChange={onchange1}
      />
     
    <button type="button" onClick={()=>{setInp("mohiy")}}>to upper case</button>
   
    <button onClick={()=>{setInp('buton')}}>Increment</button>
      </form>
     
      
    </div>
  )
}

export default Text1;