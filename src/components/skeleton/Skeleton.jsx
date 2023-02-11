
import './skeleton.css'
import { ContentCopyOutlined, CopyAll, CopyAllOutlined, FacebookRounded, Instagram, Telegram, WhatsApp, WhatshotRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Confession from '../../components/confession/Confession'
import Navbar from '../../components/Navbar/Navbar'
import { Share } from '@mui/icons-material'
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
function Skeleton({type}) {

    if(type=="home")
    {  return (
        <div className = 'Homemain'>
        <div className="scontainer">

        <Navbar />
    
          <div className="shome">
    
            <div className="susernamesection">
    
              <h3 style={{visibility:"hidden"}}>hola </h3>
            </div>
            <div className="slinkcopysection">
    
              <p>here is your link where everyone can confess</p>
              <div className="scopylink">
    
    
                <a href="#"></a>
    
                
     
              </div>
            </div>
    
            <div className="slinkssharesection">
              <h4>share with social media</h4>
              <div className="ssocialmedia">
    
    
                <div className="sfacebook" style={{visibility:"hidden"}}>
    
                
                  <FacebookShareButton quote="confessLove" hashtag ="Confess" >
    
                  <FacebookRounded style={{ color: "blue" }} />
                  </FacebookShareButton>
                </div>
    
                <div className="sinstagram" style={{visibility:"hidden"}} >
    
                  <TelegramShareButton quote=" confessLove ">
    
                       <Telegram style={{ color: "blue" }} />
                  </TelegramShareButton>
               
                </div>
                <div className="swhatsapp" style={{visibility:"hidden"}}>
                  <WhatsappShareButton title="confesslove" quote="confessLove" hashtag ="Confess"  >
    
                     <WhatsApp style={{ color: "green" }} />
                  </WhatsappShareButton>
                 
                </div>
    
              </div>
            </div>
    
          </div>
        </div>
        <div className="sconfessions">

<h3>Here is your lovely confessions</h3>


{

  <div className="sconfessions-items">

<div className="sconfessionmain" >

<div className="sfromto">



        <div className="sfrom">
            <h5 style={{visibility:"hidden"}}>Anonymous</h5>

        </div>
        <div className="share">
           <Share style={{color:"red"}} />
            </div>


        </div>
        <div className="scontent">

            <p style={{visibility:"hidden"}} className="stext">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet neque id porro placeat velit ipsam, ratione provident nostrum, dolorem mollitia excepturi voluptates debitis aliquid quibusdam molestias, quisquam in quod!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus ratione asperiores expedita! Ea, maxime! Est eius voluptatem ducimus veniam eligendi velit vitae recusandae consequatur, illo sit nam placeat at


            </p>
        </div>

        <p className="sdate"></p>
    </div>
    <div className="sconfessionmain" >

<div className="sfromto">



        <div className="sfrom">
            <h5 style={{visibility:"hidden"}}>Anonymous</h5>

        </div>
        <div className="share">
           <Share style={{color:"red"}} />
            </div>


        </div>
        <div className="scontent">

            <p style={{visibility:"hidden"}} className="stext">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet neque id porro placeat velit ipsam, ratione provident nostrum, dolorem mollitia excepturi voluptates debitis aliquid quibusdam molestias, quisquam in quod!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus ratione asperiores expedita! Ea, maxime! Est eius voluptatem ducimus veniam eligendi velit vitae recusandae consequatur, illo sit nam placeat at


            </p>
        </div>

        <p className="sdate"></p>
    </div>
    <div className="sconfessionmain" >

<div className="sfromto">



        <div className="sfrom">
            <h5 style={{visibility:"hidden"}}>Anonymous</h5>

        </div>
        <div className="share">
           <Share style={{color:"red"}} />
            </div>


        </div>
        <div className="scontent">

            <p style={{visibility:"hidden"}} className="stext">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus ratione asperiores expedita! Ea, maxime! Est eius voluptatem ducimus veniam eligendi velit vitae recusandae consequatur, illo sit nam placeat at


            </p>
        </div>

        <p className="sdate"></p>
    </div>

    <div className="sconfessionmain" >

<div className="sfromto">



        <div className="sfrom">
            <h5 style={{visibility:"hidden"}}>Anonymous</h5>

        </div>
        <div className="share">
           <Share style={{color:"red"}} />
            </div>


        </div>
        <div className="scontent">

            <p style={{visibility:"hidden"}} className="stext">
            Dolorem repellendus ratione asperiores expedita! Ea, maxime! Est eius voluptatem ducimus veniam eligendi velit vitae recusandae consequatur, illo sit nam placeat at


            </p>
        </div>

        <p className="sdate"></p>
    </div>
    
</div>


}
</div>
        </div>
  )
    }
    else if(type=="write")
    {return (
        <>


        <Navbar />
        <div className="swriteconfessioncontainer">
            <div className="swriteconfessionsec1" >
                <h1 className='swriteconfessiontitle' style={{visibility: 'hidden'}}>confess your love to </h1>
                <p style={{visibility: 'hidden'}} className='swriteconfessionsub'> Your identity is not revealed or stored </p>
                <textarea  style={{visibility: 'hidden'}} maxLength={800}   />
                <button style={{visibility: 'hidden'}} className="swriteconfessionbtn" >Share </button>
            </div>

           <div className="swriteconfessionsec2">
                <h3 className='sthemetitle'></h3>
                <img className="swriteconfessionthemeimage" name="one" />
                <img className="swriteconfessionthemeimage" name="two"/>
                <img className="swriteconfessionthemeimage" name="three"/>
                <img className="swriteconfessionthemeimage" name="four" />
                <img className="swriteconfessionthemeimage" name="five" />
                <img className="swriteconfessionthemeimage" name="six"/>
                <img className="swriteconfessionthemeimage" name="seven" />
                <img className="swriteconfessionthemeimage" name="eight" />
                <img className="swriteconfessionthemeimage" name="nine"/>
                <img className="swriteconfessionthemeimage" name="ten"/>




            </div> 
        </div>
    </>
    )
    }
}

export default Skeleton