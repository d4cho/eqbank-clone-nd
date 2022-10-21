import React from 'react';
import './SignUpFAQ.css';

function SignUpFAQ({ Label, fontSize, color, icon }) {
    return (
        <p
            style={{
                fontSize: fontSize,
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
            }}
        >
            {icon}
            {Label}
        </p>
    );
}

export default SignUpFAQ;
