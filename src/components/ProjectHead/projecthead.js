import * as React from "react"
import './projecthead.css'
import Button from "../Button/button";

const ProjectHead = (props) => {
  
  return (
    <div className={props.theme==='dark'?'project-head':'project-head darkmode'}>
      <div className='project-left'>
        <div className='chips'>
          <p>{props.chip1}</p>
          <p>{props.chip2}</p>
          <p>{props.chip3}</p>
          <p>{props.chip4}</p>
        </div>
        <h2 className='title'>{props.title}</h2>
        <p className='desc'>{props.desc}</p>
        <div className='project-info'>
          <div className='project-column'>
            <h4>Date</h4>
            <p>{props.date}</p>
          </div>
          <div className='project-column'>
            <h4>Role</h4>
            <p>{props.role}</p>
          </div>
          <div className='project-column'>
            <h4>Deliverables</h4>
            <p>{props.deliverables}</p>
          </div>
          <div className='project-column'>
            <h4>Tools</h4>
            <p>{props.tools}</p>
          </div>
        </div>
      </div>
      <div className='project-right'>
        <img src={props.img} alt={props.title} />
      </div>
    </div>
)};

export default ProjectHead
