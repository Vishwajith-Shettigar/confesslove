import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './createlove.css'

function Createlove() {
  return (
    <div className="createlovecontainer">
        <Navbar />
      
<div className="createlovesec1">

  <img className='imagecreatelove' src={process.env.PUBLIC_URL+'/assets/images/confesslovehomepage.png'}/>
{/* <div className="textcont">

  <h1 className="firstline">Confess  </h1>
  <h1 className="secondline">your  </h1>
  <h1 className="thirdline"> love </h1>
  <h1 className="fourthline"> to </h1>
  <h1 className="fifthline"> loved one</h1>
</div>
<div className="otherinfo">

  two
</div> */}

<div className='trynow'>

  <a  href="/">try now</a>
</div>
</div>
      


    </div>
  )
}

export default Createlove