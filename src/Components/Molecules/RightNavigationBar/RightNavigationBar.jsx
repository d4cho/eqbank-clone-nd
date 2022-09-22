import React from "react";
import JoinNowButtonDesktop from "../../Atoms/JoinNowButtonDesktop/JoinNowButtonDesktop";
import "./RightNavigationBar.css";

function RightNavigationBar() {
  return (
    <>
      <div className="right-navigation-container">
        <a href="/"> <img className="contact-us-img" src="https://www.eqbank.ca/images/default-source/svgs/eqbank_phone-grey.svg?sfvrsn=2ed0b9d3_6" alt=""  /></a>
        <div className="header-divider"></div>
        <a className="header-lang" href="/">FR</a>
        <div className="header-divider"></div>
        <a className="header-sign-in" href="/">Sign in</a>
        <JoinNowButtonDesktop/>
      </div>
    </>
  );
}

export default RightNavigationBar;
