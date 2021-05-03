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
import moodboard from '../images/projects/future/future_mood.jpg'
import wireframe from '../images/projects/future/future_wire.jpg'
import mock1 from '../images/projects/future/future_mock_1.jpg'
import mock2 from '../images/projects/future/future_mock_2.jpg'
import proto from '../images/projects/future/future_proto.jpg'
import ready from '../images/projects/future/future_ready.jpg'
import screen1 from '../images/projects/future/future_screen_1.jpg'
import screen2 from '../images/projects/future/future_screen_2.jpg'


const Future = () => {
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
    <Seo title="Futuristic Website | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Futuristic LP @ Archdesk'}
      logo={theme==='dark'?archdesk_black : archdesk_white}
      logoalt={'Archdesk logo'}
      ux={true}
      ill={false}
      brand={true}
      desc={'With the expansion of Archdesk app, we decided to prepare a landing page in a futuristic style that best conveyed company\'s message. The website needed to be interactive, should involve 3D models and on scroll animation that immediately resonated with the futuristic vibe.'}
      date={'april 2021'}
      role={'UI/UX designer'}
      deliverables={'Interactive landing page, graphics, wireframes, prototype, video demo'}
      tools={'Adobe XD, Adobe Illustrator, Adobe AfterEffects'}
      problem={'We, in the design team, needed to prepare and think about UI/UX of a very complex page without the ability to create 3D models. We had to showcase the movement and interactions to the developer without actually using the 3D models. We also needed to entice the users with interesting interactions that brought futuristic ideas to mind.'}
      solution={'We managed to create an interactive website using on scroll animations. As we didn\'t know how to code, we prepared a video demo in after effects showing how the parts would move. Moreover, we mocked up the 3D models with mock illustrations.'} />
      <div className='future_moodboard project_sec'>
        <h3>Moodboard</h3>
        <div className='project_img_big'><img src={moodboard} alt={'Moodboard with pictures of futuristic designs'}/></div>
      </div>
      <div className='future_wireframes project_sec'>
        <h3>Wireframes</h3>
        <div className='project_in'>
          <div className='project_img'><img src={wireframe} alt={'wireframes of the futuristic website'} /></div>
          <div className='project_img'><img src={ready} alt={'idk'} /></div>
        </div>
        <p>We created wireframes for the website showing 3D models and basic structures.</p>
      </div>
      <div className='future_proto project_sec'> 
      <h3>Prototype</h3>
      <div className='project_img_big'><img src={proto} alt={'prototype showing connected screens of wireframes'} /></div>
      <p>We then prototype the movement of the elements using Adobe XD and the 3D transform option. When we felt like the prototype didn't capture the exact movement, we brought the design to After Effects to further prototype the interactions.</p>
      </div>
      <div className='future_screens project_sec'>
        <h3>Screens & transition demo</h3>
        <div className='project_in'>
          <div className='project_img'><img src={screen1} alt={'Futuristic design screen with the diamond-like 3D structure'} /></div>
          <div className='project_img'><img src={screen2} alt={'Futuristic design screen with a teardop-like shape and zoomed in screens'} /></div>
        </div>
        <iframe title="futuristic video transition" src="https://player.vimeo.com/video/541821751" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='future_mocks project_sec'>
        <h3>Mockups</h3>
        <div className='project_in'>
          <div className='project_img'><img src={mock1} alt={'Design mocked up on a laptop screen angled right side'} /></div>
          <div className='project_img'><img src={mock2} alt={'Design mocked up on a laptop screen facing forward'} /></div>
        </div>
        <p>During designing the UI we focused on element that we thought captured the essence of futurism. We used hair-thin wave structures, semi-3D models with a glow, light specs, transparency and blue/purple gradients. The design is still in the development phase and haven't been implemented yet. We're looking forward to seeing it come to live with 3D models.</p>
      </div>
    </div>
  </Layout>
)};

export default Future
