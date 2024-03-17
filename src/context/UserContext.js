
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)
    const [var1,setVar1]=useState(false)

    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        // console.log(res.data)
        setUser(res.data)
        if(user!=undefined){
          setVar1(true)
        }
        

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserContext.Provider value={{user,setUser,var1,setVar1}}>
      {children}
    </UserContext.Provider>)
}