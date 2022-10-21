import React from 'react';
import './Spinner.css';

function Spinner({ bottom, left, position, height, width, right }) {
    return (
        <div
            className='spin'
            style={{
                position: position,
                bottom: bottom,
                left: left,
                height: height,
                width: width,
                right:right
            }}
        ></div>
    );
}

export default Spinner;
