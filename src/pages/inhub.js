import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/inhub.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import inhub_logo_light from '../images/projects/logos/inhub-logo-light.png'
import inhub_logo_dark from '../images/projects/logos/inhub-logo-dark.webp'
import inhub_fundacja from '../images/projects/inhub/inhub-fundacja.png'
import inhub_inkubator from '../images/projects/inhub/inhub-inkubator.png'
import inhub_kariera from '../images/projects/inhub/inhub-kariera.png'
import inhub_mocks from '../images/projects/inhub/inhub-mocks.png'
import inhub_ux from '../images/projects/inhub/inhub-ux.png'
import inhub_prototyp from '../images/projects/inhub/inhub-prototyp.png'
import figma_video from '../images/projects/inhub/inhub-video.webm'


const Inhub = () => {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    var bdy = document.getElementsByTagName('body')[0];
    document.getElementById('video').play();
    if (theme==='dark') {
      bdy.className='';
    } else {
      bdy.className='darkmode';
    }
    console.log(theme);
  });


  return (
  <Layout theme={theme} setTheme={toggleTheme}>
    <Seo title="Inhub Innovations | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'UI Landing Pages for Inhub Innovations'}
      logo={theme==='dark'?inhub_logo_dark : inhub_logo_light}
      logoalt={'Inhub Innovations logo'}
      ux={true}
      ill={false}
      brand={false}
      desc={"Inhub Innovations Hub is a foundation that drives innovation and dreams for youth. They are focused on helping young people transform their ideas into valuable startups, and later on full grown companies. The project consisted of creating a UI desing of few web pages of their website, based on UX mockup designs."}
      date={'july 2022'}
      role={'UI designer, graphic designer'}
      deliverables={'UI designs for 4 LPs, contact page, modals + interactive prototypes'}
      tools={'Figma, Affinity Designer'}
       />
    </div>
    <div className='project_sec'>
        <h3>UX designs</h3>
        <p>UI designs were based on wireframes created by the UX designer. The collaboration with UX designer was close - we had meetings to discuss layouts, designs and potential UI styles. UX designer was present at each stage of the project, giving directions and feedbacks.</p>
        <div className='project_img_big'><img src={inhub_ux} alt={'Inhub UX wireframes'}/></div> 
    </div>
    <div className='project_sec'>
        <h3>UI design</h3>
        <p>Created UI designs for 4 web pages:
          <ul>
            <li>Career</li>
            <li>About foundation</li>
            <li>Incubator</li>
            <li>Contact Page</li>
          </ul>
          1 modal for Paid support and a structure of Inhub News:
          <ul>
            <li>News main page including links to workshops, interviews and articles</li>
            <li>Workshops: a list of workshops, workshop page with sign up</li>
            <li>Interviews: a list of interviews, interview page with video link</li>
            <li>Articles: a list of articles, article view</li>
          </ul>
        </p>
        <div className='project_img_big'><img src={inhub_fundacja} alt={'Inhub UI about foundation'}/></div>   
        <div className='project_img_big'><img src={inhub_inkubator} alt={'Inhub UI incubator'}/></div> 
        <div className='project_img_big'><img src={inhub_kariera} alt={'Inhub UI career'}/></div> 
        <div className='project_img_big'><img src={inhub_mocks} alt={'Inhub UI mockups'}/></div> 
    </div>
    <div className='project_sec'>
        <h3>Prototypes</h3>
        <p>All of the UI designs were then prototyped and showed to Inhub members and the UX designer. Together we identified elements of the designs that did not work in the context and applied new solutions.</p>
        <div className='project_img_big'><img src={inhub_prototyp} alt={'Inhub UX Prototypes'}/></div> 
        <div className='project_img_big'>
        <video autoplay muted loop id="video">
          <source src={figma_video} type="video/webm"/>
        Your browser does not support the video tag.
        </video> 
        </div>
        <div className='project_img_big'>
        <iframe src="https://player.vimeo.com/video/762354808?h=61c9044826&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Inhub Innovations Prototype Click-thru"></iframe>
        </div>
    </div>
    <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/portfolio"><p>{"<"} Go back to projects</p></a>
    </div>
  </Layout>
)};

export default Inhub
