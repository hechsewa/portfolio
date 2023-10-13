import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/inhub.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import head_gpw from '../images/projects/gpw/gpw_header.webp'
import overview from '../images/projects/gpw/about.webp'
import moodboard from '../images/projects/gpw/moodboard.webp'
import colors from '../images/projects/gpw/colors.webp'
import typo from '../images/projects/gpw/typo.webp'
import grid from '../images/projects/gpw/grid.webp'
import components from '../images/projects/gpw/buttons.webp'
import wireframes from '../images/projects/gpw/wireframes.webp'
import desktop from '../images/projects/gpw/desktop.webp'
import mobile from '../images/projects/gpw/mobile.webp'
import mock from '../images/projects/gpw/mock.webp'


const Gpw = () => {
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
    <Seo title="Innovation Day Event Landing Page | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Innovation Day Event Landing Page for GPW'}
      headimg={head_gpw}
      ux={true}
      ill={false}
      brand={false}
      desc={"Responsive website design for a stock exchange, investment event. Minimal and functional design, staying consistent with GPW brand identity."}
      date={'spetember 2023'}
      role={'UX designer, UI designer'}
      deliverables={'wireframes and UI design for desktop + mobile website'}
      tools={'Figma, Spline'}
       />
    </div>
    <div className='project_sec project_sec_alt'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Project Overview</h3>
          <p>Giełda Papierów Wartościowych (Warsaw Stock Exchange) was organizing an event and requested a proper landing page for the event. They needed a <b>simple, single page website</b> for the users to find the right information about the event in no time. The main point of attraction was to be a counter, counting days until the event.
            <br/><br/>
            The target audience for this project was young and middle-aged people, mostly men, interested in stock exchange and investment. This group tend to <b>spend time and visit sites on their phones</b> and for that reason the website needed to be responsive.
          </p>
          </div>
          <div className='project_img_big'><img src={overview} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
    </div>
    <div className='project_sec'>
        <h3>Moodboard</h3>
        <p>Before going into the design, the research was prepared. GPW needed business causal aesthetic with clear information. Here are some examples of inspiration pulled from Dribbble shots and existing event websites.</p>
        <div className='project_img_big'><img src={moodboard} alt={'Moodboard of kids app screens and bright colors'} /></div>
      </div>
      <div className='project_sec project_sec_right_img'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Colours</h3>
          <p>Colours were chosen based of GPW Event Design System prepared by a graphic designer, alongside their event logotype. 
            <br/><br/>
            <ul>
            <li><b>Added additional shades</b> of base brand colors to work alongside the main colors in places where needed</li>
            <li>To provide the best accuracy with the brand colors, the <b>HSL colour model</b> was used to manipulate only lightning and saturation properties, but not the hue of the color. That method helped to stay consistent with the brand ID and add the needed in-between shades.</li>
          </ul>
          </p>
          </div>
          <div className='project_img_big'><img src={colors} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
    </div>
    <div className='project_sec project_sec_alt project_sec_right_img'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Typography</h3>
          <p>To maintain consistency and visual hierarchy the typography scale was prepared for the project. For the responsivity reason, the mobile headings styles were added. 
            <br/><br/>
            <ul>
            <li>Line heights are different for headings and body text. Headings do not need as much line height as the body text. The body text, used ofter for longer paragraph text, needs the whitespace between lines for better readability.</li>
            <li>For typeface the Libre Franklin typeface was used, which was provided by the GPW brand book and recommended for the use in web. The Libre Franklin font worked well in this case, because it provided good readability and semi-modern / business-casual look.</li>
          </ul>
          </p>
          </div>
          <div className='project_img_big'><img src={typo} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
    </div>
    <div className='project_sec project_sec_right_img'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Alignment & grid</h3>
          <p>
            <ul>
            <li><b>4-point grid system used for the project</b></li>
            <li>Width for desktop: 1920px (Full HD)<br/>
            Margin for desktop: 240px<br/>
            Columns layout: 12 columns, 16px gap</li>
            <li>Width for mobile:  360px (Android common)<br/>
            Margin for mobile:  16px<br/>
            Columns layout: 5 columns, 16px gap</li>
            <li>The design used Auto-layouts to provide responsivity across different screen sizes</li>
          </ul>
          </p>
          </div>
          <div className='project_img_big'><img src={grid} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
    </div>
    <div className='project_sec project_sec_alt project_sec_right_img'>
        <div className='project_in_txt'>
          <div className='project_text'>
          <h3>Components</h3>
          <p>
            <ul>
            <li>Various components were created for the website to provide consistency and speed of work. The use of components helped to make the responsive design consistent among the screens. </li>
            <li>Some of the reusable component created involved: CTA buttons (shown in the picture), agenda card, speaker card, counter, navigation, footer.</li>
          </ul>
          </p>
          </div>
          <div className='project_img_big'><img src={components} alt={'Speech Therapist with a kid doing'} /></div>
        </div>
    </div>
    <div className='project_sec'>
        <h3>Wireframes</h3>
        <p>Before designing the visuals, the UX wireframes were prepared to assure the design was meeting the client’s vision. We then conducted a workshop with GPW to approve the wireframes and make some minor changes to the layout. That step helped us speed up the process, as we needed less changes in the visual design stage, where making changes to the layout takes more time, because it involves redesigning components to fit the new layout.</p>
        <div className='project_img_full'><img src={wireframes} alt={'Moodboard of kids app screens and bright colors'} /></div>
      </div>
      <div className='project_sec'>
        <h3>Desktop Visuals</h3>
        <p>The visual design was kept in a modern style with a business casual feel. The navy blue kept the UI elements professional and the added transparent elements, like the counter card, matched the modern look of the event. The orange CTAs stood out from the background and brought attention to registration.</p>
        <div className='project_img_full'><img src={desktop} alt={'Moodboard of kids app screens and bright colors'} /></div>
        <div className='project_img_full'><img src={mock} alt={'Moodboard of kids app screens and bright colors'} /></div>
      </div>
      <div className='project_sec'>
        <h3>Mobile Visuals</h3>
        <p>The visual design was kept in a modern style with a business casual feel. The navy blue kept the UI elements professional and the added transparent elements, like the counter card, matched the modern look of the event. The orange CTAs stood out from the background and brought attention to registration.</p>
        <div className='project_img_big'><img src={mobile} alt={'Moodboard of kids app screens and bright colors'} /></div>
        <div className='project_img_full'><iframe title='Mobile mockup 3D scene' src='https://my.spline.design/gpwmockup-0bcc825cf81f6f52adb7b2bff8a0f24f/' frameborder='0' width='100%' height='750px'></iframe></div>
      </div>
    <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/portfolio"><p>{"←"} Go back to projects</p></a>
    </div>
  </Layout>
)};

export default Gpw
