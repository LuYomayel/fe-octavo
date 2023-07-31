
import { useState } from 'react';
import '../styles/Dropdown.css';
export function Dropdown({ options, value, onChange}) {
    const handleOptionChange = (event) => {
        console.log(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div className="dropdown-wrapper">
            <select className='dropdown' name="team" id="team" value={value} onChange={handleOptionChange}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}