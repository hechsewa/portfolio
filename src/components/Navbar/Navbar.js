import * as React from 'react'
import {useEffect, useState} from 'react'
import Button from '../Button/button'
import Navitem from './NavItem/navitem'
import './nav.css'
import modedark from '../../images/mode-dark.svg'
import modelight from '../../images/mode-light.svg'

import menu_dark from '../../images/menu-dark.svg'
import menu_light from '../../images/menu_light.svg'
import close_dark from '../../images/close_dark.svg'
import close_light from '../../images/close_light.svg'

const Navbar = (props) => {

  const [navOut, setNavOut] = useState(false);

  useEffect(()=> {
    rollOutNav(); //check if mobile nav out
  });

  function rollOutNav() {
    if (navOut) {
      var nav_mobile = document.querySelectorAll('.nav-mobile.invisible')[0];
      nav_mobile.className = 'nav-mobile';
    } else {
      var nav_mobile_out = document.querySelectorAll('.nav-mobile')[0];
      nav_mobile_out.className='nav-mobile invisible';
    }
  }

  function changeNav(e) {
    if(e.currentTarget.id==='menuic') {
      setNavOut(true);
    } else {
      setNavOut(false);
    }
  }

  return (
    <>
      <nav className={props.theme==='dark'? '' : 'darkmode'}>
        <div className='nav-left'>
          <p><a href="/portfolio/">Ewa Hechsman</a></p>
        </div>
  
        <div className='nav-right'>
          <Navitem theme={props.theme} label='Projects' href='/portfolio/'/>
          <Navitem theme={props.theme} label='Visuals' href='/portfolio/visuals/'/>
          <Navitem theme={props.theme} label='About' href='/portfolio/about/'/>
          <Button click={props.setTheme} theme={props.theme} type='icon' icon={props.theme==='dark'?modelight:modedark}/>
        </div>
        <div className={navOut?'nav-mobile-menu invisible':'nav-mobile-menu'}>
            <Button label='menuic' theme={props.theme} type='icon' icon={props.theme==='dark'? menu_dark : menu_light} click={changeNav} />
        </div>

        <div className={navOut?'nav-mobile invisible':'nav-mobile'}>
          <div className='nav-icon-mobile'>
            <Button label='closeic' type='icon' theme={props.theme} icon={props.theme==='dark'? close_dark : close_light} click={changeNav} />
          </div>
          <div className='nav-links-mobile'>
            <div className='nav-items'>
              <Navitem theme={props.theme} label='Projects' href='/'/>
              <Navitem theme={props.theme} label='Visuals' href='/portfolio/visuals/'/>
              <Navitem theme={props.theme} label='About' href='/portfolio/about/'/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar