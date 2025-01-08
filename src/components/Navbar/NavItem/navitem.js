import React from "react";
import {useEffect} from 'react'
import {useState} from 'react'
import './navitem.css';

const Navitem = (props) => {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPage(window.location.pathname);
        }
    }, []); // This ensures the current page is set only once when the component mounts.

    const isActive = currentPage === props.href;
    return (
        <div className={isActive ? 'active':''}>
            <a className={props.theme==='dark'? '' : 'darkmode'} href={props.href}><mark>•</mark>{props.label}</a>
        </div>
    );
};

export default Navitem;