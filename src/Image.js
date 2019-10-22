import React from 'react'

export default function Image(props) {
    return (
        <div className="Image" style={{backgroundImage: 'url(' + props.image + ')'}}>
            
        </div>
    )
}
