import * as React from 'react'
import {useEffect, useState} from 'react'
import './nav.css'
import modedark from '../../images/mode-dark.svg'
import modelight from '../../images/mode-light.svg'
import logolight from '../../images/logo-light.svg'
import logodark from '../../images/logo-dark.svg'
import menu_dark from '../../images/menu-dark.svg'
import menu_light from '../../images/menu_light.svg'
import close_dark from '../../images/close_dark.svg'
import close_light from '../../images/close_light.svg'

const Navbar = (props) => {

  const [navOut, setNavOut] = useState(false);

  useEffect(()=> {
    rollOutNav(); //check if mobile nav out
    var loc = window.location.pathname;
    var navitems = document.querySelectorAll(".nav-item.active");
    var navitemsmobile = document.querySelectorAll(".nav-item-mobile.active");
    navitems.forEach(it => {
      it.className="nav-item";
    });
    navitemsmobile.forEach(itmobile => {
      itmobile.className="nav-item-mobile";
    });
    switch (loc) {
      case '/portfolio/':
        document.getElementById('projects').className += " active";
        document.getElementById('projects-mobile').className += " active";
        return;
      case '/portfolio/visuals/':
        document.getElementById('visuals').className += " active";
        document.getElementById('visuals-mobile').className += " active";
        return;
      case '/portfolio/about/':
        document.getElementById('about').className += " active";
        document.getElementById('about-mobile').className += " active";
        return;
      default:
        return;
    }
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
    if(e.target.id==='menuic') {
      setNavOut(true);
    } else {
      setNavOut(false);
    }
    console.log(navOut);
  }

  return (
    <>
      <nav className={props.theme==='dark'? '' : 'darkmode'}>
        <ul>
          <li className='nav-logo'><a href="/portfolio/"><img src={props.theme === 'dark' ? logolight : logodark} alt="ewa hechsman logo"/></a></li>
          <div className='nav-right'>
            <li id='projects' className='nav-item active'><a className={props.theme==='dark'? '' : 'darkmode'} href="/portfolio/">Projects</a></li>
            <li id='visuals' className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'} href="/portfolio/visuals">Visuals</a></li>
            <li id='about' className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'}href="/portfolio/about">About</a></li>
            <li className='nav-item nav-btn'><button type='button' onClick={props.setTheme}><img alt="change contrast icon" src={props.theme === 'dark' ? modelight : modedark}/></button></li>
          </div>
          <div className='nav-icon'>
            <img id='menuic' className={navOut ? 'invisible' : ''} src={props.theme==='dark'? menu_dark : menu_light} alt='menu icon' onClick={changeNav} />
          </div>
        </ul>
        <div className='nav-mobile invisible'>
          <div className='nav-icon-mobile'>
            <img id='closeic' src={props.theme==='dark'? close_dark : close_light} alt='close icon' onClick={changeNav} />
          </div>
          <div className='nav-links-mobile'>
            <a id='projects-mobile' className='nav-item-mobile active' href="/portfolio/">Projects</a>
            <a id='visuals-mobile' className='nav-item-mobile' href="/portfolio/visuals">Visuals</a>
            <a id='about-mobile' className='nav-item-mobile' href="/portfolio/about">About</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar