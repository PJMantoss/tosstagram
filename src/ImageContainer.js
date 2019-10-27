import React, { Component } from 'react'

export class ImageContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: '',
            settings: ''
        }
    }

    render() {
        return (
            <div className="imageContainer">
                <Image settings={this.props.settings} image={this.props.image} />
            </div>
        )
    }
}

export default ImageContainer
