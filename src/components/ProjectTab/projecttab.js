import * as React from "react"
import './projecttab.css'

const ProjectTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'project-tab' : 'project-tab darkmode'}>
     <a href={props.href}>
      <div className='project-cover'>
        <img src={props.img} alt={props.alt}/>
      </div>
      <div className='project-info'>
      <div className='chips'>
          <p>{props.chip1}</p><p>{props.chip2}</p><p>{props.chip3}</p><p>{props.chip4}</p>
        </div>
        <h3>{props.title}</h3>
        <p className='project-desc'>{props.desc}</p>
        <p className='project-link'>Read Case Study</p>
      </div>
     </a>
    </div>
)};

export default ProjectTab
