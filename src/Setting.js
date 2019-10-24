import React from 'react'

export default function Setting(props) {
    return (
        <div className="Setting">
            <label>
                <div>{props.name}</div>
                <div>{props.value}</div>
                <input 
                    id={props.name} 
                    min={props.min} 
                    max={props.max} 
                    step="1" 
                    onChange={props.onChange} 
                    type="range" 
                    value={props.value}
                />
            </label>
        </div>
    )
}

Setting.propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    onChange: React.PropTypes.func
};
