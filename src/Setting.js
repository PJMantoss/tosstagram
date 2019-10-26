import React from 'react';

let value = '';

export default function Setting(props) {
    
        if (props.name === 'hue'){
             value.replace('deg','');

            return (
                <div className="Setting">
                    <label>
                        <div>{props.name}</div>
                        <div>{value}</div>
                        <input 
                            refs={props.name}
                            id={props.name} 
                            min="-360" 
                            max="360" 
                            step="1" 
                            onChange={props.onChange} 
                            type="range" 
                            defaultValue={props.value}
                        />
                    </label>
                </div>
            )
        } else if(props.name === 'contrast' || props.name === 'brightness') {

                   value.replace('%','');

            return (
                <div className="Setting">
                    <label>
                        <div>{props.name}</div>
                        <div>{value}</div>
                        <input 
                            refs={props.name}
                            id={props.name} 
                            min="0" 
                            max="200" 
                            step="1" 
                            onChange={props.onChange} 
                            type="range" 
                            defaultValue={props.value}
                        />
                    </label>
                </div>
            )
        } else{
            value.replace('%','');

            return (
                <div className="Setting">
                    <label>
                        <div>{props.name}</div>
                        <div>{value}</div>
                        <input 
                            refs={props.name}
                            id={props.name} 
                            min="0" 
                            max="100" 
                            step="1" 
                            onChange={props.onChange} 
                            type="range" 
                            defaultValue={props.value}
                        />
                    </label>
                </div>
            )
        }
}
