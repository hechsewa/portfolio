import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/synthetify.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import synth_black from '../images/projects/logos/synthetify_black.svg'
import synth_white from '../images/projects/logos/synthetify_white.svg'
import synth_logos from '../images/projects/synthetify/synth_logos.jpg'
import synth_logo from '../images/projects/synthetify/synth_logo.jpg'
import synth_icons from '../images/projects/synthetify/synth_icons.jpg'
import synth_iso from '../images/projects/synthetify/synth_iso.jpg'
import synth_app from '../images/projects/synthetify/synth_app.jpg'
import synth_modals from '../images/projects/synthetify/synth_modals.jpg'
import synth_redesign from '../images/projects/synthetify/synth_redesign.jpg'
import synth_sm from '../images/projects/synthetify/synth_sm_graphics.jpg'
import synth_mock_1 from '../images/projects/synthetify/synth_mock_1.jpg'
import synth_mock_2 from '../images/projects/synthetify/synth_mock_2.jpg'
import synth_mock_3 from '../images/projects/synthetify/synth_mock_3.jpg'
import synth_system from '../images/projects/synthetify/synth_system.png'


const Synthetify = () => {
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
    <Seo title="Synthetify | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Synthetify Branding + UI/UX'}
      logo={theme==='dark'?synth_black : synth_white}
      logoalt={'Synthetify logo'}
      ux={true}
      ill={false}
      brand={true}
      desc={'Synthetify is an upcoming cryptocurrencies and DeFi start up. Their project consists of a responsive web app for exchanging and staking DeFi tokens. Synthetify is by far the biggest project I\'ve been doing, and it\'s still growing. It involved many graphic elements such as a logo, some icons, a pitch deck presentation, a whitepaper, social media graphics, isometric illustrations, GIFs, motion videos and UI/UX: a landing page and a web app in form of a dashboard.'}
      date={'march 2020--..'}
      role={'UI/UX designer, logo designer, graphic designer'}
      deliverables={'landing page, web app, logo, social media graphics, whitepaper, motion effect video, pitch deck presentation'}
      tools={'Figma, Affinity Designer, Affinity Photo, Adobe After Effects'}
      problem={'Allowing people to exchange and stake tokens in their browser. Having fully responsive web application for crypto market, that allowed numerical operations even on the smartphone'}
      solution={'A dashboard design for the web app allows the app to be easily displayed on multiple devices, in every orientation. The blocks building the dashboard can be easily transformed and limited.'} />
    </div>
    <div className='project_sec'>
        <h3>Logo design</h3>
        <p>First up, I was challenged to create a logo design consistent with currect DeFi market logos, such as Solana or Synthetix. I went for a modern, neon look, but with solid colors and dynamic 'S' shape. The S shape originated from first letter of the brand name, but also resembled two arrows that could be traced back to exchange. Token exchange being one of the app's main features.</p>
        <div className='project_img_big'><img src={synth_logos} alt={'Initial Logos for Synthetify project'}/></div>
        <p>Above, some inital projects that focused more on the exchange arrows and origami-like shapes. Below, the final logo project.</p>
        <div className='project_img_big'><img src={synth_logo} alt={'Final Synthetify logo'}/></div>
    </div>
    <div className='project_sec'>
        <h3>Icons</h3>
        <p>I created a set of outlined icons that could be used in various places, like presentations, LP and web app. Some icons presenting actual actions or features of the web app, and some standard sm icons.</p>
        <div className='project_img_big'><img src={synth_icons} alt={'Icons created for Synthetify project'}/></div>
    </div>
    <div className='project_sec'>
        <h3>Other graphics</h3>
        <p>For whitepaper and social media, I created a set of neon-colored isometric illustrations, which at the time were quite popular. For social media, I chose to go with simple design which resembled the look of an actual web app's dashboard, with rounded-cornered tiles.</p>
        <div className='project_in'>
          <div className='project_img'><img src={synth_iso} alt={'isometric illustrations of exchange, piggybank and a lightbulb'} /></div>
          <div className='project_img'><img src={synth_sm} alt={'social media graphics with tiles and features'} /></div>
        </div>
    </div>
    <div className='project_sec'>
      <h3>UI/UX designs</h3>
      <p>The web app is an actual Synthetify's product. The design needed to be highly functional and intuitive, that's why we decided to keep the design fairly simple. The main objective was to keep the dark mode as default look.</p>
      <h4>Design system</h4>
      <div className='project_img_big'><img src={synth_system} alt={'Design system for Synthetify'}/></div>
      <h4>Dashboard web app</h4>
      <p>Web app is maily targeted for desktop. Below, I presented two main tabs from a web app: Staging tab with token actions (mint, deposit, withdraw) and Account tab, with your account details. The other screen presents modal windows that appear on each action, allowing the user to type in transation details.</p>
      <div className='project_in'>
          <div className='project_img'><img src={synth_app} alt={'desktop web app screens: staging tab and account tab'} /></div>
          <div className='project_img'><img src={synth_modals} alt={'modal windows: deposit, send and mint'} /></div>
      </div>
      <p>Right now, we're redesigning the app for production. We wanted to keep the simple look, but make the colors more gray and the layout more dashboard-like. Here's the staging tab in the new design.</p>
      <div className='project_img_big'><img src={synth_redesign} alt={'Web app redesign, gray Staging tab'}/></div>
    </div>
    <div className='project_sec'>
      <h3>Mockups</h3>
      <p>Here, presented a landing page design on a laptop and whitepaper design including isometric illustrations.</p>
      <div className='project_in'>
          <div className='project_img'><img src={synth_mock_1} alt={'mockup landing page on laptop'} /></div>
          <div className='project_img'><img src={synth_mock_2} alt={'whitepaper mockup as a brochure'} /></div>
      </div>
      <p>Synthetify's web app was also design to be responsive. Below, presenting a web app on different sized screens.</p>
      <div className='project_img_big'><img src={synth_mock_3} alt={'Responsive screens web app, different sizes'}/></div>
    </div>
    <div className='project_sec'>
      <h3>Videos</h3>
      <p>I prepared a logo animation that could be used in videos, as a loder or on social media.</p>
      <iframe title="synthetify logo animation" src="https://player.vimeo.com/video/544333885" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <p>The motion video below was created for a Hackaton competion and presented main functionalities of the web app, alongside app screens.</p>
      <iframe title="synthetify hackaton video" src="https://player.vimeo.com/video/544335238" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/"><p>{"<"} Go back to projects</p></a>
    </div>
  </Layout>
)};

export default Synthetify
