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
import logout from '../images/logout.png'
import future from '../images/future.png'

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
        <div className='head-img-ux'><p>ui/ux design</p></div>
        <div className='head-img-sm'><p>social media graphics</p></div>
        <img alt="lineart drawing of skills: illustration, ui/ux and social media" src={theme==='dark' ? lineartdark : lineartlight}/>
      </div>
      <div className='head-text'>
        <div className='head-hello'>
          <h1 className={theme==='dark' ? 'outline' : 'outline darkmode'}>Hi, I'm</h1>
          <h1 className='marker'>Ewa</h1>
        </div>
        <div className='head-desc'>
          <p>an aspiring Visual Designer with a programming background. I believe that great design is a gateway to information and connecting with users. </p>
        </div>
      </div>
    </div>
    <div className='projects'>
      <h2>Selected <mark>Projects</mark></h2>
      <div className='projects-gallery'>
        <ProjectTab 
          theme={theme}
          img={women}
          title={'Empower by example'}
          ux={true}
          brand={true}
          ill={false}
          linker={'/empower'}
        />
        <ProjectTab 
          theme={theme}
          img={synth}
          title={'Synthetify'}
          ux={true}
          brand={true}
          ill={false}
          linker={'/synthetify'}
        />
        <ProjectTab 
          theme={theme}
          img={future}
          title={'Futuristic LP'}
          ux={true}
          brand={false}
          ill={false}
          linker={'/future'}
        />
        <ProjectTab 
          theme={theme}
          img={logout}
          title={'Log Out Project'}
          ux={false}
          brand={true}
          ill={true}
          linker={'/logout'}
        />
      </div>
    </div>
  </Layout>
)
};

export default IndexPage
