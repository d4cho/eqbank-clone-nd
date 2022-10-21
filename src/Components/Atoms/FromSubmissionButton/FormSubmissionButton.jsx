import React from 'react';
import './FormSubmissionButton.css';

function FormSubmissionButton({
    Label,
    width,
    backgroundColor,
    border,
    color,
    disabled,
    marginTop,
    handleSubmit,
}) {
    return (
        <button
            onClick={handleSubmit}
            disabled={disabled}
            style={{
                width: width,
                backgroundColor: disabled ? 'grey' : backgroundColor,
                border: border,
                color: color,
                cursor: disabled ? '' : 'pointer',
                marginTop: marginTop,
            }}
            className='form-submission-button'
        >
            {Label}
        </button>
    );
}

export default FormSubmissionButton;
