import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './share.css'
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
function Share() {
    const {shareconfes,setShareconfes,theme,setTheme}=useContext(globalinfo);
    let fcolor="black";
    if(theme=="six")
    {
        fcolor="white"
    }
    else{
        fcolor="black";
    }

    return (

        <div className='containersharemain'>
            <Navbar />

            <div className='containershare'>
                <div className='image' style={{backgroundImage: "url(" +  process.env.PUBLIC_URL+"/assets/images/"+theme+".png"  + ")", color:fcolor}}>

                 {shareconfes}
                </div>
                <button className='sharebtn'>Share</button>
            </div>
           
        </div>
    )
}

export default Share