import React from "react";
import "./PasscodeTextField.css";

function PassCodeTextField(props) {
  const value = props.value;
  const handleInputChange = props.handleInputChange;
  return (
    <>
      <div className="passcode-container">
        {" "}
        <input
          placeholder="#"
          className="passcode-text-field"
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default PassCodeTextField;
