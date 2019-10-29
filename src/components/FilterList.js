import React from 'react';
import Filter from './Filter';

export default function FilterList(props) {

    let image = props.image;
    let onClick = props.onClick;
    let filters;
    filters.map((filter, i) => {
        return <Filter 
                   onClick={onClick} 
                   id={filter.id} 
                   image={image} 
                   settings={filter.settings} 
                />
    })
    return (
        <div className="filterList">
            {filters}
        </div>
    )
}
