import React from "react";
import "./FormSubmissionButton.css";

function FormSubmissionButton(props) {
  const Label = props.Label;
  const width = props.width;
  const backgroundColor = props.backgroundColor;
  const border = props.border;
  const color = props.color;
  const disabled = props.disabled;
  return (
    <>
      <button
        disabled={disabled}
        style={{
          width: width,
          backgroundColor: disabled? 'grey': backgroundColor,
          border: border,
          color: color,
          cursor:disabled? '':'pointer'
        }}
        className="form-submission-button"
      >
        {Label}
      </button>
    </>
  );
}

export default FormSubmissionButton;
