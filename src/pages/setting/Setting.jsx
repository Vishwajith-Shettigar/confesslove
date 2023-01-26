import React, { useState, useEffect ,useRef} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useContext } from 'react'
import { globalinfo } from '../../App'
import axios from 'axios'
import './setting.css'
function Setting() {
    const { user, setUser, jwtToken,removeCookie } = useContext(globalinfo);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [isedit, setIsEdit] = useState(true);
const eusername=useRef();
const eemail=useRef();
const epass=useRef();
const ecpass=useRef();
    const BP = process.env.REACT_APP_API_KEY;
const [showtoast,setShowToast] = useState(false);
    useEffect(() => {

        const getuser = async () => {
            try {
                const res = await axios.post(BP + "/auth/getuser", { id: jwtToken.userId })
                setEmail(res.data.email);
            }
            catch (e) {


            }
        }
        getuser()
    })

    const handleEdit=()=>{


       setIsEdit(!isedit);
    }
    const handleSave=async()=>{
console.log("oo")
        const userinfo={

            "username":eusername.current.value,
           
        }
        try{
        const res = await axios.post(BP + `/auth/updateprofile`, { "id":jwtToken.userId,"userinfo": userinfo})
        setUser(res.data.username);

        setIsEdit(!isedit);

        setShowToast(true);
        setTimeout(()=>{
                setShowToast(false);
        },2000)

        }
        catch (e) {
  window.alert("user info already in use")



        }

     }


    const resetPass=async()=>{

        try{
            const res = await axios.post(BP + `/auth/resetpass`, { "id":jwtToken.userId,"oldpassword": epass.current.value,"password": ecpass.current.value})
            setShowToast(true);
            setTimeout(()=>{
                    setShowToast(false);
            },2000)

            if(res.data==403)
            {
                window.alert("inavlid password")
            }
        }
        catch(e){{
            window.alert("inavlid password")
        }}
        epass.current.value="";
        ecpass.current.value="";

    }
    return (
        <div className="settingcon">

            <Navbar />

            <div className="setting">

                <div className="userupdate">

                    <h3>Profile</h3>

                    <div className="username">
                        <span>username</span>
                        <input type="text" defaultValue={user} ref={eusername} readOnly={isedit} />
                    </div>
                    <div className="email">
                        {/* <span>Email</span>
                        <input type="text" defaultValue={email} ref={eemail} readOnly={isedit} /> */}
                    </div>

                    {
                        isedit ?

                            <button className="updateprofilebtn" onClick={()=>handleEdit()}>update </button>
                            :
                            <button className="updateprofilebtn" onClick={()=>handleSave()}>save</button>
                    }

                </div>

{
    
  showtoast?<div className="toast" >saved</div>:
  <div className="toast" style={{backgroundColor:"white" ,color:"white"}}>Password</div>
  
  }
    <button className="logoutbtn" onClick={()=>{removeCookie(["userId"]); console.log("hbio")}}>log out</button>
 
                <div className="passupdate">
                  
 <hr/>
                    <h3>Change password</h3>

                    <div className="oldpass">
                        <span>old password</span>
                        <input type="password" ref={epass} />
                    </div>
                    <div className="newpass">
                        <span>New password</span>
                        <input type="password" ref={ecpass} />
                    </div>



                    <button className="updatepassbtn" onClick={()=>{resetPass()}}>reset</button>


                </div>
            </div>
        </div>
    )
}

export default Setting