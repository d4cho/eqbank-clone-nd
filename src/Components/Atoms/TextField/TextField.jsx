import React, { useState } from 'react';
import './TextField.css';

function TextField({
    placeholder,
    value,
    handleInputChange,
    width,
    type,
    checked,
}) {
    return (
        <>
            <input
                style={{
                    width: width,
                }}
                placeholder={placeholder}
                className='text-field'
                value={value}
                onChange={handleInputChange}
                type={type}
                checked={checked}
            />
        </>
    );
}

export default TextField;
