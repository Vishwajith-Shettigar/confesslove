import React, { useEffect, useState,useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './writeconfession.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Writeconfession() {
    const BP=process.env.REACT_APP_API_KEY;
const [username,setUsername]=useState(null)
const text=useRef();
const params = useParams();
    useEffect(()=>{

        const getuser=async()=>{



            try{
             const res=await axios.post(BP+`/auth/getuser`,{username:params.username});
            
            setUsername(res.data.username)
            }
             catch(e) {{
          
             }}
            }
          
            getuser();
    

    },[])
const [theme,setTheme]=useState("eight");
const [fcolor,setFcolor]=useState("black")
    const selectTheme=(e)=>{


if(e.target.name==="six")
{
    setFcolor("white")
}
else{
    setFcolor("black")
}
setTheme(e.target.name)

    }

    const share=async()=>{

        try{
            console.log(username,text,theme)
            const res=await axios.post(BP+"/confession/save",{username:username,text:text.current.value,theme:theme});
           console.log(res)
         
           }
            catch(e) {{
         console.log(e)
            }}

    }

   if( username!=null && theme && fcolor)
    return (
    
        <>


            <Navbar />
            <div className="writeconfessioncontainer">
                <div className="writeconfessionsec1">
                    <h1 className='writeconfessiontitle'>Confess your love to {username}</h1>
                    <p className='writeconfessionsub'> Your identity is not revealed or stored </p>
                    <textarea ref={text} maxLength={800}  style={{backgroundImage: "url(" +  process.env.PUBLIC_URL+"/assets/images/"+theme+".png"  + ")", color:fcolor}} className="writeconfession" placeholder="confess your love to {   }" />
                    <button className="writeconfessionbtn" onClick={()=>share()}>Share </button>
                </div>
 
               <div className="writeconfessionsec2">
                    <h3 className='themetitle'>Choose theme</h3>
                    <img className="writeconfessionthemeimage" name="one" onClick={(e)=>selectTheme(e)}  src={process.env.PUBLIC_URL+'/assets/images/one.png'}/>
                    <img className="writeconfessionthemeimage" name="two" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/two.png'}/>
                    <img className="writeconfessionthemeimage" name="three" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/three.png'}/>
                    <img className="writeconfessionthemeimage" name="four" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/four.png'}/>
                    <img className="writeconfessionthemeimage" name="five" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/five.png'}/>
                    <img className="writeconfessionthemeimage" name="six" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/six.png'}/>
                    <img className="writeconfessionthemeimage" name="seven" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/seven.png'}/>
                    <img className="writeconfessionthemeimage" name="eight" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/eight.png'}/>
                    <img className="writeconfessionthemeimage" name="nine" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/nine.png'}/>
                    <img className="writeconfessionthemeimage" name="ten" onClick={(e)=>selectTheme(e)} src={process.env.PUBLIC_URL+'/assets/images/ten.png'}/>




                </div> 
            </div>
        </>
    )
    else{
        return(

            <>


            <Navbar />
            <div className="writeconfessioncontainer">
                <div className="writeconfessionsec1">
                    <h1 className='writeconfessiontitle'>no confession room exists named {params.username}</h1>
                    <p className='writeconfessionsub'> click here to create your own confession room</p>
                  
                </div>
                </div>
 
            </>

        )
    }
}

export default Writeconfession