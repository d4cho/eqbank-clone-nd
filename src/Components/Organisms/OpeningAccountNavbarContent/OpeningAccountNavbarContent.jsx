import React, { useState, useEffect } from "react";
import "./OpeningAccountNavbarContent.css";
import EQBankLogo from "../../Atoms/EQBankLogo/EQBankLogo";
import OpeningAccountNavbar from "../../Molecules/OpeningAccountNavbar/OpeningAccountNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function OpeningAccountNavbarContent() {
  const [spinner, setSpinner] = useState(true);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);
  return (
    <>
      <nav className="opening-account-navbar-parent">
        <div className="opening-account-container">
          <EQBankLogo height="39px" width="90px" />
          <OpeningAccountNavbar />
        </div>
        <div className="opening-account-container-mobile">
          <EQBankLogo height="39px" width="90px" />
          <div onClick={toggleMenu}>
            {toggle === false ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className={spinner ? "spin" : ""}></div>
      </nav>
    </>
  );
}

export default OpeningAccountNavbarContent;
