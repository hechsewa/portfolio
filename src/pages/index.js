import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode'
import lineartlight from '../images/lineart_white.svg'
import lineartdark from '../images/lineart_black.svg'
import '../components/index.css'
import ProjectTab from '../components/ProjectTab/projecttab.js'
import TestimonialTab from "../components/TestimonialTab/TestimonialTab"
import synth from '../images/synth.png'
import inhub from '../images/inhub.png'
import zatoka from '../images/zatoka.png'
import kocwa from '../images/testimonials/kocwa.jpg'
import anda from '../images/testimonials/anda.jpg'
import coffee from '../images/mobile.png'
import resume from '../images/hechsman_resume_eng.pdf'

const IndexPage = () =>{
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
    <Seo title="Projects | Ewa Hechsman Portfolio" />
    <div className='head-main'>
      <div className='head-img'>
        <div className='head-img-logo'><p>branding + logo design</p></div>
        <div className='head-img-ux'><p>ui design</p></div>
        <div className='head-img-sm'><p>graphic design</p></div>
        <img alt="lineart drawing of skills: illustration, ui and social media" src={theme==='dark' ? lineartdark : lineartlight}/>
      </div>
      <div className='head-text'>
        <div className='head-hello'>
          <h1>UI &</h1>
          <h1 className='marker'>Graphic Designer</h1>
        </div>
        <div className='head-desc'>
          <p>Based in Cracow, Poland. Passionate about making products and visuals look great.</p>
        </div>
      </div>
    </div>
    <div className='projects'>
      <h2>Selected Projects</h2>
      <p>you can find more of my work in <a onClick={handleClick} id='home_visuals' href={'/portfolio/visuals'}>visuals</a></p>
      <div className='projects-gallery'>
        <ProjectTab 
          theme={theme}
          img={inhub}
          title={'Inhub Innovations LP'}
          ux={true}
          brand={false}
          ill={false}
          linker={'/portfolio/inhub'}
        />
        <ProjectTab 
          theme={theme}
          img={coffee}
          title={'Coffee Station Mobile App'}
          ux={true}
          brand={false}
          ill={false}
          linker={'/portfolio/coffeemobile'}
        />
        <ProjectTab 
          theme={theme}
          img={zatoka}
          title={'Food Truck Branding'}
          ux={false}
          brand={true}
          ill={true}
          linker={'/portfolio/zatoka'}
        />
        <ProjectTab 
          theme={theme}
          img={synth}
          title={'Synthetify Web App'}
          ux={true}
          brand={true}
          ill={false}
          linker={'/portfolio/synthetify'}
        />
      </div>
    </div>
    <div className='testimonials'>
      <div className='testimonials-content'>
        <div className='testimonial-text'>
          <h3>What people say 💬</h3>
          <p className='testimonial-text-p'>Here are some opinions from people who worked with me on different projects.
          </p>
        </div>
      <div className='testimonial-gallery'>
        <TestimonialTab 
          theme={theme}
          avatar={kocwa}
          name={'Paweł Kocwa'}
          function={'Founder @ Codenauts'}
          quote={'I had an opportunity to work with Ewa during a process of creating logos for a few projects.\
        Ewa was always very well prepared, her ideas on point and very well corelated\
        to our needs at the given stage of work. Working with Ewa is a pleasure.'}
        />
        <TestimonialTab 
          theme={theme}
          avatar={anda}
          name={'Anda Alexandra Rosiek'}
          function={'Project Manager Team Lead @ Archdesk'}
          quote={'Ewa is a remarkable human being. She\'s open and communicative and kind and always gets involved in projects both with the head and with her heart. She\'s \
          a great person to work with - she listens and delivers above and beyond, of course in time. She\'s\
          very creative and each piece she does is amazing. Ewa will be a great addition to any creative team!'}
        />
      </div>
      </div>
    </div>
    <div className='contact-me'>
      <h3>Let's work together!</h3>
      <p>Feel free to email me about freelance projects, or full time jobs.</p>
      <div className='contact-btns'>
        <a href="mailto:ewahechsman@gmail.com" id='home_send_email' onClick={handleClick}><button>Send me an e-mail</button></a>
        <a href={resume} id='home_resume' download="EwaHechsman_Resume.pdf" onClick={handleClick}><button>Download Resume</button></a>
      </div>
    </div>
  </Layout>
)
};

export default IndexPage
