import React, {useCallback} from "react";
import './menu-item.styles.scss'
// import Tilt from 'react-tilt'
import Tilt from 'react-vanilla-tilt'
import { Link ,useNavigate }  from 'react-router-dom';



{/* <Tilt options={{ scale: 1.0,speed: 1000,max: 20 ,perspective:1000,}} className={`${size} tilt`} style={{}}></Tilt> */}
{/* <div  className=  {`${size} menu-item`} > */}

function MenuItem  ({title, imageUrl, size ,linkUrl} )  {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(linkUrl, {replace: true}), [navigate]);

 return(
    <Tilt options={{ scale: 1.0,speed: 1000,max: 20 ,perspective:1000,}} className={`${size} tilt`} style={{}} onClick={handleOnClick}>
        <div  className=  {`${size} menu-item`} > 
        <div className="background-image"
        style={{
        backgroundImage:`url(${imageUrl})`
               }}></div>
          
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </Tilt>


) }


export default  MenuItem;