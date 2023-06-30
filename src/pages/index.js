import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode'
import '../components/index.css'
import ProjectTab from '../components/ProjectTab/projecttab.js'
import TestimonialTab from "../components/TestimonialTab/TestimonialTab"
import synth from '../images/synth.png'
import inhub from '../images/inhub.png'
import zatoka from '../images/zatoka.png'
import kocwa from '../images/testimonials/kocwa.jpg'
import anda from '../images/testimonials/anda.jpg'
import doma from '../images/testimonials/doma.jpg'
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
      <div className='head-text'>
        <div className='head-hello'>
          <h1>I'm Ewa, a UI • UX • Graphic Designer</h1>
        </div>
        <div className='head-desc'>
          <h2>While designing, I put a strong focus on visuals, making pixel-perfect designs. Coming from
            a programming background, I work closely with developers to deliver end products that provide best
           user satisfaction 💚</h2>
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
          ui={true}
          ux={false}
          brand={false}
          ill={false}
          linker={'/portfolio/inhub'}
          desc={'This is a cool project that I will describe in two sentences. And this would be the second one.'}
        />
        <ProjectTab 
          theme={theme}
          img={coffee}
          title={'Coffee Station Mobile App'}
          ui={true}
          ux={true}
          brand={false}
          ill={false}
          linker={'/portfolio/coffeemobile'}
        />
        <ProjectTab 
          theme={theme}
          img={zatoka}
          title={'Food Truck Branding'}
          ui={false}
          ux={false}
          brand={true}
          ill={true}
          linker={'/portfolio/zatoka'}
        />
        <ProjectTab 
          theme={theme}
          img={synth}
          title={'Synthetify Web App'}
          ui={true}
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
          function={'Chief Technology Officer @ play.air'}
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
        <TestimonialTab 
          theme={theme}
          avatar={doma}
          name={'Dominika Kwiatkowska'}
          function={'Art Director @ Archdesk'}
          quote={'Working with Ewa was a blast. She was a quick learner, creative soul with a technical background \
          - what better combination could you expect? We worked together on web design projects mostly, but we brought\
           a lot of creative design ideas to live - for example illustrations to our Blog section, creative campaigns \
           (Women in construction). I highly recommend Ewa as an excellent worker in the field of design!'}
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
