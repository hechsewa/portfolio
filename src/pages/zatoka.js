import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/zatoka.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import zatoka_logos from '../images/projects/zatoka/slide_logo.webp'
import zatoka_brandbook from '../images/projects/zatoka/brandbook.webp'
import slide1 from '../images/projects/zatoka/slide_2_b.webp'
import slide2 from '../images/projects/zatoka/slide_3.webp'
import slide3 from '../images/projects/zatoka/slide_5_b.webp'
import slide4 from '../images/projects/zatoka/slide_6_b.webp'
import slide5 from '../images/projects/zatoka/slide_7b.webp'
import slide6 from '../images/projects/zatoka/slide_9.webp'
import slide7 from '../images/projects/zatoka/zatoka_behance_9.webp'
import slide8 from '../images/projects/zatoka/zatoka_behance_9b.webp'
import slide_truck from '../images/projects/zatoka/slide_10.webp'
import slide_truck_a from '../images/projects/zatoka/slide_11.webp'
import slide_truck_b from '../images/projects/zatoka/slide_12.webp'
import slide_truck_2 from '../images/projects/zatoka/slide_14.webp'
import figma_video from '../images/projects/zatoka/zatoka-men.webm'
import zatoka_headimg from '../images/projects/zatoka/project-head-zatoka.webp'


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
      headimg={zatoka_headimg}
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
    <div className='project_sec project_sec_alt'>
        <h3>Logo design</h3>
        <p>The main premise of the logo was that it should be light, fun and connected to summer chill.
          The brand describes itself as easy-going, relaxing, delicious, so the logo portrays an <b>ice cream cone pictured as a sun setting by the lake.</b>
          <br/><br/>
          The logo was to be displayed in many forms, both digital in print, so different logo formats were prepared for each use-case. The base logotype
          included an icon, wordmark and a subline, that explained what the food truck offers. For use as stickers, for merch, there was an icon version prepared in many colored options for light and dark backgrounds.
          <br/><br/>
          Alongside the logo pack, there was a brand book, and a brand guide in from of a PDF, that explained the use of a logo on merch, as well as minimum distance to other elements,
          exclusion zone, and much more.
        </p>
        <div className='project_img_big'><img src={zatoka_logos} alt={'Zatoka Smaków Logos'}/></div>
        <div className='project_img_big'><img src={zatoka_brandbook} alt={'Zatoka Smaków Brandbook'}/></div>
    </div>
    <div className='project_sec'>
        <h3>Merch & Assets</h3>
        <p>Additionaly, the project consisted of creating a set of mockups and printable files for various brand merch, posters, menu and rollups.
          The first thing to be created was a <b>Loyalty Card</b> that allowed customers to collect stamps with each purchase, which then could be
          traded for prizes. For 8 stamps, the customer could get a bevarage of their choice from the menu. For 10 stamps, there was a pop-it toy guaranteed, as the main
          target group was children and the toy was popular at the time, and connected to bubble waffles.
        </p>
        <div className='project_img_big'><img src={slide1} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide2} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide3} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide4} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide5} alt={'Branded Business Cards'}/></div>
        <h4>Leaflets & Rollups</h4>
        <p>The plan for this fun and children-targeted design was to be illustrative and use bold, summer colors. However with the progressing months we noticed people were more drawn 
          to the competitors, mostly due to visually attractive and realistic product pictures. We then decided to introduce realistic product pictures to the design. It <b>helped the
          customers visuallise the products way better and attracted more people when displayed on rollups</b>. It was a step in the right direction.
        </p>
        <div className='project_img_big'><img src={slide6} alt={'Branded Business Cards'}/></div>
        <div className='project_img_big'><img src={slide8} alt={'Branded Business Cards'}/></div>

        <h4>Make your own Bubble Waffle Poster</h4>
        <p>Initially, the bubble waffle options were written down as a text in a menu. However, that solution did not attract customers and many people dismissed the information
          about DIY waffles. To solve this problem, we created a colorful poster with <b>all the flavors and options on display.</b> The flavors were portrayed with photos, ie. strawberry flavour
          was potrayed with a real strawberry picture. That way the customer could associate the flavor easily and think of natural ingridients.
        </p>
        <div className='project_img_big'><img src={slide7} alt={'Branded Business Cards'}/></div>
        
    </div>
    <div className='project_sec project_sec_alt'>
        <h3>Interactive Figma Menu</h3>
        <p>Interactive menu design prepared in Figma that could be accessed through a QR code and opened on any mobile device in a browser.
          Scrollable one pager with recent menu items, prices and SM links allowed people to browse through the menu comfortably from their phone. They didn't 
          have to squeeze through the crowd to take a look at the menu that was placed on the food truck.</p>
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
        <a href="/portfolio"><p>{"←"} Go back to projects</p></a>
    </div>
  </Layout>
)};

export default Zatoka
