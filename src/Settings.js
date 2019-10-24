import React, { Component } from 'react'

export class Settings extends Component {
    constructor(){
        super()
        this.state = {
             'contrast':100, 
             'hue':0, 
             'brightness':100, 
             'saturate':100, 
             'sepia':0
            };
            this.props = props

            this.handleChange = this.handleChange.bind(this);
            this.updateSettings = this.updateSettings.bind(this);
        }

        handleChange(){
            let filter = e.target.id;
            let value = e.target.value;
            this.setState((prevState,props) => {
                prevState[filter] = value;
                return prevState;
            });
        }

        updateSettings(nextFilterState){
            this.setState({
                nextFilterState
            });
        }

    render() {
        return (
            <div className="Settings">
                <div className="mainWrapper">
                    <div className="sidebar">
                        <div className="title">Tosstagram v1.0</div>
                        <Setting name="contrast"   min={0}    max={200} value={this.state.contrast}   onChange={this.handleChange}></Setting>
                        <Setting name="hue"        min={-360} max={360} value={this.state.hue}        onChange={this.handleChange}></Setting>
                        <Setting name="brightness" min={0}    max={200} value={this.state.brightness} onChange={this.handleChange}></Setting>
                        <Setting name="saturate"   min={0}    max={100} value={this.state.saturate}   onChange={this.handleChange}></Setting>
                        <Setting name="sepia"      min={0}    max={100} value={this.state.sepia}      onChange={this.handleChange}></Setting>
                    </div>
                    <div className="imageContainer">
                        <Filter key="Default" filterFunctions={this.state}>
                            <Image image={this.props.image} />
                        </Filter>
                    </div>
                </div>
                <div className=""></div>
            </div>
        )
    }
}

export default Settings
