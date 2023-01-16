import React, {useRef} from 'react'
import './signup.css'
function Signup() {
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
       
           const user={
            username:username.current.value,
            email:email.current.value,
            password:password.current.value
            
           }
          try{
          
          }

catch(e){
    

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