import { CircleOutlined } from '@mui/icons-material'
import React , {useRef}from 'react'
import './signin.css'
function Signin() {

    const email= useRef();
    const password=useRef();
    const handleLogin=(e)=>{


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
    
     <button type='submit' className="loginRegister">Create new account</button>
            </form>
        </div>
    </div>
        </div>
  )
}

export default Signin