import React, { useContext } from "react";
import "./NavBarContent.css";
import Button from "../../Atoms/Button/Button";
import LeftNavigationBar from "../../Molecules/LeftNavigationBar/LeftNavigationBar";
import RightNavigationBar from "../../Molecules/RightNavigationBar/RightNavigationBar";
import { SearchBarContext } from "../../../Context/SearchBarContext";
import SearchBar from "../../Atoms/SearchBar/SearchBar";
import { SideBarToggleContext } from "../../../Context/SideBarToggler";
import NavBarDropdownContent from "../../Molecules/NavBarDropDownContent/NavBarDropDownContent";
import MiniCardsContent from "../../Molecules/MiniCardsContent/MiniCardsContent";

function NavBarContent() {
  const { show, closeShow } = useContext(SearchBarContext);
  const { toggle, sideBarToggle } = useContext(SideBarToggleContext);
  return (
    <>
      <div className="parent-container">
        <div className="inner-container">
          <div className="join-now-container">
            <Button
              paddingTop="10px"
              paddingBottom="10px"
              Label="Join now"
              paddingLeft="10px"
              paddingRight="10px"
            />
            <span
              onClick={sideBarToggle}
              className={toggle ? "x-button" : "menu-button"}
            >
              <span
                className="menu-icon"
                data-parent-container-toggle-icon=""
              ></span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "80px",
            }}
          >
            <RightNavigationBar />
            <LeftNavigationBar />
          </div>

          <a href="/">
            <img
              className="header-logo-img"
              src="https://www.eqbank.ca/images/default-source/2021-redesign/eqbank_icons_apr6/icons_eqbank/logo_eqbank.svg?sfvrsn=907b87d3_20"
              alt=""
            />
          </a>
        </div>
        {/* need one dive hide and then show */}

        {show && (
          <div className={"search-bar-wrapper"}>
            <form action="">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SearchBar />
                <span className="search-close-button">
                  <img
                    onClick={closeShow}
                    src="https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg"
                    alt=""
                    srcset=""
                  />
                </span>
                <button className="Go-button">Go</button>
              </div>
            </form>{" "}
          </div>
        )}
        {/* {show ? (
          <div className={"search-bar-wrapper"}>
            <form action="">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SearchBar />
                <span className="search-close-button">
                  <img
                    onClick={closeShow}
                    src="https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg"
                    alt=""
                    srcset=""
                  />
                </span>
                <button className="Go-button">Go</button>
              </div>
            </form>{" "}
          </div>
        ) : (
          <div className="close-bar-wrapper">
            <form action="">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SearchBar />
                <span className="search-close-button">
                  <img
                    onClick={closeShow}
                    src="https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg"
                    alt=""
                    srcset=""
                  />
                </span>
                <button className="Go-button">Go</button>
              </div>
            </form>{" "}
          </div>
        )} */}
      </div>

      <NavBarDropdownContent />
      <MiniCardsContent />
    </>
  );
}

export default NavBarContent;
