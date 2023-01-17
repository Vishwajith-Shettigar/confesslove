import { Share } from '@mui/icons-material'
import React from 'react'
import './confession.css'
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import {globalinfo} from '../../App'
function Confession({c}) {
  const {shareconfes,setShareconfes,theme,setTheme} = useContext(globalinfo)
  const navigate=useNavigate();
  return (
    <div className="confessionmain">

<div className="fromto">



        <div className="from">
            <h5>Anonymous</h5>

        </div>
        <div className="share">
           <Share style={{color:"red"}} onClick={()=>{setShareconfes(c.text) ;setTheme(c.theme);navigate("/share")}}/>
            </div>


        </div>
        <div className="content">

            <p className="text">
{c.text}

            </p>
        </div>

        <p className="date">{(c.createdAt).split("T")[0]}</p>
    </div>
  )
}

export default Confession