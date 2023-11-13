import * as React from "react"
import {useEffect} from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import useDarkMode from "../components/useDarkMode.js"
import '../components/visuals.css'
import Visual from '../components/Visual/visual.js'
/*images*/
import spacex from '../images/visuals/spacex_poster.webp'
import archdesk1 from '../images/visuals/archdesk1.webp'
import archdesk2 from '../images/visuals/archdesk2.webp'
import archdeskapp from '../images/visuals/archdeskapp.webp'
import archdeskems from '../images/visuals/archdesksems.webp'
import aurona from '../images/visuals/aurona.webp'
import cats from '../images/visuals/cats.webp'
import crunch from '../images/visuals/crunch.webp'
import fotowolt1 from '../images/visuals/fotowolt1.webp'
import fotowolt2 from '../images/visuals/fotowolt2.webp'
import goodlood1 from '../images/visuals/goodlood1.webp'
import jellyfish from '../images/visuals/jellyfish.webp'
import juwenalia from '../images/visuals/juwenalia.webp'
import mrame from '../images/visuals/mrame.webp'
import radio2 from '../images/visuals/radio2.webp'
import radio3 from '../images/visuals/radio3.webp'
import jkaim from '../images/visuals/jkaim.webp'
import dailylogo from '../images/visuals/dailylogo.webp'
import coffeestation from '../images/visuals/coffeestation-mockup.webp'
import snowman from '../images/visuals/snowman.gif'
import codereduced from '../images/visuals/codereduced.webp'
import bruzda from '../images/visuals/bruzda.webp'
import expand from '../images/visuals/inhub-expand.webp'
import spatial from '../images/visuals/spatial.webp'
import torii from '../images/visuals/torii.webp'
import kimchi from '../images/visuals/kimchi.webp'
/*posters*/
import bubbletea from '../images/visuals/bubbletea.webp'
import cat from '../images/visuals/cat.webp'
import smok from '../images/visuals/smok.webp'

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

  function onChipClick(e) {
    //google analytics
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        'click_place': e.target.id,
      });
    };
    var allVisuals = document.getElementsByClassName("visual-div");
    //disable all other chips
    var allChips = document.getElementsByClassName("visual-chip");
    for (var i = 0; i < allChips.length; i++) {
    var isClicked = allChips.item(i).id === e.target.id;
      if (allChips.item(i).classList.contains("active") & !isClicked) 
        allChips.item(i).classList.remove("active");
    }
    //assign active to clicked chip
    var chipClasses = document.getElementById(e.target.id).classList;
    if (chipClasses.contains("active")) {
      chipClasses.remove("active");
    } else {
      chipClasses.add("active");
    }
    var isActive = chipClasses.contains("active");
    for (var j = 0; j < allVisuals.length; j++) {
      var isTag =allVisuals.item(j).classList.contains(e.target.id);
      if (!isTag & isActive) {
        allVisuals.item(j).classList += " invis";
      } else {
        allVisuals.item(j).classList.remove("invis");
      }
    }
  }

  return (
  <Layout theme={theme} setTheme={toggleTheme}>
    <Seo title="Visuals | Ewa Hechsman Portfolio" />
    <h1 className='visuals-h1'>Visuals</h1>
    <p className=''>Digital sketchbook; smaller, fun, ongoing projects, and just design I feel proud of</p>
    <div className={theme==='dark'?'visuals-chips':'visuals-chips darkmode'}>
      <button className="visual-chip" id="ui" onClick={onChipClick}>UI Design</button>
      <button className="visual-chip" id="brand" onClick={onChipClick}>Branding</button>
      <button className="visual-chip" id="sm" onClick={onChipClick}>SM graphics</button>
      <button className="visual-chip" id="anim" onClick={onChipClick}>Animation</button>
      <button className="visual-chip" id="ill" onClick={onChipClick}>Illustration</button>
      <button className="visual-chip" id="videos"><a href="#visual-videos">scroll to videos ↓</a></button>
    </div>
    <div className='visuals-gallery'>
      <Visual src={kimchi} tags={'ui'} alt={'Doktor Kimchi - German Kimchi manufacturer - Website+Shop UI/UX Design'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={torii} tags={'ui'} alt={'Torii - Crypto-security startup landing page UI/UX Design'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={spatial} tags={'ui'} alt={'Spatial Design Exploration - Food Ordering Service displayed in a VR Google Environment'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={expand} tags={'ui'} alt={'From Science to Startup - Landing Page for a incubator programme for Inhub Innovations'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={bruzda} tags={'ui'} alt={'Blog Website Design for Bruzda-Konopko Law Company'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={coffeestation} tags={'ui'} alt={'Coffee station mockup mobile app mid-fidelity design'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={aurona} tags={'ui'} alt={'Aurona extension screens'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={mrame} tags={'brand'} alt={'Branding for 3D medical modelling university society'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={jkaim} tags={'brand'} alt={'Branding for a real estate advisor'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdesk1} tags={'sm'} alt={'Archdesk illustration article banners'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdesk2} tags={'sm'} alt={'Archdesk social media posts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={smok} tags={'ill'} alt={'Personal Project for Xmas Cards: Cracow Dragon in Kazimierz'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={bubbletea} tags={'ill'} alt={'Commercial Bubble Tea Recipe Menu Poster for Zatoka Smaków'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={cat} tags={'ill'} alt={'Personal Project: Mountain Cat Poster'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={dailylogo} tags={'brand'} alt={'Best logos from Daily Logo Challenge'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={fotowolt1} tags={'sm'} alt={'Photovoltaic social media graphic'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={fotowolt2} tags={'sm'} alt={'Social media graphics for Ekogmina'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdeskapp} tags={'ui'} alt={'Archdesk mobile app redesign'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={archdeskems} tags={'ui'} alt={'Archdesk landing page with case study'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={crunch} tags={'brand'} alt={'Crunch logo and packaging design for #50dayslogochallenge'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={goodlood1} tags={'ill'} alt={'Good lood totebag design'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={jellyfish} tags={'brand'} alt={'Jellyfish icecream logo design'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={juwenalia} tags={'ill'} alt={'Juwenalia 2019 T-shirt design'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={radio2} tags={'sm'} alt={'Radio1.7 social media posts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={radio3} tags={'sm'} alt={'Radio1.7 promotional graphics for broadcasts'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={cats} tags={'ill'} alt={'Drawing for cats day at Archdesk'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={spacex} tags={'ill'} alt={'SpaceX poster'} theme={theme} orient={'vertical'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={snowman} tags={'anim'} alt={'Christmas card snowman frame by frame animation for Archdesk'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
      <Visual src={codereduced} tags={'brand'} alt={'Logo & branding for CodeReduced'} theme={theme} orient={'horizontal'} class={theme==='dark'?'fullmode-light' : 'fullmode'}/>
    </div>
    <h2 className='visual-h2'>Videos</h2>
    <div className='visual-videos-group' id="visual-videos">
      <div className='visual-video'><iframe title="Play.air website walkthrough" src="https://player.vimeo.com/video/853377063?h=8704ebdd88" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div className='visual-video'><iframe title="Radio1.7 Promo Animation" src="https://player.vimeo.com/video/824508919" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div className='visual-video'><iframe title="Archdesk Valentines Video" src="https://player.vimeo.com/video/791906337" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
      <div className='visual-video'><iframe title="Synthetify Logo Animation" src="https://player.vimeo.com/video/544333885" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
    </div>
  </Layout>
)};

export default Visuals
