import * as React from "react"
import {useEffect} from 'react'
import useDarkMode from '../components/useDarkMode'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
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

  <Layout theme={theme} setTheme={toggleTheme}>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
}

export default NotFoundPage
