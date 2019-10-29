import React from 'react'

export default function Image(props) {

    if (!props.settings === []) {
        let filterString = '';
        let filters = props.settings.map((filter, i) => {
            if (filter.name === 'hue'){
                filterString = filterString + 'hue-rotate(' + filter.value + ')';
            } else {
                filterString = filterString + filter.name + '(' + filter.value + ')';
            }
            return filterString;
        });
    }

    const style = {
        backgroundImage: 'url(' + props.image + ')'
    }

    if(!props.id){
        let id = 'filter-image';
    } else {
        let id = props.id;
    }


    return (
        <div id={props.id} className="Image" style={style}>
            
        </div>
    )
}
