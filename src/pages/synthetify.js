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
      desc={'Synthetify is an upcoming cryptocurrencies and DeFi start up. Their project consists of a responsive web app for exchanging and staking DeFi tokens and a simple landing page. I also helped out with branding and marketing -- prepared a logo design, social media graphics and presentations for hackatons and investors.'}
      date={'march 2020--..'}
      role={'UI/UX designer, logo designer, graphic designer'}
      deliverables={'landing page, web app, logo, social media graphics, whitepaper, motion effect video, pitch deck presentation'}
      tools={'Figma, Affinity Designer, Affinity Photo, Adobe After Effects'}
      problem={'Having fully responsive web application for crypto market, that allowed numerical operations even on the smartphone'}
      solution={' '} />
    </div>
  </Layout>
)};

export default Synthetify
