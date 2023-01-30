import * as React from "react"
import './testimonialtab.css'

const TestimonialTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'testimonial-tab' : 'testimonial-tab darkmode'}>
      <div className='testimonial-text'>
        <p>{props.quote}</p>
      </div>
      <div className='testimonial-person'>
        <div className='person-avatar'>
          <img src={props.avatar} alt='person avatar'/>
        </div>
        <div className='person-info'>
          <h3>{props.name}</h3>
          <p>{props.function}</p>
        </div>
      </div>
    </div>
)};

export default TestimonialTab
