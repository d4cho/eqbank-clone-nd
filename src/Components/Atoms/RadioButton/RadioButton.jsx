import React from 'react';
import './RadioButton.css';

function RadioButton({ label, value, handleChange, checked }) {
    return (
        <div
            className='radio-button-div'
            style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
            <label>
                <input
                    className='radio-button'
                    type='radio'
                    value={value}
                    onChange={handleChange}
                    checked={checked}
                />
                <span className='radio-button-span'>{label}</span>
            </label>
        </div>
    );
}

export default RadioButton;
