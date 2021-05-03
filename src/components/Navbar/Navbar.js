import * as React from 'react'
import {useEffect} from 'react'
import './nav.css'
import modedark from '../../images/mode-dark.svg'
import modelight from '../../images/mode-light.svg'
import logolight from '../../images/logo-light.svg'
import logodark from '../../images/logo-dark.svg'

const Navbar = (props) => {

  useEffect(()=> {
    console.log(window.location.pathname);
    var loc = window.location.pathname;
    var navitems = document.querySelectorAll(".nav-item.active");
    navitems.forEach(it => {
      it.className="nav-item";
    });
    switch (loc) {
      case '/':
        document.getElementById('projects').className += " active";
        return;
      case '/visuals':
        document.getElementById('visuals').className += " active";
        return;
      case '/about':
        document.getElementById('about').className += " active";
        return;
      default:
        return;
    }
  });

  return (
    <>
      <nav className={props.theme==='dark'? '' : 'darkmode'}>
        <ul>
          <li className='nav-logo'><a href="/"><img src={props.theme === 'dark' ? logolight : logodark} alt="ewa hechsman logo"/></a></li>
          <div className='nav-right'>
            <li id='projects' className='nav-item active'><a className={props.theme==='dark'? '' : 'darkmode'} href="/">Projects</a></li>
            <li id='visuals' className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'} href="/visuals">Visuals</a></li>
            <li id='about' className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'}href="/about">About</a></li>
            <li className='nav-item nav-btn'><button type='button' onClick={props.setTheme}><img alt="change contrast icon" src={props.theme === 'dark' ? modelight : modedark}/></button></li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar