import * as React from "react"
import './projecthead.css'

const ProjectHead = (props) => {
  
  return (
    <div className={props.theme==='dark'?'project-head':'project-head darkmode'}>
      <div className='project-head-img'>
        <img src={props.headimg} alt='Project Header Image' />
      </div>
      <div className='project-head-logo'>
        <img className={props.theme==='dark'?'dark-logo':'light-logo'} src={props.logo} alt={props.logoalt}/>
      </div>
      <h1>{props.title}</h1>
      <div className="project-head-wrapper">
      <div className='project-head-text'>
        <div className='project-chips'>
          <p className={props.ux ? 'vis' : 'invis'}>UI design</p>
          <p className={props.brand ? 'vis' : 'invis'}>branding</p>
          <p className={props.ill ? 'vis' : 'invis'}>illustration</p>
        </div>
        <p className='project-desc'>{props.desc}</p>
      </div>
      <div className='project-head-columns'>
        <div className='project-col'>
          <h2>Date:</h2>
          <p>{props.date}</p>
        </div>
        <div className='project-col'>
          <h2>Role:</h2>
          <p>{props.role}</p>
        </div>
        <div className='project-col'>
          <h2>Deliverables:</h2>
          <p>{props.deliverables}</p>
        </div>
        <div className='project-col'>
          <h2>Tools used:</h2>
          <p>{props.tools}</p>
        </div>
      </div>
      </div>
    </div>
)};

export default ProjectHead
