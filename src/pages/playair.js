import * as React from "react"
import {useEffect} from 'react'
import {useState} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/playair.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import playair_head from '../images/projects/playair/header.webp'
import overview from '../images/projects/playair/1_overview.webp'
import moodboard from '../images/projects/playair/2_moodboard.webp'
import wf_mobile from '../images/projects/playair/3_wireframes_mobile.webp'
import wf_overview from '../images/projects/playair/4_wireframes_mobile_overview.webp'
import ui_mobile from '../images/projects/playair/5_UI_mobile.webp'
import ui_overview from '../images/projects/playair/6_UI_mobile_overview.webp'
import ui_prev from '../images/projects/playair/7_UI_mobile_prev.webp'
import website from '../images/projects/playair/8_website.webp'
import mobiles from '../images/projects/playair/9_mobiles.webp'
import sitemap from '../images/projects/playair/10_sitemap.webp'
import wf_web from '../images/projects/playair/11_wireframes.webp'
import web_prev from '../images/projects/playair/12_web_prev.webp'
import designsys_web from '../images/projects/playair/13_designsys.webp'
import web_overview from '../images/projects/playair/14_website.webp'
import project_overview from '../images/projects/playair/15_overview.webp'
import figma_video from '../images/projects/playair/instructions.webm'



const Playair = () => {
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
    <Seo title="Play.air mobile app & website | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Play.air Mobile App & Website'}
      headimg={playair_head}
      ux={true}
      ill={false}
      brand={false}
      desc={'Responsive mobile app and website design for speech therapy exercises for children, parents and doctors.'}
      date={'may 2023'}
      role={'UI/UX designer'}
      deliverables={'mobile app, website'}
      tools={'Figma, Affinity Designer'}
      problem={''}
      solution={''} />
    </div>
    <div className='project_sec project_sec_alt'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Project Overview</h3>
          <p>Play.air is a company that aims to educate and bring speech therapy to children everywhere, making it accessible from their mobile phones.
            <br/><br/>
              The goal was to design a responsive mobile and tablet application that could be used by kids to complete logopaedic exercises,
              that were being presented as fun, illustrative mini-games. The app was to be used with parents or doctors supervision. 
            <br/><br/>
            Alongside the application, play.air wanted to present their idea in an informative way, on a modern and responsive landing page.
            The website would be designed to showcase the application, and the CTA would be to download the app from store.</p>
          </div>
          <div className='project_img_big'><img src={overview} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
      </div>

      <div className='project_sec'>
        <h3>Moodboard</h3>
        <p>After the meeting with the founders, learning what the target group was and how the market and
          competitors looked, the next step was to prepare a moodboard.
          The moodboard goal was to present ideas for the application style to the company members,
          to align our point of view and make sure we’re seeing eye to eye.</p>
        <div className='project_img_big'><img src={moodboard} alt={'Moodboard of kids app screens and bright colors'} /></div>
      </div>
   
      <div className='project_img_full'><img src={mobiles} alt={'Mobile application banner with app screens on the right side'} /></div>

      <div className='project_sec project_sec_inner'>
        <h3>Wireframes</h3>
        <p>Wireframes were created to solve multiple challenges we encountered while designing the app flow. The main problem to solve was that the app was to be used by parents,
          speech therapists and children, and we faced issued with access rights. 
          The other issue was connected to data sensitivity regarding kids’ profiles.<br/>
          However, all problems managed to be resolved and the app flow was enriched with onboarding screens,
          game instructions and mini-games.</p>
        <div className='project_img_big'><img src={wf_mobile} alt={'Wireframes of mobile app with problem solution schema'} /></div>
      </div>

      <div className='project_img_full'><img src={wf_overview} alt={'Wireframes of the mobile app of a bright background'} /></div>

      <div className='project_sec project_sec_inner'>
        <h3>UI Design</h3>
        <p>To maintain consistency among the application, there was a several UI elements created.
          Starting off with picking the colors. The challenge here was that the colors had to be
          appealing for both adults and children, so they could not be too bright or too pastel.
          There would also be many colors used for the mini games. <br/><br/>
          Next, the typography scale was created and used in components of the application.
          After talking to developers and confirming it was possible, several reusable components such as buttons,
          inputs, headers, toast messages were created.</p>
        <div className='project_img_big'><img src={ui_mobile} alt={'Colors, typography and chosen components of design system'} /></div>
      </div>

      <div className='project_img_full'><img src={ui_overview} alt={'Overview with chosen mobile app screens'} /></div>

      <div className='project_img_big'>
        <video autoplay muted loop id="video">
          <source src={figma_video} type="video/webm"/>
        Your browser does not support the video tag.
        </video> 
        </div>
      
      <div className='project_img_full'><img src={ui_prev} alt={'Two mobile app screens on phone mockup'} /></div>

      <div className='project_img_full'><img src={website} alt={'Website banner with a laptop on the right side'} /></div>

      <div className='project_sec project_sec_inner'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Sitemap</h3>
          <p>The website structure is shown on the site map. Main page - homepage -
            is used to be a summary of play.air and a place where you can read more about each section.
            It directs to all other subpages.</p>
          <ul>
            <li><p>News - used to display short descriptions of current events, awards, achievements. Sometimes can link to an outside source like youtube video or an article.</p></li>
            <li><p>Our speech therapists - used to present therapists that are working with play.air, along with speech therapy companies and organizations. There is also a possibility to filter therapists by the voievodship.</p></li>
            <li><p>About Us - used to present play.air’s members and their mission & vision. It clearly states their goals and presents their current achievements, awards.</p></li>
            <li><p>Contact - has all the contact options, addresses, phone numbers and e-mails. It also has 3 forms, depending on the goal of the visit. Investors, parents, therapists and regular users can use the form to submit their ideas or request collaboration.</p></li>
            <li><p>Download app - single page used to display links to Google Store and Apple store to download the mobile app.</p></li>
            <li><p>For investor - used to store all the relevant information for investors.</p></li>
          </ul>
          </div>
          <div className='project_img_big'><img src={sitemap} alt={'Site map of the website'} /></div>
        </div>
      </div>

      <div className='project_sec'>
        <h3>Wireframes</h3>
        <p>After confirming the structure, wireframes were created.
          Then we met up with play.air’s members to align our views
          and tweak wireframes, than then became the final version before the UI.</p>
        <div className='project_img_big'><img src={wf_web} alt={'Wireframes of website page'} /></div>
      </div>

      <div className='project_img_full'><img src={web_prev} alt={'UI Design of website on laptop screen and mobile screen'} /></div>

      <div className='project_sec project_sec_inner'>
        <h3>UI Design</h3>
        <p>The biggest challenge was to design layouts that were responsive. We wanted the
          website to work well on both desktop and mobile screens, that’s why we opted for
          layouts that could be easily rearranged for mobile. Developers helped along the process
          to make sure the layout were easy to implement and functional. There was two sets of components
          prepared - one for desktop, one for mobile.</p>
        <div className='project_img_big'><img src={designsys_web} alt={'Design system, typography scale, chosen components of website design'} /></div>
      </div>

      <div className='project_img_full'><img src={web_overview} alt={'Website screens of subpages'} /></div>

      <div className='project_img_big'>
      <iframe src="https://player.vimeo.com/video/853377063?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="500vw" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="play.air website walkthrough"></iframe>
      </div>

      <div className='project_img_full'><img src={project_overview} alt={'Responsive screens of application on tablet and mobile and website design on laptop screen'} /></div>

      <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/portfolio/"><p>{"←"} Go back to projects</p></a>
      </div>
  </Layout>
)};

export default Playair