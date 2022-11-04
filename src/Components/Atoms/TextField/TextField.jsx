import React, { useState } from 'react';
import './TextField.css';

function TextField({
    placeholder,
    value,
    handleInputChange,
    width,
    touched,
    onBlur,
    submitted,
    type,
    checked,
}) {
    return (
        <>
            <input
                style={{
                    width: width,
                    border: touched || submitted ? '1px solid #cb061d' : null,
                    backgroundColor: touched || submitted ? '#fcedec' : null,
                }}
                placeholder={placeholder}
                className='text-field'
                value={value}
                onChange={handleInputChange}
                onBlur={onBlur}
                type={type}
                checked={checked}
            />
        </>
    );
}

export default TextField;
