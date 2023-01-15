import { ContentCopyOutlined, FacebookRounded, Instagram, WhatsApp, WhatshotRounded } from '@mui/icons-material'
import React from 'react'
import Confession from '../../components/confession/Confession'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
function Home() {
  return (
    <div className = 'Homemain'>

  


    <div className="container">

      <Navbar />

      <div className="home">

        <div className="usernamesection">

          <h3>Hola vish</h3>
        </div>
        <div className="linkcopysection">

          <p>here is your link where everyone can confess</p>
          <div className="copylink">


            <a href="#"> https://www.confeslove.com/vishdark</a>
            <ContentCopyOutlined />
          </div>
        </div>

        <div className="linkssharesection">
          <h4>Share your link on social media</h4>
          <div className="socialmedia">


            <div className="facebook">

              <FacebookRounded style={{ color: "blue" }} />
            </div>

            <div className="instagram" >
              <Instagram style={{ color: "red" }} />
            </div>
            <div className="whatsapp">
              <WhatsApp style={{ color: "green" }} />
            </div>

          </div>
        </div>

      </div>
    </div>

    
    <div className="confessions">

<h3>Here is your lovely confessions</h3>
<div className="confessions-items">
<Confession/>
<Confession/>
<Confession/>
<Confession/>
<Confession/>
<Confession/>
</div>
</div>
    </div>
  )
}

export default Home