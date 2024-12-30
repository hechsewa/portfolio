import * as React from "react"
import './testimonialtab.css'

const TestimonialTab = (props) => {
  
  return (
    <div className={props.theme==='dark' ? 'testimonial-tab' : 'testimonial-tab darkmode'}>
      <div className='author'>
        <div className='author-avatar'>
          <img src={props.img} alt={props.name}/>
        </div>
        <div className='author-info'>
          <h4>{props.name}</h4>
          <p>{props.role}</p>
        </div>
      </div>
    <div className='quote'>
      <p>{props.quote}</p>
    </div>
    </div>
)};

export default TestimonialTab
