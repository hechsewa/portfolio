import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/zatoka.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import zatoka_white from '../images/projects/logos/zatoka_white.svg'
import zatoka_logos from '../images/projects/zatoka/slide_logo.png'
import zatoka_brandbook from '../images/projects/zatoka/brandbook.png'
import slide1 from '../images/projects/zatoka/slide_2_b.png'
import slide2 from '../images/projects/zatoka/slide_3.png'
import slide3 from '../images/projects/zatoka/slide_5_b.png'
import slide4 from '../images/projects/zatoka/slide_6_b.png'
import slide5 from '../images/projects/zatoka/slide_7b.png'
import slide6 from '../images/projects/zatoka/slide_9.png'
import slide7 from '../images/projects/zatoka/zatoka_behance_9.png'
import slide8 from '../images/projects/zatoka/zatoka_behance_9b.png'
import slide_truck from '../images/projects/zatoka/slide_10.png'
import slide_truck_a from '../images/projects/zatoka/slide_11.png'
import slide_truck_b from '../images/projects/zatoka/slide_12.png'
import slide_truck_2 from '../images/projects/zatoka/slide_14.png'
import figma_video from '../images/projects/zatoka/zatoka-men.webm'


const Zatoka = () => {
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
    <Seo title="Zatoka Smaków | Ewa Hechsman Portfolio" />
    <div className='project-page'>
    <ProjectHead 
      theme={theme}
      title={'Food Truck Branding for Zatoka Smaków'}
      logo={theme==='dark'?zatoka_white : zatoka_white}
      logoalt={'Zatoka Smaków logo'}
      ux={false}
      ill={true}
      brand={true}
      desc={"Zatoka Smaku (eng. the bay of flavors) is a food truck brand focusing on variety of sweet products perfect for summer weather, such as ice cream, bubble tea, bubble waffles and ice coffee. They're located in a village, near a small town, just by the lake. This project consists of a logo design, food truck design, alongside various brand merchandise, ie. aprons, coffee cups, stickers, flyers and much more."}
      date={'may 2022'}
      role={'logo designer, graphic designer'}
      deliverables={'logo, brandbook, social media graphics, merch & other branding elements, interactive menu, food truck design'}
      tools={'Figma, Affinity Designer, Adobe Photoshop'}
       />
    </div>
    <div className='project_sec'>
        <h3>Logo design</h3>
        <p>Created a consistent logo design with a brand book. Prepared a brand guide for future use of logo on merch and other resources.</p>
        <div className='project_img_big'><img src={zatoka_logos} alt={'Zatoka Smaków Logos'}/></div>
        <div className='project_img_big'><img src={zatoka_brandbook} alt={'Zatoka Smaków Brandbook'}/></div>
    </div>
    <div className='project_sec'>
        <h3>Merch & Assets</h3>
        <p>Additionaly, the project consisted of creating a set of mockups and printable files for various brand merch, posters, menu and rollups. </p>
        <div className='project_img_big'><img src={slide1} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide2} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide3} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide4} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide5} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide6} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide7} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide8} alt={'Branded Business Cards'}/></div>
        
    </div>
    <div className='project_sec'>
        <h3>Interactive Figma Menu</h3>
        <p>Interactive menu design prepared in Figma that could be accessed through a QR code and opened on any mobile device in a browser. Scrollable one pager with recent menu items, prices and SM links.</p>
        <div className='project_img_big'>
        <video autoplay muted loop id="video">
          <source src={figma_video} type="video/webm"/>
        Your browser does not support the video tag.
        </video> 
        </div>
    </div>
    <div className='project_sec'>
      <h3>Food Truck Design</h3>
      <p>The company main point of attraction is the food truck that is located nearby the local beach. The prepared food truck design consisted of printable big-size stickers that the truck provided sticked on. The design were to be fun, summer-themed to attract the brand target audience - children & teenagers.</p>
      <div className='project_img_big'><img src={slide_truck} alt={'Food Truck Design Front and Back'}/></div>
      <div className='project_in'>
          <div className='project_img'><img src={slide_truck_a} alt={'food truck design opened'} /></div>
          <div className='project_img'><img src={slide_truck_b} alt={'food truck design closed'} /></div>
      </div>
      <div className='project_img_big'><img src={slide_truck_2} alt={'Food Truck Design Front and Back'}/></div>
    </div>
    <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/"><p>{"<"} Go back to projects</p></a>
    </div>
  </Layout>
)};

export default Zatoka
