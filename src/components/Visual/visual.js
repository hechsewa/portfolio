import * as React from "react"
import {useState} from 'react'
import './visual.css'

const Visual = (props) => {

  const [fullmode, setFullmode] = useState(false);

  function onVisClick() {
    setFullmode(!fullmode);
    console.log(fullmode);
  }

  return (
    <>
    <div onClick={onVisClick} className={props.orient==='horizontal' ? 'visual-div visual-div-hor' : 'visual-div visual-div-vert'}>
      <img src={props.src} alt={props.alt} />
    </div>
    <div className={fullmode ? props.class+' vis' : props.class} onClick={onVisClick}>
      <img src={props.src} alt={props.alt} />
    </div>
    </>
)};

export default Visual
