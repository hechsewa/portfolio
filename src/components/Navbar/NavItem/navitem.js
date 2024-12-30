import React from "react";
import './navitem.css';

const Navitem = (props) => {
    var currentPage = window.location.pathname;
    console.log(currentPage);
    return (
        <div className={currentPage===props.href?'active':''}>
            <a className={props.theme==='dark'? '' : 'darkmode'} href={props.href}><mark>•</mark>{props.label}</a>
        </div>
    );
};

export default Navitem;