import React, { useState } from "react"
const Login=()=>{
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [login,setLogin]=useState("")

const handleSubmmit=()=>{
    if(email==="user"&&password==="user123"){
        setLogin("login sucessfull")}
    else{
        setLogin("login failed")
    }
    
}
    return(
        <div>
        Email<input type="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        Password<input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button onClick={()=>handleSubmmit()}>Login</button> {login}
        </div>
        
    )
}
export default Login;