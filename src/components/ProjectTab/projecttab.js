import * as React from "react"
import './projecttab.css'

const ProjectTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'project-tab' : 'project-tab darkmode'}>
      <div className='project-tab-front'>
        <img src={props.img} alt="project cover"/>
        <div className='mobile-link'>
          <p>{props.title}</p>
          <div className='mobile-btn'><a href={props.linker}><p>Learn more</p></a></div>
          </div>
      </div>
      <div className='project-tab-back'>
        <h1>{props.title}</h1>
        <div className='chips'>
          <p className={props.ux ? 'vis' : 'invis'}>UI design</p>
          <p className={props.brand ? 'vis' : 'invis'}>branding</p>
          <p className={props.ill ? 'vis' : 'invis'}>illustration</p>
        </div>
        <a href={props.linker}>Learn more {">"}</a>
      </div>
      <div className='frame'></div>
    </div>
)};

export default ProjectTab
