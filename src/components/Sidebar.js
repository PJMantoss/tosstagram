import React from 'react';
import Setting from './Setting';

export default function Sidebar(props) {

    let onChange = props.onChange;
    let settings = settings.map((setting, i) => {
        return <Setting 
                   onChange={onChange} 
                   name={setting.name} 
                   value={setting.value} 
                />
    })

    return (
        <div className="sidebar">
            <div className="title">Tosstagram v1.0</div>
            {settings}
        </div>
    )
}
