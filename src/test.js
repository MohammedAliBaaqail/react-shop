import React from 'react';
import './test.scss'
import Tilt from 'react-tilt';


const Test = () => {
	return (
        <>
       
		 <Tilt className='tiltt' options={{glare:true, perspective:500,max : 50 }} style={{ height: 250, width: 250 }}>
         <div className='gg' style={{ }}>
           <h1>React Parallax Tilt 👀</h1>
           <h1>React Parallax Tilt 👀</h1>
         </div>
       </Tilt>
             </>
	);
};

export default Test;