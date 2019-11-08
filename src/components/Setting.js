import React from 'react';
import PropTypes from 'prop-types';

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
    name: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
};