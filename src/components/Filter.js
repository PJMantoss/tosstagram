import React from 'react';
import Image from './Image';

export default function Filter(props) {
    return (
        <div className="Filter" onClick={props.onClick}>
            <Image 
                id={'filter-' + props.id} 
                settings={props.settings} 
                image={props.image} 
            />
        </div>
    )
}
