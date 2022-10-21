import React from 'react';
import './Label.css';

function Label({ Label, fontSize, fontWeight }) {
    return (
        <>
            <label style={{ fontSize: fontSize, fontWeight: fontWeight }}>{Label}</label>
        </>
    );
}

export default Label;
