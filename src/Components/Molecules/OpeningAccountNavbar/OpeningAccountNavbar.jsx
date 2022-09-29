import React from "react";
import "./OpeningAccountNavbar.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
        <li className="contact-us-opening-account">icon Contact us</li>
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
