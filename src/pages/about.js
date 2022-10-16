import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import about from '../images/about.jpg'
import '../components/about.css'
import ic_be from '../images/smicons/ic_be.svg'
import ic_drib from '../images/smicons/ic_drib.svg'
import ic_ig from '../images/smicons/ic_ig.svg'
import ic_ln from '../images/smicons/ic_ln.svg'
import ic_tw from '../images/smicons/ic_tw.svg'
import ic_be_drk from '../images/smicons/ic_be_dark.svg'
import ic_drib_drk from '../images/smicons/ic_drib_dark.svg'
import ic_ig_drk from '../images/smicons/ic_ig_dark.svg'
import ic_ln_drk from '../images/smicons/ic_ln_dark.svg'
import ic_tw_drk from '../images/smicons/ic_tw_dark.svg'


const About = () => {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    var bdy = document.getElementsByTagName('body')[0];
    if (theme==='dark') {
      bdy.className='';
    } else {
      bdy.className='darkmode';
    }
    console.log(theme);
  });


  return (
  <Layout theme={theme} setTheme={toggleTheme}>
    <Seo title="About | Ewa Hechsman Portfolio" />
    <div className='about-main'>
      <div className='about-pic'>
        <img src={about} alt="ewa hechsman in a cafe" />
        <div className={theme==='dark'? 'about-frame' : 'about-frame darkmode'}></div>
      </div>
      <div className='about-txt'>
        <h1>Hi, I'm Ewa</h1>
        <h2><mark>UI & Graphic Designer</mark> with a programming background</h2>
        <p>I’ve started as a programmer, but while exploring the world of front-end,
          I’ve stumbled upon interface design and fell in love with UI Design.
          This way, I’ve based my master’s thesis on UX in website design from a programmer’s
          point of view and continued to study Visual Design in my own time.
          Right now, I’m working as a <b>ui & graphic designer @ Archdesk.</b>
          <br/><br/>
          I'm based in Cracow, Poland. In the little free time I get, I enjoy musical theater, bullet journaling, good coffee and watercolors.
          </p>
        <div className={theme==='dark'?'resume-btns':'resume-btns darkmode'}>
          <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1hOSoDZiPMs5jfZEzX4rdiwfKFkNBvKx3/view?usp=sharing'><button>resume eng</button></a>
          <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1ykg-frEW5FgYuJf-9XLzZGvYZb0U0Txc/view?usp=sharing'><button>resume pl</button></a>
        </div>
        <div className='contact-info'>
          <div className='sm-icons'>
            <a href='https://twitter.com/ewsdesigns' target='_blank' rel="noreferrer"><img src={theme==='dark'? ic_tw_drk : ic_tw} alt={'Twitter icon'} /></a>
            <a href='https://www.linkedin.com/in/ewahechsman/' target='_blank' rel="noreferrer"><img src={theme==='dark'? ic_ln_drk : ic_ln} alt={'LinkedIn icon'} /></a>
            <a href='https://www.instagram.com/ewsdesigns/' target='_blank' rel="noreferrer"><img src={theme==='dark'? ic_ig_drk : ic_ig} alt={'Instagram icon'} /></a>
            <a href='https://dribbble.com/ewsdesigns' target='_blank' rel="noreferrer"><img src={theme==='dark'? ic_drib_drk : ic_drib} alt={'Dribbble icon'} /></a>
            <a href='https://www.behance.net/ewahechsman' target='_blank' rel="noreferrer"><img src={theme==='dark'? ic_be_drk : ic_be} alt={'Behance icon'} /></a>
          </div>
          <p>ewa.hechsman@gmail.com | +48 517 977 867</p>
        </div>
      </div>
    </div>
  </Layout>
)};

export default About
