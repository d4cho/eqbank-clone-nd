import React, { useContext, useState } from "react";
import "./LeftNavigationBar.css";
import { leftNavigationContext } from "../../../Context/LeftNavigationBarContext";
import { SearchBarContext } from "../../../Context/SearchBarContext";
function LeftNavigationBar() {
  const {
    isPersonalBankingArrow,
    isAboutUsArrow,
    isOpenHelpArrow,
    menuTitle,
    openArrowPersonalBanking,
    openArrowAboutUs,
    openArrowHelpUs,
  } = useContext(leftNavigationContext);

  const {handleShow} = useContext(SearchBarContext);


  return (
    <>
      <div className={"left-navbar-container"}>
        <nav>
          <ul className="menu-items">
            <li onClick={openArrowPersonalBanking}>
              <div className="icon-and-text-holder">
                <span style={menuTitle === 'Personal Banking' && isPersonalBankingArrow? {color: '#c33991'}: null} className="align-name-title">Personal Banking</span>
                <div
                  className={isPersonalBankingArrow ? "arrow-up" : "arrow-down"}
                />
              </div>
              <div
                className={menuTitle === "Personal Banking" && isPersonalBankingArrow ? "active" : ""}
              />
            </li>
            <li onClick={openArrowAboutUs}>
              <div className="icon-and-text-holder">
                <span style={menuTitle === 'About us' && isAboutUsArrow? {color: '#c33991'}: null} className="align-name-title">About us</span>
                <div className={isAboutUsArrow ? "arrow-up" : "arrow-down"} />
              </div>
              <div className={menuTitle  === "About us" && isAboutUsArrow ? "active" : ""} />
            </li>
            <li>
              <span className="align-name-title-no-arrow">
                Education Centre
              </span>
            </li>
            <li onClick={openArrowHelpUs}>
              <div className="icon-and-text-holder">
                <span style={menuTitle === 'Help' && isOpenHelpArrow? {color: '#c33991'}: null} className="align-name-title">Help</span>
                <div className={isOpenHelpArrow ? "arrow-up" : "arrow-down"} />
              </div>
              <div className={menuTitle === "Help" && isOpenHelpArrow ? "active" : ""} />
            </li>
            <li>
              {" "}
              <div onClick={handleShow}  className="search-button">
                <a href="#" className="search-link">
                  <span className="search-icon"></span>
                </a>
              </div>

            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default LeftNavigationBar;
