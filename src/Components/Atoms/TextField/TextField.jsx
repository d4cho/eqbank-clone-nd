import React from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width, onBlur, error }) {
    return (
        <>
            <input
                style={{ width: width, backgroundColor: error ? '#fcedec' : '' }}
                placeholder={placeholder}
                type='text'
                className='text-field'
                value={value}
                onChange={handleInputChange}
                onBlur={onBlur}
            />
        </>
    );
}

export default TextField;
