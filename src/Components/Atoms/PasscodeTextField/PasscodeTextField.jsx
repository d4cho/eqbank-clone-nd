import React from "react";
import "./PasscodeTextField.css";

function PassCodeTextField() {
  return (
    <>
      <div className="passcode-container">
        {" "}
        <input placeholder="#" className="passcode-text-field" />
      </div>
    </>
  );
}

export default PassCodeTextField;
