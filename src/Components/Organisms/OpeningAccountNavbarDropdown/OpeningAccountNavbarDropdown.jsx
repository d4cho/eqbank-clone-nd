import React from "react";
import "./OpeningAccountNavbarDropdown.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { FaRegCommentDots } from "react-icons/fa";

function OpeningAccountNavbarDropdown() {
  return (
    <>
      <div className="opening-account-dropdown">
        <div className="opening-account-dropdown-inner-container">
          <div className="child-container-opening-account">
            <FaRegCommentDots style={{ color: "#c73391", fontSize:'30px' }} />
            <p> Contact us</p>
          </div>

          <div className="child-container-opening-account">
            <HelpOutlineIcon style={{ color: "#c73391", fontSize:'30px' }} />
            <p> Need a hand?</p>
          </div>
        </div>
      </div>
      <div className="opening-account-dropdown-sign-in">
        <p>Already a customer?</p>
        <a className="opening-account-sign-in" href="/">
          Sign in
        </a>
      </div>
    </>
  );
}

export default OpeningAccountNavbarDropdown;
