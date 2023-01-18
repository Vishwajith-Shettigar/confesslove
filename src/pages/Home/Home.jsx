import { ContentCopyOutlined, FacebookRounded, Instagram, WhatsApp, WhatshotRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Confession from '../../components/confession/Confession'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import {useContext} from 'react'
import {globalinfo} from '../../App'
import axios from 'axios'
function Home() {
  const {user,setUser}=useContext(globalinfo);
const [confessions,setConfessions]=useState([]);
const BP=process.env.REACT_APP_API_KEY;
  console.log(user);



useEffect(()=>{

const getcon=async()=>{



  try{
   const res=await axios.get(BP+`/confession/get?username=${user}`);
  
   console.log("res")
   setConfessions(res.data);
   console.log(confessions[0].text)
  }
   catch(e) {{

   }}
  }

  getcon();
},[user])
 



if(user)
  return (
    <div className = 'Homemain'>

  


    <div className="container">

      <Navbar />

      <div className="home">

        <div className="usernamesection">

          <h3>Hola {user}</h3>
        </div>
        <div className="linkcopysection">

          <p>here is your link where everyone can confess</p>
          <div className="copylink">


            <a href={`http://localhost:3000/${user}`}> http://localhost:3000/{user}</a>
            <ContentCopyOutlined />
          </div>
        </div>

        <div className="linkssharesection">
          <h4>Share your link on social media</h4>
          <div className="socialmedia">


            <div className="facebook">

              <FacebookRounded style={{ color: "blue" }} />
            </div>

            <div className="instagram" >
              <Instagram style={{ color: "red" }} />
            </div>
            <div className="whatsapp">
              <WhatsApp style={{ color: "green" }} />
            </div>

          </div>
        </div>

      </div>
    </div>

    
    <div className="confessions">

<h3>Here is your lovely confessions</h3>
<div className="confessions-items">


{

  confessions.map((c)=>(

    <Confession c={c} />
))
  
}
</div>
</div>
    </div>
  )
}

export default Home