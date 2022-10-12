import React from "react";
import "./SelectField.css";

function SelectField(props) {
const width = props.width
const provincesData = props.provincesData
  return (
    <>
      <select style={{ width: width }} className="select-field">
      <option value="" disabled selected>Select one</option>
       {provincesData.map((data)=>{
        return <option value={data}>{data}</option>
       })}
      </select>
    </>
  );
}

export default SelectField;
