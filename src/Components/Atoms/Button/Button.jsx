import React from "react";
import "./Button.css";

function Button(props) {
  const width = props.width;
  const paddingTop = props.paddingTop;
  const paddingBottom = props.paddingBottom;
  const label = props.Label
  const backgroundColor = props.backgroundColor
  const textColor = props.textColor
  const borderColor = props.borderColor
  const paddingLeft = props.paddingLeft
  const paddingRight = props.paddingRight
  const href = props.href
  
  return (
    <>
      <a
        style={{
          minWidth: width,
          paddingBottom: paddingBottom,
          paddingTop: paddingTop,
          backgroundColor: backgroundColor,
          color : textColor,
          border: borderColor,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight
        }}
        className="main-button"
        href={href}
      >
        <span>{label}</span>
      </a>
    </>
  );
}

export default Button;
