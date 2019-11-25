import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Filter extends Component {
    // property initializer syntax
    getFilterCSSStyles = functions => {
        const filterString = [];
         
        Object.keys(functions).forEach(filter => {
            if (filter === 'hue'){
                filterString.push(`hue-rotate(${functions[filter]}deg)`)
            } else {
                filterString.push(`${filter}(${functions[filter]}%)`)
            }
        });

        console.log(filterString.join(' '))
         return filterString.join(' ');
    }

    render(){
        let filterstring = this.getFilterCSSStyles(this.props.filterFunctions);
        return (
            <div 
                className="Filter" 
                style={{width:'100%', height:'100%', filter: filterstring}} 
                onClick={()=>{this.props.onClick(this.props.filterFunctions)}}
            >
                {this.props.children}
            </div>
        )
    }
    }

Filter.propTypes = {
        filterFunctions: PropTypes.shape({
        hue: PropTypes.number,
        contrast: PropTypes.number,
        brightness: PropTypes.number,
        saturate: PropTypes.number,
        sepia: PropTypes.number
    }),
       onClick: PropTypes.func
    };

export default Filter