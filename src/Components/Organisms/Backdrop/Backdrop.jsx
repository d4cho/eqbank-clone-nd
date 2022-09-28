import React from "react";
import "./Backdrop.css";

function Backdrop({backdropHandler}) {
  return (
    <>
      <div onClick={backdropHandler} className="backdrop"></div>
    </>
  );
}

export default Backdrop;
