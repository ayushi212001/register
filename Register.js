/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
function Register()
{
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password1,setPassword1]=useState("");
    const[password2,setPassword2]=useState("");
    const history=useHistory()

    

   async function signUp(){
        let item={username,email,password1,password2}
        console.warn(item)
        let result=  await fetch("https://covid-19-delhi.herokuapp.com/rest-auth/registration/",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json',
            }
        }
        );
        result= await result.json();
        console.warn("result",result)
        localStorage.setItem("user_info",JSON.stringify(result));
        var saved = localStorage.getItem("user_info")
console.log(JSON.parse(saved));
        
    
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Yourself</h1>
            <br/>
            <div className="form-group text-left">
            <label>Username</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder ="Username" className="form-control"/> 
            </div>
            <br/> 
            <div className="form-group text-left">
            <label>E-mail</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder ="Enter your email" className="form-control"/> 
            </div> 
            <br/> 
            <div className="form-group text-left">
            <label>Password</label>   
            <input type="password" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder ="Enter the Password" className="form-control"/> 
            </div> 
            <br/> 

            <div className="form-group text-left">
            <label>Confirm Password</label>  
            <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder ="Confirm Password" className="form-control"/>
            </div>  
            <br/>   
            <button onClick={signUp} className="btn btn-primary">Register</button>
            </div>
    )
}
export default Register;