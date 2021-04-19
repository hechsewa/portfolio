import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/empower.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'

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
      logo={'https://via.placeholder.com/150x80'}
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
    </div>
  </Layout>
)};

export default Empower
