import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import about from '../images/about.webp'
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

  const handleClick = (e) => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        'click_place': e.target.id,
      });
    }
  };

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
      </div>
      <div className='about-txt'>
        <h1>Hi, I'm Ewa</h1>
        <h2><mark>UI/UX & Graphic Designer</mark></h2>
        <p>I'm a passionate UI/UX and graphic designer, currently working as a <b>UI/UX designer at Archdesk</b>.  I majored in computer science at the AGH University of
          Science and Technology, but I noticed I
particularly liked the designing part of coding challenges. For that reason, I
decided to get into UI/UX and based my thesis on that topic. Programming background helps me every day as a designer to better communicate with developers, and make designs faster to implement. <br/> <br/>
As a designer, I focus on making the visuals pixel-perfect, as well as functional. Designing for sustainability has recently become my new passion, and I believe in upcoming years,
with AI growing in power, we need to be mindful of data storage and speed of the execution. Making sure the designs are functional, sustainable and brand-aware is challenging, but
rewarding 💪 <br/> <br/>
In my free time, I enjoy hiking, watercolor painting, crotcheting and amusing my plants with dad jokes.
          </p>
        <div className={theme==='dark'?'resume-btns':'resume-btns darkmode'}>
          <a onClick={handleClick} id='about_resume_eng' target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1hOSoDZiPMs5jfZEzX4rdiwfKFkNBvKx3/view?usp=sharing'>Open Resume EN🇬🇧 ↗</a>
          <a onClick={handleClick} id='about_resume_pl' target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1ykg-frEW5FgYuJf-9XLzZGvYZb0U0Txc/view?usp=sharing'>Open Resume PL🇵🇱 ↗</a>
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
