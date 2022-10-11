import React from "react";
import "./PasscodeTextField.css";

function PassCodeTextField(props) {
  const value = props.value;
  const handleInputChange = props.handleInputChange;
  const backgroundColor = props.backgroundColor
  return (
    <>
      <div className="passcode-container">
        {" "}
        <input
        style={{backgroundColor:backgroundColor}}
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
