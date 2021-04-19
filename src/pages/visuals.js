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
      <Visual src={arlogo} alt={'AR logo'} theme={theme} orient={'horizontal'}/>
      <Visual src={spacex} alt={'SpaceX poster'} theme={theme} orient={'vertical'}/>
      <Visual src={arlogo} alt={'AR logo'} theme={theme} orient={'horizontal'}/>
      <Visual src={spacex} alt={'SpaceX poster'} theme={theme} orient={'vertical'}/>
      <Visual src={arlogo} alt={'AR logo'} theme={theme} orient={'horizontal'}/>
      <Visual src={arlogo} alt={'AR logo'} theme={theme} orient={'horizontal'}/>
    </div>
  </Layout>
)};

export default Visuals
