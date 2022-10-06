import React from "react";
import "./TextField.css";

function TextField(props) {
  const placeholder = props.placeholder;
  const value = props.value;
  const handleInputChange = props.handleInputChange;
  const width = props.width;
  return (
    <>
      <input
        style={{ width: width }}
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
