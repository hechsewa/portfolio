import * as React from "react"
import {useEffect} from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useDarkMode from "../components/useDarkMode.js"
import '../components/visuals.css'
import Visual from '../components/Visual/visual.js'
/*images*/
import arlogo from '../images/visuals/arlogo.jpg'
import spacex from '../images/visuals/spacex_poster.jpg'
import archdesk1 from '../images/visuals/archdesk1.jpg'
import archdesk2 from '../images/visuals/archdesk2.jpg'
import archdeskapp from '../images/visuals/archdeskapp.jpg'
import archdeskems from '../images/visuals/archdesksems.jpg'
import aurona from '../images/visuals/aurona.jpg'
import cats from '../images/visuals/cats.jpg'
import crunch from '../images/visuals/crunch.jpg'
import fotowolt1 from '../images/visuals/fotowolt1.jpg'
import fotowolt2 from '../images/visuals/fotowolt2.jpg'
import goodlood1 from '../images/visuals/goodlood1.jpg'
import jellyfish from '../images/visuals/jellyfish.jpg'
import juwenalia from '../images/visuals/juwenalia.jpg'
import poster1 from '../images/visuals/poster1.jpg'
import poster2 from '../images/visuals/poster2.jpg'
import radio1 from '../images/visuals/radio1.jpg'
import radio2 from '../images/visuals/radio2.jpg'
import radio3 from '../images/visuals/radio3.jpg'
import recepturka from '../images/visuals/recepturka.jpg'
import uxweb from '../images/visuals/uxweb.jpg'
import women from '../images/visuals/women.jpg'
import dailylogo from '../images/visuals/dailylogo.webp'

const Visuals = () => {
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
    <SEO title="Visuals | Ewa Hechsman Portfolio" />
    <h1 className='visuals-h1'>Visuals</h1>
    <div className='visuals-gallery'>
      <Visual src={aurona} alt={'Aurona extension screens'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdesk1} alt={'Archdesk illustration article banners'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdesk2} alt={'Archdesk social media posts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={dailylogo} alt={'Best logos from Daily Logo Challenge'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={poster1} alt={'Poster for Krakow concert'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={fotowolt1} alt={'Photovoltaic social media graphic'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={fotowolt2} alt={'Social media graphics for Ekogmina'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={poster2} alt={'Posters for local orchestra'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={recepturka} alt={'Packaging design for granola Recepturka'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdeskapp} alt={'Archdesk mobile app redesign'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdeskems} alt={'Archdesk landing page with case study'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={arlogo} alt={'Logo for ARPortal'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={crunch} alt={'Crunch logo and packaging design for #50dayslogochallenge'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={goodlood1} alt={'Good lood totebag design'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={jellyfish} alt={'Jellyfish icecream logo design'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={juwenalia} alt={'Juwenalia 2019 T-shirt design'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={radio1} alt={'Radio1.7 promotional social media graphics'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={radio2} alt={'Radio1.7 social media posts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={radio3} alt={'Radio1.7 promotional graphics for broadcasts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={women} alt={'Drawing for womens day at Archdesk'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={cats} alt={'Drawing for cats day at Archdesk'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={spacex} alt={'SpaceX poster'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={uxweb} alt={'Website landing page design about UX'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
    </div>
  </Layout>
)};

export default Visuals
