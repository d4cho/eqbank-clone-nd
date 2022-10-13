import React from "react";
import "./MiniCard.css";

function MiniCard({header,content,link}) {

  return (
 
      <div className="card">
        <div className="high-lighter" />
        <div className="card-content">
          <h3 className="header">{header} <br/></h3>
          <p className="content">{content}</p>
          <a href="/" className="learn">{link}</a>
        </div>
      </div>
  
  );
}

export default MiniCard;
