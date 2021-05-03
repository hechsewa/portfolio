import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/empower.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import archdesk_black from '../images/projects/logos/archdesk_black.svg'
import archdesk_white from '../images/projects/logos/archdesk_white.svg'
import moodboard from '../images/projects/empower/empower_moodboard.jpg'
import wireframe1 from '../images/projects/empower/empower_wireframe_2.jpg'
import wireframe2 from '../images/projects/empower/empower_wireframe_1.jpg'
import wordmark from '../images/projects/empower/empower_wordmark.jpg'
import screens from '../images/projects/empower/empower_screens.jpg'
import mobile from '../images/projects/empower/empower_screens_mobile.jpg'
import mockdesk from '../images/projects/empower/empower_desktop.png'
import mockmobile from '../images/projects/empower/empower_phone.png'


const Empower = () => {
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
    <Seo title="Empower by Example | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Empower by Example @ Archdesk'}
      logo={theme==='dark'?archdesk_black : archdesk_white}
      logoalt={'Archdesk logo'}
      ux={true}
      ill={false}
      brand={true}
      desc={'Empower by example is an annual campaign about women working in construction industry. The idea is to bring awareness and show examples of women successfully working in this area. They are still a minority, but a growing one. The campaign idea is to encourage women who would like to pursue a career in construction industry but are insecure and  hesitating. I co-created the project with a senior designer - Dominika. Together we worked alongside the content team to create an animated landing page.'}
      date={'march 2021'}
      role={'UI/UX designer, wordmark designer'}
      deliverables={'Landing page, Wordmark'}
      tools={'Adobe XD, Adobe Illustrator, Adobe Photoshop, Adobe AfterEffects, pencil+paper'}
      problem={'The impact of women to the construction industry can be sometimes underappreciated. Women are still treated like a minority, when in fact they are highly responsible for construction field expanding and growing.'}
      solution={'We decided to shine a light on this issue showing examples of women successfully working in this area. Showcasing the stories in a creative way, with the help of animation and interaction can attract women and men to the landing page.'} />
      <div className='empower_moodboard project_sec'>
        <h3>Moodboard</h3>
        <div className='project_img_big'><img src={moodboard} alt={'Moodboard with pictures of feminin webdesigns'}/></div>
      </div>
      <div className='empower_wordmark project_sec'>
        <h3>Wordmark</h3>
        <div className='empower_wordmark_in'>
          <div className='project_img'><img src={wordmark} alt={'empower by example wordmark'} /></div>
          <p>I was challenged to create a wordmark for the project that both showcased a feminine character of women empowerment, while still connecting to construction. I experimented with different fonts and colors. We ended up using the one on the right, with slight color modification to match the design.</p>
        </div>
      </div>
      <div className='empower_wireframes project_sec'>
        <h3>Wireframes</h3>
        <div className='project_in'>
          <div className='project_img'><img src={wireframe1} alt={'wireframes showing the prorotype connections and screens'} /></div>
          <div className='project_img'><img src={wireframe2} alt={'hand drawn wireframes of movement on the page'} /></div>
        </div>
        <p>We created wireframes in Adobe XD showing different screens and interactions, and also prototyped the project. Then we also hand-drawn the movement that couldn't be shown in Adobe XD, so that we could animate it in After Effects for the developer.</p>
      </div>
      <div className='empower_screens project_sec'>
        <h3>Final design</h3>
        <div className='project_in'>
          <div className='project_img'><img src={screens} alt={'ready designs screens for a standard website size'} /></div>
          <div className='project_img'><img src={mobile} alt={'ready designs screens for a mobile version'} /></div>
        </div>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/527871193" width="640" height="323" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className='empower_mocks project_sec'>
        <h3>Mockups</h3>
        <div className='project_in'>
          <div className='project_img'><img src={mockdesk} alt={'designs mocked up on desktop'} /></div>
          <div className='project_img'><img src={mockmobile} alt={'designs mocked up on mobile'} /></div>
        </div>
      </div>
      <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/"><p>{"<"} Go back to projects</p></a>
      </div>
    </div>
  </Layout>
)};

export default Empower
