import React from "react";
import "./PasscodeTextField.css";

function PassCodeTextField({value,handleInputChange,backgroundColor}) {
  return (
      <div className="passcode-container">
        {" "}
        <input
          style={{ backgroundColor: backgroundColor }}
          placeholder="#"
          className="passcode-text-field"
          value={value}
          onChange={handleInputChange}
        />
      </div>
  );
}

export default PassCodeTextField;
