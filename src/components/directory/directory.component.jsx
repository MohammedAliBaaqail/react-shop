import React, { useState } from 'react';
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

  
export default function Directory() {

    const [sections ] = useState(
        [
            {
                title: 'Hats',
                imageUrl:'https://images.unsplash.com/photo-1620231109648-302d034cb29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                id:1,
                linkUrl:'hats'
            },
            {
                title: 'Jackets',
                imageUrl:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
                id:2,
                linkUrl:'Jackets'
            },
            {
                title: 'Sneakers',
                imageUrl:'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                id:3,
                linkUrl:'Sneakers'
            },
            {
                title: 'Women',
                imageUrl:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                id:4,
                linkUrl:'Women',
                size:'large',
            },
            {
                title: 'Men',
                imageUrl:'https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                id:5,
                linkUrl:'Men',
                size:'large',
            },
          
    ]
    ) 
  return (
    <div className="directory-menu">
                {
                        sections.map(({ id, ...otherSectionProps}) =>(
                            <MenuItem key={id} {...otherSectionProps}/>
                           
                        ))
                }
                  
            </div>
        )
  
}
