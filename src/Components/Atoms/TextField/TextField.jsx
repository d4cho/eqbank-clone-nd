import React from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width, touched, onBlur, submitted }) {
    return (
        <>
            <input
                style={{
                    width: width,
                    border: touched || submitted ? '1px solid #cb061d' : null,
                    backgroundColor: touched || submitted ? '#fcedec' : null,
                }}
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
