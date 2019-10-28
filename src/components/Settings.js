import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ImageContainer from './image/ImageContainer';
import FilterList from './FilterList';

export class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
             settings: '', 
             image: '', 
             filters: ''
            };
            this.props = props
        }


    render() {
        return (
            <div className="Settings">
                <div className="mainWrapper">
                    
                        <Sidebar 
                            onChange={this.props.onChange} 
                            settings={this.props.data.settings}
                        />
                        <ImageContainer 
                            settings={this.props.data.settings} 
                            image={this.props.data.image} 
                        />
                </div>
                
                    <FilterList 
                        filters={this.props.data.filters}
                        onClick={this.props.onClick}
                        image={this.props.data.image} 
                    />
                
            </div>
        )
    }
}

export default Settings
