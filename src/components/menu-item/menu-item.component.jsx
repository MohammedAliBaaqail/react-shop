import React from "react";
import './menu-item.styles.scss'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom';





const MenuItem = ({title, imageUrl, size ,linkUrl} ) => (
<Tilt options={{ scale: 1.0,speed: 1000,max: 20 ,perspective:1000,}} className={`${size} tilt`} style={{}}>
<Link to={linkUrl} >  
<div  className= "menu-item"  >
    <div className="background-image"
    style={{
        backgroundImage:`url(${imageUrl})`
          }}></div>
          
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
    </div>
</div>
</Link>
</Tilt>

);


export default  MenuItem;