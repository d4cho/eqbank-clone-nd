import React from 'react';
import './TextField.css';

function TextField({ placeholder, value, handleInputChange, width }) {
    return (
        <>
            <input
                style={{
                    width: width,
                }}
                placeholder={placeholder}
                type='text'
                className='text-field'
                value={value}
                onChange={handleInputChange}
            />
        </>
    );
}

export default TextField;
