import React from "react";
import "./JoinNowButtonMobile.css";

function JoinNowButtonMobile(props) {
  const width = props.width;
  const paddingTop = props.paddingTop;
  const paddingBottom = props.paddingBottom;
  return (
    <>
      <a
        style={{
          minWidth: width,
          paddingBottom: paddingBottom,
          paddingTop: paddingTop,
        }}
        className="join-now-button"
        href="/"
      >
        <span>Join Now</span>
      </a>
    </>
  );
}

export default JoinNowButtonMobile;
