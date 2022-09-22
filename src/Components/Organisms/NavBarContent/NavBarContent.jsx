import React, { useContext } from "react";
import "./NavBarContent.css";
import JoinNowButtonMobile from "../../Atoms/JoinNowButtonMobile/JoinNowButtonMobile";
import LeftNavigationBar from "../../Molecules/LeftNavigationBar/LeftNavigationBar";
import RightNavigationBar from "../../Molecules/RightNavigationBar/RightNavigationBar";
import { SearchBarContext } from "../../../Context/SearchBarContext";
import SearchBar from "../../Atoms/SearchBar/SearchBar";
import { SideBarToggleContext } from "../../../Context/SideBarToggler";

function NavBarContent() {
  const { show, closeShow } = useContext(SearchBarContext);
  const { toggle, sideBarToggle } = useContext(SideBarToggleContext);
  return (
    <>
      <div className="parent-container">
        <div className="inner-container">
          <div className="join-now-container">
            <JoinNowButtonMobile paddingTop="10px" paddingBottom="10px" />
            <a
              onClick={sideBarToggle}
              className={toggle ? "x-button" : "menu-button"}
              href="#"
            >
              <span
                className="menu-icon"
                data-parent-container-toggle-icon=""
              ></span>
            </a>
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
          {/* 
          <div className="close-bar-wrapper">
            <form action="">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <SearchBar />
                <button className="Go-button">Go</button>
                <span className="search-close-button">
                  <img
                    onClick={closeShow}
                    src="https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg"
                    alt=""
                    srcset=""
                  />
                </span>
              </div>
            </form>{" "}
          </div> */}

          <a href="/">
            <img
              className="header-logo-img"
              src="https://www.eqbank.ca/images/default-source/2021-redesign/eqbank_icons_apr6/icons_eqbank/logo_eqbank.svg?sfvrsn=907b87d3_20"
              alt=""
            />
          </a>
        </div>
        {show ? (
          <div
            style={show === true ? { display: "block" } : { display: "none" }}
            className={"search-bar-wrapper"}
          >
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
          <div
            style={show === false ? { display: "none" } : { display: "block" }}
            className="close-bar-wrapper"
          >
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
      </div>
    </>
  );
}

export default NavBarContent;
