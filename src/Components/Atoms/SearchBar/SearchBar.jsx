import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <img
        className="search-image"
        style={{
          height: "16px",
          width: "16px",
          position: "relative",
          top: "22px",
          left: "18px",
        }}
        src="https://www.eqbank.ca/Assets/dist/images/search-icon-pink.svg"
        alt=""
        srcset=""
      />
      <input placeholder="Search:" className="search-field" type="text" />
    </>
  );
}

export default SearchBar;
