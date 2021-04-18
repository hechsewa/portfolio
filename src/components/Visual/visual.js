import * as React from "react"
import './visual.css'

const Visual = (props) => {
  
  return (
    <div className={props.orient==='horizontal' ? 'visual-div visual-div-hor' : 'visual-div visual-div-vert'}>
      <img src={props.src} alt={props.alt} />
    </div>
)};

export default Visual
