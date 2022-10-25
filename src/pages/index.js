import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode'
import lineartlight from '../images/lineart_white.svg'
import lineartdark from '../images/lineart_black.svg'
import '../components/index.css'
import ProjectTab from '../components/ProjectTab/projecttab.js'
import women from '../images/women.png'
import synth from '../images/synth.png'
import inhub from '../images/inhub.png'
import zatoka from '../images/zatoka.png'

const IndexPage = () =>{
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
          <h1>UI & Graphic</h1>
          <h1 className='marker'>Designer</h1>
        </div>
        <div className='head-desc'>
          <p>I'm Ewa, Digital Designer with a programming background. I believe that great design is a gateway to information and connecting with users. </p>
        </div>
      </div>
    </div>
    <div className='projects'>
      <h2>Selected <mark>Projects</mark></h2>
      <div className='projects-gallery'>
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
          img={inhub}
          title={'Inhub Innovations'}
          ux={true}
          brand={false}
          ill={false}
          linker={'/portfolio/inhub'}
        />
        <ProjectTab 
          theme={theme}
          img={women}
          title={'Empower by example'}
          ux={true}
          brand={true}
          ill={false}
          linker={'/portfolio/empower'}
        />
        <ProjectTab 
          theme={theme}
          img={synth}
          title={'Synthetify'}
          ux={true}
          brand={true}
          ill={false}
          linker={'/portfolio/synthetify'}
        />
      </div>
    </div>
  </Layout>
)
};

export default IndexPage
