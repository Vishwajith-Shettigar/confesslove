import { ContentCopyOutlined, FacebookRounded, Instagram, Telegram, WhatsApp, WhatshotRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Confession from '../../components/confession/Confession'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import {useContext} from 'react'
import {globalinfo} from '../../App'
import axios from 'axios'

import {

  FacebookShareButton,

  InstapaperShareButton,




  OKShareButton,
  PinterestShareButton,

  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,


  WhatsappShareButton,

} from "react-share";


import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
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

            
              <FacebookShareButton quote="confessLove" hashtag ="Confess" url='https://www.facebook.com/'>

              <FacebookRounded style={{ color: "blue" }} />
              </FacebookShareButton>
            </div>

            <div className="instagram" >

              <TelegramShareButton quote=" confessLove "url='https://www.facebook.com/'>

                   <Telegram style={{ color: "blue" }} />
              </TelegramShareButton>
           
            </div>
            <div className="whatsapp">
              <WhatsappShareButton  quote="confessLove" hashtag ="Confess" url='https://www.facebook.com/' >

                 <WhatsApp style={{ color: "green" }} />
              </WhatsappShareButton>
             
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