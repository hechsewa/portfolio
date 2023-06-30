import * as React from "react"
import './projecttab.css'

const ProjectTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'project-tab' : 'project-tab darkmode'}>
      <div className='project-tab-front'>
        <a href={props.linker}><img src={props.img} alt="project cover"/></a>
        <div className='mobile-link'>
          <p>{props.title}</p>
          <div className='mobile-btn'><a className='linker' href={props.linker}><p>Read Case Study ↗</p></a></div>
          </div>
      </div>
      <div className='project-tab-back'>
        <div className='chips'>
          <p className={props.ui ? 'vis' : 'invis'}>UI Design</p>
          <p className={props.ux ? 'vis' : 'invis'}>UX Design</p>
          <p className={props.brand ? 'vis' : 'invis'}>Branding</p>
          <p className={props.ill ? 'vis' : 'invis'}>Illustration</p>
        </div>
        <h1>{props.title}</h1>
        <p className='project-desc'>{props.desc}</p>
        <a href={props.linker} className='linker'><p>Read Case Study ↗</p></a>
      </div>
    </div>
)};

export default ProjectTab
