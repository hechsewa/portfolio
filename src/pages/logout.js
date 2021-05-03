import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from '../components/useDarkMode.js'
import '../components/logout.css'
import ProjectHead from '../components/ProjectHead/projecthead.js'
/* images */
import logout_black from '../images/projects/logos/logout_black.png'
import logout_white from '../images/projects/logos/logout_white.png'
import icons from '../images/projects/logout/logout_ic.jpg'
import sketch1 from '../images/projects/logout/logout_sketch_1.jpg'
import sketch2 from '../images/projects/logout/logout_sketch_2.jpg'
import comic1 from '../images/projects/logout/logout_comic_1.jpg'
import comic2 from '../images/projects/logout/logout_comic_2.jpg'
import screens from '../images/projects/logout/logout_screens.jpg'
import mock1 from '../images/projects/logout/logout_mock_1.jpg'
import mock2 from '../images/projects/logout/logout_mock_2.jpg'

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
      deliverables={'comic strips, icons, brochure'}
      tools={'Affinity Designer, Fire Alpaca, Huion drawing tablet'}
      problem={''}
      solution={''} />
    </div>
    <div className='logout_wordmark project_sec'>
        <h3>Icons</h3>
        <div className='logout_wordmark_in'>
          <div className='project_img'><img src={icons} alt={'icons used in the brochure'} /></div>
          <p>I needed to create comic stips and iconographics for the brochure, along with the DTP design. The icons needed to showcase addictions like poker, russian rulette or dice. I also need icons for different devices to show FOMO - smartphone and desktop.</p>
        </div>
      </div>
    <div className='logout_sketches project_sec'>
        <h3>Sketches</h3>
        <div className='project_in'>
          <div className='project_img'><img src={sketch1} alt={'Sketches of comic strips with color pallete'} /></div>
          <div className='project_img'><img src={sketch2} alt={'Sketches of comic strips'} /></div>
        </div>
      </div>
      <div className='logout_comics project_sec'>
        <h3>Comics</h3>
        <div className='project_in'>
          <div className='project_img'><img src={comic1} alt={'Sketches of comic strips with color pallete'} /></div>
          <div className='project_img'><img src={comic2} alt={'Sketches of comic strips'} /></div>
        </div>
        <p>For the brochure, I created 6 comic strips. Each in the similar style, showcasing different scenarios, including both young women and men and addictive habits. Here I showed two that I liked the most and were the shortest. The comics were written in Polish.</p>
      </div>
      <div className='logout_moodboard project_sec'>
        <h3>Brochure Pages</h3>
        <div className='project_img_big'><img src={screens} alt={'Chosen pages of the brochure'}/></div>
        <p>The brochure was 11 pages long, but some of the structures were repeated and some of the pages included just a comic strip. Here I chose a few pages that had the most versatile structure. The brochure was then printed out and was being handed out to teenagers during lectures. The Log Out was interesting to do, because it allowed full creative freedom. I enjoyed creating the comic strips in my own cartoon style.</p>
      </div>
      <div className='logout_mocks project_sec'>
        <h3>Mockups</h3>
        <div className='project_in'>
          <div className='project_img'><img src={mock1} alt={'Mockup on a book in two different angles'} /></div>
          <div className='project_img'><img src={mock2} alt={'Mockup on a book lying'} /></div>
        </div>
      </div>
      <div className={theme==='dark'? 'go-back dark' : 'go-back'}>
        <a href="/"><p>{"<"} Go back to projects</p></a>
      </div>
  </Layout>
)};

export default Logout
