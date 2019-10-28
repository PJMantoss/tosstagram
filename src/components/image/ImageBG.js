import React from 'react'

export default class Image extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
    }

    render(){
        return (
            <div className="imageBG" style={{backgroundImage: 'url(' + this.props.image + ')'}}>
                
            </div>
        )
    }
    
}
