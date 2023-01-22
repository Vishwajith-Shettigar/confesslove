import { Button } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './share.css'
import { render } from 'react-dom'
import * as htmlToImage from 'html-to-image'
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
import { useMemo } from 'react'
import { RWebShare } from "react-web-share";
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
var node=document.getElementById('node')


function Share() {
    const {shareconfes,setShareconfes,theme,setTheme}=useContext(globalinfo);
    

    let fcolor="black";
    const [file,setFile]=useState();
    if(theme=="six")
    {
        fcolor="white"
    }
    else{
        fcolor="black";
    }

    const convertdivtoimg=()=>{

        htmlToImage.toPng(node)
        .then(function(dataUrl){

           var img=new Image();
            img.src=dataUrl;
            console.log(img.src);
          
           setFile(img);
           
        navigator
        .share({
          title: 'Example Image',
          text: 'Check out this image',
          url: '',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));

        })
        .catch((err)=>{
            // console.log(err)
        })

      
    }
    return (

        <div className='containersharemain'>
            <Navbar />

            <div className='containershare'>
                <div className='image' id="node" style={{backgroundImage: "url(" +  process.env.PUBLIC_URL+"/assets/images/"+theme+".png"  + ")", color:fcolor}}>

                 {shareconfes}
                </div>
                <button className='sharebtn' onClick={()=>convertdivtoimg()}>Share</button>
            </div>




        </div>
    )
}

export default Share