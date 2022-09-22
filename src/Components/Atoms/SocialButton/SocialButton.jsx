import React from "react";
import "./SocialButton.css";

function SocialButton(props) {
const img = props.img
  return (
    <>
      <a href="#">
        <img
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "135px",
          }}
          src={img}
          alt=""
          srcset=""
        />
      </a>
    </>
  );
}

export default SocialButton;
