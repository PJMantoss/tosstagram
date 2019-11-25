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

        if(!this.props.settings == []){
            
            let filters = this.props.settings.map((filter, i) => {
                if(filter.name == 'hue'){
                    filterString = filterString + 'hue-rotate(' + filter.value + ')';
                } else {
                    filterString = filterString + filter.name + '(' + filter.value + ')';
                }

                return filterString;
            });
        }

        const style = {
            backgroundImage: 'url(' + this.props.image + ')',
			webkitFilter: filterString
        }

        if(!this.props.id){
            let id = 'filter-image';
        } else {
            let id = this.props.id;
        }

        return (
            <div className="Image" style={{backgroundImage: 'url(' + this.props.image + ')'}}>

            </div>
        )
    }
    
}