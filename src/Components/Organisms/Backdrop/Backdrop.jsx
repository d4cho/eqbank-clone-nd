import React, { useContext } from "react";
import "./Backdrop.css";
import { SideBarToggleContext } from "../../../Context/SideBarToggler";

function Backdrop({backdropHandler}) {
  return (
    <>
      <div onClick={backdropHandler} className="backdrop"></div>
    </>
  );
}

export default Backdrop;
