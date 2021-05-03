import * as React from "react"
import './footer.css'
import ic_be from '../../images/smicons/ic_be_foot.svg'
import ic_drib from '../../images/smicons/ic_drib_foot.svg'
import ic_ig from '../../images/smicons/ic_ig_foot.svg'
import ic_ln from '../../images/smicons/ic_ln_foot.svg'
import ic_tw from '../../images/smicons/ic_tw_foot.svg'

const Footer = () => {
  
  return (
    <footer>
      <div className='foot-right'>
        <p>© Ewa Hechsman, 2021 | ewahechsman@gmail.com</p>
      </div>
      <div className='foot-left'>
        <a href='https://twitter.com/ewsdesigns' target='_blank' rel='noreferrer' ><img src={ic_tw} alt={'Twitter icon'} /></a>
        <a href='https://www.linkedin.com/in/ewahechsman/' target='_blank' rel='noreferrer'><img src={ic_ln} alt={'LinkedIn icon'} /></a>
        <a href='https://www.instagram.com/ewsdesigns/' target='_blank' rel='noreferrer'><img src={ic_ig} alt={'Instagram icon'} /></a>
        <a href='https://dribbble.com/ewsdesigns' target='_blank' rel='noreferrer'><img src={ic_drib} alt={'Dribbble icon'} /></a>
        <a href='https://www.behance.net/ewahechsman' target='_blank' rel='noreferrer'><img src={ic_be} alt={'Behance icon'} /></a>
      </div>
    </footer>
)};

export default Footer
