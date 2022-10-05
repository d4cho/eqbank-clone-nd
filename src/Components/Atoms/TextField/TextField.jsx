import React from "react";
import "./TextField.css";

function TextField(props) {
  const placeholder = props.placeholder;
  const value = props.value;
  const handleInputChange = props.handleInputChange;
  return (
    <>
      <input
        placeholder={placeholder}
        type="text"
        className="text-field"
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
}

export default TextField;
