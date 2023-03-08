import { ContentCopyOutlined, CopyAll, CopyAllOutlined, FacebookRounded, Instagram, Telegram, WhatsApp, WhatshotRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Confession from '../../components/confession/Confession'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext } from 'react'
import { globalinfo } from '../../App'
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
import Skeleton from '../../components/skeleton/Skeleton'
import Footer from '../../components/footer/Footer'
function Home() {
  const { user, setUser } = useContext(globalinfo);
  const [confessions, setConfessions] = useState([]);
  const BP = process.env.REACT_APP_API_KEY;
  console.log(user);
  const [copied, setcopied] = useState(false);


  useEffect(() => {

    const getcon = async () => {



      try {
        console.log("i am inside try");
        console.log(user);
        const res = await axios.get(BP + `/confession/get?username=${user}`);

        console.log("res")
        setConfessions(res.data);

      }
      catch (e) {
        {
          console.log(e.message)
        }
      }
    }

    getcon();
  }, [user])


  if (user) {
    return (
      <div className='Homemain'>




        <div className="container">

          <Navbar />

          <div className="home">

            <div className="usernamesection">

              <h3>Hola {user}</h3>
            </div>
            <div className="linkcopysection">

              <p>here is your link where everyone can confess</p>
              <div className="copylink">


                <a href={`https://confesslove.online/${user}`}>/confesslove/{user}</a>


                <CopyToClipboard text={`https://confesslove.online/${user}`}
                  onCopy={() => {

                    setcopied(true);
                    setTimeout(() => {
                      setcopied(false)

                    }, 3000)

                  }}
                >
                  {!copied ? <ContentCopyOutlined /> : <span>copied</span>
                  }
                </CopyToClipboard>

              </div>
            </div>

            <div className="linkssharesection">
              <h4>share with social media</h4>
              <div className="socialmedia">


                <div className="facebook">


                  <FacebookShareButton title="confesslove.online                        Want to confess something to me ? here is the door way " quote="confessLove" hashtag="Confess" url={`https://confesslove.online/${user}`}>

                    <FacebookRounded style={{ color: "blue" }} />
                  </FacebookShareButton>
                </div>

                <div className="instagram" >

                  <TelegramShareButton titke=" confesslove.online                        Want to confess something to me ? here is the door way " quote="confessLove" url={`https://confesslove.online/${user}`}>

                    <Telegram style={{ color: "blue" }} />
                  </TelegramShareButton>

                </div>
                <div className="whatsapp">
                  <WhatsappShareButton title=" confesslove.online                        Want to confess something to me ? here is the door way " quote="confessLove" hashtag="Confess" url={`https://confesslove.online/${user}`} >

                    <WhatsApp style={{ color: "green" }} />
                  </WhatsappShareButton>

                </div>

              </div>
            </div>

          </div>

        </div>


        <div className="confessions">

          <h3>Here is your lovely confessions</h3>


          {

            <div className="confessions-items">


              {

                confessions.map((c) => (

                  <Confession c={c} />
                ))

              }
            </div>


          }
        </div>

 <Footer/>
      </div>
     
    )
  }
  else {


    return (
      <Skeleton type="home" />
    )


  }
}

export default Home