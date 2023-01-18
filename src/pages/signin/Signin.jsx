import { CircleOutlined } from '@mui/icons-material'
import React , {useRef}from 'react'
import './signin.css'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
function Signin() {
    const {user,setUser,setJwtToken}=useContext(globalinfo)
    const BP=process.env.REACT_APP_API_KEY;
    const email= useRef();
    const password=useRef();
    const navigate=useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(BP+"/auth/login",{
               
                email:email.current.value,
                password:password.current.value
            });

        if(res!=403 && res!=500 && res!=400)
        {
            setUser(res.data.username);
            setJwtToken("userId",res.data._id,{maxAge: 172800});
            navigate("/")
        }

          }

catch(e){
    
console.log("invalid")
window.alert("Invalid details")
}

    }


  return (
    <div className='login'>
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">ConfessLove</h3>
            <span className="loginDesc"></span>
        </div>
        <div className="loginRight">
    
            <form onSubmit={handleLogin} method="post" className="loginBox">
                <input  required placeholder='Email' type="email" className="loginInput" ref={email}/>
                <input minLength={6} required placeholder='Password' type="password" className="loginInput" ref={password} />
     <button className="loginButton">  {"Log in"}</button>
    
     <button type='submit' className="loginRegister"><a href="/signup">Create new account</a></button>
            </form>
        </div>
    </div>
        </div>
  )
}

export default Signin