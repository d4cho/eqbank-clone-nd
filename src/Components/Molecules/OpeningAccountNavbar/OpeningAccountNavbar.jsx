import React from "react";
import "./OpeningAccountNavbar.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { FaRegCommentDots } from "react-icons/fa";

function OpeningAccountNavbar() {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <li>
          <HelpOutlineIcon
            style={{ position: "relative", bottom: "3px", color: "#c73391" }}
          />
        </li>
        <li className="need-help">Need help?</li>
        <li>
          <div className="header-diver" />
        </li>
        <FaRegCommentDots style={{ color: "#c73391", fontSize: "20px" }} />
        <li className="contact-us-opening-account"> Contact us</li>
        <li>
          <a className="sign-up" href="/">
            Sign in
          </a>
        </li>
      </ul>
    </>
  );
}

export default OpeningAccountNavbar;
