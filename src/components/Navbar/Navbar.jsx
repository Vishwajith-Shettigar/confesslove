import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { EmojiEmotions, Settings } from '@mui/icons-material';
import "./navbar.css"
import { color } from '@mui/system';
function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar-left">
               
                <h3>ConfessLove</h3>


            </div>
            <div className="navbar-center">

            </div>


            <div className="navbar-right">
                <div className="navbar-profile">

               <a href="/" style={{textDecoration:"none",color:"black"}}> <AccountCircleIcon/></a>
            
                </div>
                <div className="navbar-setting">
                <a href="/user/setting" style={{textDecoration:"none",color:"black"}}><Settings/></a>


                </div>
                <div className="navbar-logout">
<h5>logout</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar