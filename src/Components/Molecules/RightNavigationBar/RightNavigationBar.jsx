import React from "react";
import "./RightNavigationBar.css";
import Link from "../../Atoms/Link/Link";

function RightNavigationBar() {
  return (
    <>
      <div className="right-navigation-container">
        <a href="/">
          {" "}
          <img
            className="contact-us-img"
            src="https://www.eqbank.ca/images/default-source/svgs/eqbank_phone-grey.svg?sfvrsn=2ed0b9d3_6"
            alt=""
          />
        </a>
        <div className="header-divider"></div>
        <a className="header-lang" href="/">
          FR
        </a>
        <div className="header-divider"></div>
        <a className="header-sign-in" href="/">
          Sign in
        </a>
        <Link
          paddingTop="10px"
          paddingBottom="10px"
          Label="Join now"
          paddingLeft="10px"
          paddingRight="10px"
          href = "/"
        />
      </div>
    </>
  );
}

export default RightNavigationBar;
