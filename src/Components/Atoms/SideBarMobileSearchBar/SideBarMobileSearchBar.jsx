import React from "react";
import "./SideBarMobileSearchBar.css";

function SideBarMobileSearchBar() {
  return (
    <>
      <div className="mobile-search-bar-parent-container">
        <form action="" method="get">
          <div className="mobile-search-bar-inner-container">
            <input
              className="mobile-search-input"
              type="text"
              placeholder="Search:"
            />
            <button className="mobile-search-button" type="submit">
              <span className="mobile-search-icon" >Submit</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SideBarMobileSearchBar;
