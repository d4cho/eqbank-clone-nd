import React from "react";
import "./EQBankLogo.css";

function EQBankLogo(props) {
  const height = props.height
  const width = props.width
  return (
    <>
      <a href="/">
        <img
        style={{width: width, height: height}}
          className="header-logo-img"
          src="https://www.eqbank.ca/images/default-source/2021-redesign/eqbank_icons_apr6/icons_eqbank/logo_eqbank.svg?sfvrsn=907b87d3_20"
          alt=""
        />
      </a>
    </>
  );
}

export default EQBankLogo;
