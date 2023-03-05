import { Button } from '@mui/material'
import React, { useState ,useRef,useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './share.css'
import { render } from 'react-dom'

import { toBlob } from "html-to-image";
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
  const preventRefresh = (e) => {
    return "data will get lost";
};

useEffect(() => {
    window.addEventListener('beforeunload', preventRefresh);

    return () => {
        window.removeEventListener('beforeunload', preventRefresh);
    }
}, [])

    const {shareconfes,setShareconfes,theme,setTheme}=useContext(globalinfo);
    
    const imageRef = useRef(null);

    let fcolor="black";
    const [file,setFile]=useState();
    if(theme=="six")
    {
        fcolor="white"
    }
    else{
        fcolor="black";
    }

    const convertdivtoimg=async()=>{

       
     


//  htmlToImage.toPng(node)
//         .then( function(dataUrl){

//            var img=new Image();
//             img.src=dataUrl;
//        document.body.appendChild(img);
           
          
       
//         })
//         .catch((err)=>{
//             // console.log(err)
//         })


        
//second

const newFile = await toBlob(imageRef.current);
const data = {
  files: [
    new File([newFile], "nuzlocke.png", {
      type: newFile.type
    })
  ],
  title: "Confesslove.online",
  text: "confess your love to loved one"
};

try {
  if (!navigator.canShare(data)) {
    console.error("Can't share");
  }
  await navigator.share(data);
} catch (err) {
  console.error(err);
}



      
    }
    return (

        <div className='containersharemain'>
            <Navbar />

            <div className='containershare'>
                <div className='image' id="node" ref={imageRef} style={{backgroundImage: "url(" +  process.env.PUBLIC_URL+"/assets/images/"+theme+".png"  + ")", color:fcolor}}>

                 {shareconfes}
                </div>
                <button className='sharebtn' onClick={()=>convertdivtoimg()}>Share</button>
            </div>




        </div>
    )
}

export default Share