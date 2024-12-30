import React from "react";
import './button.css';

const Button = (props) => {
    if (props.type === 'primary') {
        return (
            <button className={props.theme === 'dark' ? 'button-primary' : 'button-primary darkmode'}>
                <a href={props.href}>{props.label}</a>
            </button>
        );
    } else if (props.type==='icon') {
        return (
            <button id={props.label} onClick={props.click} className={props.theme === 'dark' ? 'button-icon' : 'button-icon darkmode'}>
                <img alt={props.label} id={props.label} src={props.icon}/>
            </button>
        );
    } else {
        return (
            <button className={props.theme === 'dark' ? 'button-secondary' : 'button-secondary darkmode'}>
                <a href={props.href}>{props.label}</a>
            </button>
        );
    }
};

export default Button;