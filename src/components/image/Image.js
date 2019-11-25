import React from 'react'


let filterString = "";

export default class Image extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
    }

    render(){

        return (
            <div className="Image" style={{backgroundImage: 'url(' + this.props.image + ')'}}>

            </div>
        )
    }
    
}