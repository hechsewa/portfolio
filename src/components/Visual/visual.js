import * as React from "react"
import {useState} from 'react'
import './visual.css'

const Visual = (props) => {

  const [fullmode, setFullmode] = useState(false);

  function onVisClick() {
    setFullmode(!fullmode);
  }

  return (
    <>
    <div onClick={onVisClick} className={props.orient==='horizontal' ? props.tags+' visual-div visual-div-hor' : props.tags+' visual-div visual-div-vert'} role="button">
      <img src={props.src} alt={props.alt} />
    </div>
    <div className={fullmode ? props.class+' vis' : props.class} onClick={onVisClick} role="button">
      <img src={props.src} alt={props.alt} />
      <p>{props.alt}</p>
    </div>
    </>
)};

export default Visual
