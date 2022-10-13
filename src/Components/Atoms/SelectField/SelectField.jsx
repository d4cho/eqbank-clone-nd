import React from 'react';
import './SelectField.css';

function SelectField({ width, provincesData, value, handleInputChange }) {
    return (
        <select
            value={value}
            style={{ width: width }}
            onChange={handleInputChange}
            className='select-field'
        >
            <option value='' disabled selected>
                Select one
            </option>
            {provincesData.map((data, index) => {
                return (
                    <option key={index} value={data}>
                        {data}
                    </option>
                );
            })}
        </select>
    );
}

export default SelectField;
