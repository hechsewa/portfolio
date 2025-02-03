import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/piktopharm.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
import Button from "../components/Button/button.js"
/* images */
import cover from '../images/projects/piktopharm/cover.webp'
import overview from '../images/projects/piktopharm/problem.webp'
import process from '../images/projects/piktopharm/designprocess.webp'
import stats from '../images/projects/piktopharm/stats.webp'
import pharm from '../images/projects/piktopharm/research.webp'
import mindmap from '../images/projects/piktopharm/mindmap.webp'
import desktop_ux from '../images/projects/piktopharm/wireframes.webp'
import web_ux from '../images/projects/piktopharm/web-wireframes.webp'
import lekolepki from '../images/projects/piktopharm/lekolepki.webp'
import components from '../images/projects/piktopharm/components.webp'
import desktop from '../images/projects/piktopharm/desktopapp.webp'
import web from '../images/projects/piktopharm/webapp.webp'
import lp from '../images/projects/piktopharm/landingpage.webp'
import ds from '../images/projects/piktopharm/designsystem.webp'


const Piktopharm = () => {
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
    <Seo title="Piktopharm - professional information for the pharmacy front desk" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Piktopharm - professional information for the pharmacy front desk'}
      img={cover}
      chip1={'Desktop app'}
      chip2={'WebTech'}
      chip3={'Web app'}
      chip4 = {'Landing Page'}
      desc={'Support pharmacists in their daily job. Create a desktop application to help pharmacists get the information about medicine faster, aiming for the app to support Piktopharm’s physical products - Lekolepki - which are informational medication stickers.'}
      date={'july - august 2024 (4 weeks)'}
      role={'UI/UX Designer, Researcher'}
      deliverables={'Design System, Wireframes, UI designs, Prototypes, Landing Page'}
      tools={'Figma, Miro, Spline'}/>
    </div>
   
    <div className='project_sec'>
        <div className='project_in_txt'>
          <div className='project_text text_scribb'>
          <h3>Problem</h3>
          <p>Pharmacists need <b>confidence in the information they provide to patients</b>, as it helps build trust and stronger connections. However, a lack of sufficient knowledge about certain products can leave them feeling unmotivated to recommend or sell them.
<br/>Patients, in turn, need clear and comprehensive information about their medication to feel confident in using it effectively.</p>
          <h3>Solution</h3>
          <p>Developed a desktop application for pharmacists that integrates seamlessly with their existing setup without disrupting essential software. The app delivers <b>quick access to information, motivates sales through a bonus points system, and includes a medication scanning feature.</b>
<br/>Additionally, we created a web application for pharmacy owners, enabling them to configure the desktop app by customizing sales campaigns and points-based offers.</p>
          </div>
          <div className='project_img_big'><img src={overview} alt={'Pharmacist smiling with a box'} /></div>
        </div>
      </div>

      <div className='project_sec project_sec_alt'>
        <h2>Design Process</h2>
        <p>The project was developed with feedback and guidance from pharmacists, but it was supervised by the project owner. We aimed to firmly define what the application would do and how it helped pharmacists in their daily jobs. Due to a short deadline, we followed a simplified <b>Design Thinking</b> process.</p>
        <div className='project_img_big'><img src={process} alt={'Design Process'} /></div>
      </div>

      <div className='project_sec'>
        <p className='stage'>Empathize & Define</p>
        <h2>Desk Research</h2>
        <div className='project_in_txt'>
            <div className='project_img_big'><img src={stats} alt={'Desk Research Statistics'} /></div>
            <div className='project_text'>
                <p>The researched showed that <b>patients expect pharmacists to counsel them about the use of medications.</b>
                They believe pharmacists have enough <b>knowledge to provide them necessary information.</b>
                Some patients did not trust the choice of medications as they believed they were driven by sales.<br/><br/>
                This proved the pharmacists need to provide clear and relevant information about medications with certainty.<br/><br/>
                Source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10287512/</p>
            </div>
        </div>
        <div className='project_img_big'><img src={pharm} alt={'Pharmacist with conclusion'} /></div>
      </div>

      <div className="project_sec project_sec_alt">
        <p className='stage'>Ideate</p>
        <h2>Mind map</h2>
        <p>To generate ideas for the app's design and functionality, we conducted a <b>mind map exercise</b> during a Zoom call with the client and developers. This collaborative approach helped identify ways the app could best support pharmacists.
        </p>
        <div className='project_img_big'><img src={mindmap} alt={'Mind map for Piktopharm'} /></div>
           <p>To make sure the team was on the same page with the project owner and developers,
            we created multiple <b>user flows</b> to support web and desktop application. Per clients request we are not showing them publicly,
            as they include details about system processes.</p>
      </div>

      <div className='project_sec'>
        <p className='stage'>Prototype</p>
        <h2>Wireframes</h2>
        <p>While creating the wireframes, we prioritized functionality, ensuring the needs of all pharmacy roles were addressed.
        <br/><br/>
        The web application presented a greater challenge, as it required designing dashboards, statistics, and multiple configuration settings tailored to various roles.
        <br/><br/>
        The desktop application, on the other hand, was designed to be simple and practical. With large fonts, it allowed pharmacists to quickly access medical information, even from 2 meters away. Since pharmacists often move around the shelves to retrieve medications, key details needed to be visible at a glance. The app was intentionally designed to occupy only about one-third of the screen, ensuring it didn’t interfere with the essential software running in full-screen mode.</p>
        <h3>Desktop application</h3>
        <div className='project_img_big'><img src={desktop_ux} alt={'Wireframes for desktop application'} /></div>
        <h3>Web application</h3>
        <div className='project_img_big'><img src={web_ux} alt={'Wireframes for web application'} /></div>
      </div>

      <div className='project_sec project_sec_alt'>
          <p className='stage'>Prototype</p>
          <h2>Design System</h2>
          <p>We created multiple components design system to match Piktopharm brand and automate and speed up the design process. We focused on legibility, readability, so that the pharmacists could navigate the product fast and easily.
          </p>
        <div className='project_img_big'><img src={ds} alt={'Design system'} /></div>
        <div className='project_img_big'><img src={lekolepki} alt={'Lekolepki'} /></div>
      </div>

      <div className='project_sec'>
        <p className='stage'>Prototype</p>
        <h2>Final Designs</h2>
        <h4>Desktop application</h4>
        <div className='project_img_big'><img src={desktop} alt={'UI Design of Desktop application'} /></div>
        <h4>Web application</h4>
        <div className='project_img_full'><img src={web} alt={'UI Design of Web application'} /></div>
        <h4>Landing Page + Store</h4>
        <p>To support the sales process for the desktop application, we developed a landing page for the Piktopharm brand and an online store. The store allows pharmacies to easily purchase the required number of licenses for the desktop application.</p>
        <div className='project_img_full'><img src={lp} alt={'UI Design of Landing Page and Online Store'} /></div>
      </div>

      <div className='project_sec'>
        <h2>Results & Take-aways</h2>
        <p>This project was both demanding and socially significant, as it directly impacted pharmacists' work. Our goal was to empower pharmacists with confidence by providing a comprehensive desktop application that delivered relevant information about medication and supplements in an intuitive, easy-to-navigate interface.
<br/><br/>
During brief interviews conducted with pharmacists using our UI prototypes, they confirmed that our solution met their needs. They reported that the software helps them <b>work faster and more efficiently at the front desk.</b>
<br/><br/>
Pharmacies also benefited from the accompanying web application, which <b>boosted their sales processes</b> through bonus point systems and medication recommendations. While we haven’t yet measured the exact sales increase, pharmacy managers reported noticeable improvements within just a few weeks of implementation.</p>
      </div>

      <div className='button-project-btm'>
        <Button theme={theme} label={'Back to Projects'} href={'/portfolio/'} type={'secondary'} />
      </div>
  </Layout>
)};

export default Piktopharm
