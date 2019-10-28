import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Imagecontainer from './ImageContainer';
import Filter from './Filter';
import Image from './Image'; 

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
                <div className="filterList">
                    <Filter 
                        key="Noir"     
                        filterFunctions={{'contrast':138, 'hue':0, 'brightness':122, 'saturate':0, 'sepia':0}} 
                        onClick={this.updateSettings} 
                    > 
                        <Image image={this.props.image} /> 
                    </Filter>
                    <Filter 
                        key="Aged"     
                        filterFunctions={{'contrast':94, 'hue':-54, 'brightness':92, 'saturate':100, 'sepia':44}} 
                        onClick={this.updateSettings} 
                    > 
                            <Image image={this.props.image} /> 
                    </Filter>
                    <Filter 
                        key="Whiteout" 
                        filterFunctions={{'contrast':32, 'hue':0, 'brightness':173, 'saturate':0, 'sepia':0}} 
                        onClick={this.updateSettings} 
                    > 
                        <Image image={this.props.image} /> 
                    </Filter>
                    <Filter 
                        key="Vintage"  
                        filterFunctions={{'contrast':164, 'hue':0, 'brightness':47, 'saturate':0, 'sepia':100}} 
                        onClick={this.updateSettings} 
                    > 
                        <Image image={this.props.image} /> 
                    </Filter>
                </div>
            </div>
        )
    }
}

export default Settings
