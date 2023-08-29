import React from 'react';
import style from '../styles/header.module.css'

const Logo = (props) => {
    console.log(props);
    return (
        <div>
            <h1 className={style.logo}>
                <span style={{textDecoration:"none", color:`${props.logoStyle.pizza}`}}>Pizza</span>
                <span style={{textDecoration:"none", color:`${props.logoStyle.time}`}}>Time</span>
            </h1>
        </div>
    );
}

export default Logo;
