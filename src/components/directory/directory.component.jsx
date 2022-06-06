import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";


class Directory extends React.Component {
    constructor(){
        super()

        this.state = {
            sections: [
                {
                    title: 'عنوان',
                    imageUrl:'https://i.pinimg.com/originals/7a/29/64/7a2964be867fb96f0c6adc7c5d4adf61.jpg',
                    id:1
                },
                {
                    title: 'عنوان',
                    imageUrl:'https://i.pinimg.com/originals/7a/29/64/7a2964be867fb96f0c6adc7c5d4adf61.jpg',
                    id:2
                },
                {
                    title: 'عنوان',
                    imageUrl:'https://i.pinimg.com/originals/7a/29/64/7a2964be867fb96f0c6adc7c5d4adf61.jpg',
                    id:3
                },
                {
                    title: 'عنوان',
                    imageUrl:'https://i.pinimg.com/originals/7a/29/64/7a2964be867fb96f0c6adc7c5d4adf61.jpg',
                    id:4
                },
                {
                    title: 'عنوان',
                    imageUrl:'https://i.pinimg.com/originals/7a/29/64/7a2964be867fb96f0c6adc7c5d4adf61.jpg',
                    id:5
                },
        ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl}/>    
                    ))
                }
                  
            </div>
        )
    }
}

export default Directory;