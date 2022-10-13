import React from 'react';
import './FormSubmissionButton.css';

function FormSubmissionButton({ Label, width, backgroundColor, border, color, disabled }) {
    return (
        <button
            disabled={disabled}
            style={{
                width: width,
                backgroundColor: disabled ? 'grey' : backgroundColor,
                border: border,
                color: color,
                cursor: disabled ? '' : 'pointer',
            }}
            className='form-submission-button'
        >
            {Label}
        </button>
    );
}

export default FormSubmissionButton;
