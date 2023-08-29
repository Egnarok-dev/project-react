import React from 'react';
import style from '../styles/header.module.css'
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = (props) => {
    return (
        <div className={style.header_container}>
            <Logo logoStyle={props.logoStyle}/>
            <ul className={style.nav_header}>
                <li>
                    <Link to="/" style={{textDecoration:"none", color:"#3C3C3C"}}>Home</Link>
                </li>     
                <li>
                    <Link to="/" style={{textDecoration:"none", color:"#3C3C3C"}}>About us</Link>
                </li>     
                <li>
                    <Link to="/" style={{textDecoration:"none", color:"#3C3C3C"}}>Menu</Link>
                </li>     
                <li>
                    <Link to="/" style={{textDecoration:"none", color:"#3C3C3C"}}>Blog</Link>
                </li>     
                <li>
                    <Link to="/" style={{textDecoration:"none", color:"#3C3C3C"}}>Contact us</Link>
                </li>     
            </ul>
        </div>
    );
}

export default Header;
