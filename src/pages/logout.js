import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/synthetify.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import logout_black from '../images/projects/logos/logout_black.png'
import logout_white from '../images/projects/logos/logout_white.png'


const Logout = () => {
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
    <Seo title="Log Out | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Log Out Comic book @ Powrót z U'}
      logo={theme==='dark'?logout_black : logout_white}
      logoalt={'Powrót z U logo'}
      ux={false}
      ill={true}
      brand={true}
      desc={'Log Out was a project aimed at children and teenagers, educating them about FOMO and addictive habits. The project consisted of creating a comic book to entice the young audience that showcased everyday-life scenes. It payed attention to gambling, social media addiction and fomo.'}
      date={'september 2020'}
      role={'illustrator, graphic designer'}
      deliverables={'comic book, wordmark'}
      tools={'Affinity Designer, Fire Alpaca. Huion drawing tablet'}
      problem={''}
      solution={''} />
    </div>
  </Layout>
)};

export default Logout
