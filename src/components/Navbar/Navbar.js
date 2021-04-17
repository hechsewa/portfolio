import * as React from 'react'
import {useEffect} from 'react'
import './nav.css'
import modedark from '../../images/mode-dark.svg'
import modelight from '../../images/mode-light.svg'
import logolight from '../../images/logo-light.svg'
import logodark from '../../images/logo-dark.svg'
import useDarkMode from '../useDarkMode'

const Navbar = (props) => {

  return (
    <>
      <nav className={props.theme==='dark'? '' : 'darkmode'}>
        <ul>
          <li className='nav-logo'><a href="/"><img src={props.theme === 'dark' ? logolight : logodark}/></a></li>
          <div className='nav-right'>
            <li className='nav-item active'><a className={props.theme==='dark'? '' : 'darkmode'} href="/">Projects</a></li>
            <li className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'} href="/visuals">Visuals</a></li>
            <li className='nav-item'><a className={props.theme==='dark'? '' : 'darkmode'}href="/about">About</a></li>
            <li className='nav-item nav-btn'><button type='button' onClick={props.setTheme}><img src={props.theme === 'dark' ? modelight : modedark}/></button></li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar