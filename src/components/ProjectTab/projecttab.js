import * as React from "react"
import './projecttab.css'

const ProjectTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'project-tab' : 'project-tab darkmode'}>
      <div className='project-tab-front'>
        <img src={props.img} alt="project cover"/>
        <div className='mobile-link'>
          <p>{props.title}</p>
          <div className='mobile-btn'><a className='linker' href={props.linker}><p>View project →</p></a></div>
          </div>
      </div>
      <a href={props.linker}>
      <div className='project-tab-back'>
        <h1>{props.title}</h1>
        <div className='chips'>
          <p className={props.ux ? 'vis' : 'invis'}>UI design</p>
          <p className={props.brand ? 'vis' : 'invis'}>branding</p>
          <p className={props.ill ? 'vis' : 'invis'}>illustration</p>
        </div>
        <a href={props.linker} className='linker'>VIEW PROJECT →</a>
      </div>
      </a>
    </div>
)};

export default ProjectTab
