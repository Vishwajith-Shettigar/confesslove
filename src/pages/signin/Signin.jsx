import { CircleOutlined } from '@mui/icons-material'
import React , {useRef}from 'react'
import '../signup/signup.css'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
import RefreshIcon from '@mui/icons-material/Refresh';
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
    <div className='slogin'>
    <div className="sloginWrapper">
        <div className="sloginLeft">
            <h3 className="sloginLogo">ConfessLove</h3>
            <span className="sloginDesc">Confess your love to your loved one anonymously</span>
        </div>
        <div className="sloginRight">
    
            <form onSubmit={handleLogin} method="post" className="sloginBox">
                <input  required placeholder='Email' type="email" className="sloginInput" ref={email}/>
                <input minLength={6} required placeholder='Password' type="password" className="sloginInput" ref={password} />
     <button className="sloginButton">  {"Log in"}</button>
   <span> Dont have account ?</span>
     <button type='submit' className="sloginRegister" onClick={()=>{navigate("/signup")}}>Sign up</button>
            </form>
        </div>
    </div>
        </div>
  )
}

export default Signin