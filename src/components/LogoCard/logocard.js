import React from "react";
import './logocard.css';

const LogoCard = (props) => {
   
    return (
        <div className={props.theme === 'dark' ? 'logo-card' : 'logo-card darkmode'}>
            <img src={props.img} alt={props.name} />
            <p>{props.desc}</p>
        </div>
    );
};

export default LogoCard;