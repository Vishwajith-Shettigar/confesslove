import React, {useRef} from 'react'
import './signup.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
function Signup() {
    const {user,setUser}=useContext(globalinfo)

    const BP=process.env.REACT_APP_API_KEY;
const navigate=useNavigate();
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const comPassword=useRef();


const handleLogin=async(e)=>
{
    
 e.preventDefault();

    if(password.current.value != comPassword.current.value)
    {
 password.current.setCustomValidity("Password don't match");
    }else{
       
         
           
            
        
          try{
            const res=await axios.post(BP+"/auth/signup",{
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            });

        if(res!=403 && res!=500)
        {
            setUser(res.data.username);
            navigate("/")
        }

          }

catch(e){
    

window.alert("Username already taken")
}
    }
    

   

}
  return (
    <div className='slogin'>
    <div className="sloginWrapper">
        <div className="sloginLeft">
            <h3 className="sloginLogo">ConfessLove</h3>
            <span className="sloginDesc"></span>
        </div>
        <div className="sloginRight">
    
            <form onSubmit={handleLogin} className="sloginBox">
                <input required ref={username} placeholder='User name' className="sloginInput" />
                <input required type="email" ref={email} placeholder='Email' className="sloginInput" />
                <input required type="password" ref={password} placeholder='Password' className="sloginInput" />
                <input required type="password" ref={comPassword} placeholder='Confirm password' className="sloginInput" />
     <button type='submit' className="sloginButton">Sign up</button>
     <button className="sloginRegister" >Log in</button>
            </form>
        </div>
    </div>
        </div>
  )
}

export default Signup