import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './writeconfession.css'

function Writeconfession() {
    return (
        <>


            <Navbar />
            <div className="writeconfessioncontainer">
                <div className="writeconfessionsec1">
                    <h1 className='writeconfessiontitle'>Confess your love</h1>
                    <p className='writeconfessionsub'> Your identity is not revealed or stored with  { }</p>
                    <textarea className="writeconfession" placeholder="confess your love to {   }" />
                    <button className="writeconfessionbtn">Share </button>
                </div>
 
               <div className="writeconfessionsec2">
                    <h3 className='themetitle'>Choose theme</h3>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/one.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/two.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/three.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/four.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/five.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/six.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/seven.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/eight.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/nine.png'}/>
                    <img className="writeconfessionthemeimage"  src={process.env.PUBLIC_URL+'/assets/images/ten.png'}/>




                </div> 
            </div>
        </>
    )
}

export default Writeconfession