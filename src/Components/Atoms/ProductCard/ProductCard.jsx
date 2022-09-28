import React from "react";
import "./ProductCard.css";
import Button from "../Button/Button";

function ProductCard(props) {
  const image = props.image;
  const title = props.cardTitle;
  const subTitle = props.subTitle;
  const listOne = props.listOne;
  const listTwo = props.listTwo;
  const listThree = props.listThree;
  const listFour = props.listFour;

  
  return (
    <>
      <div style={{minWidth: '70%'}} className="product-card">
        <div className="product-card-header-container">
          <img
            src={image}
            alt=""
            srcset=""
            style={{ height: "40px", width: "40px" }}
          />
          <h4>{title}</h4>
        </div>

        <div>
          <strong>
            <p style={{ fontSize: "1.2rem" }}>{subTitle}</p>
          </strong>
        </div>

        <ul className="product-card-list">
          <div style={{ display: "flex", gap: "10px", paddingBottom: "10px" }}>
            <img
              src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin-black.svg"
              alt=""
              srcset=""
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <li >{listOne}</li> 
          </div>
          <div style={{ display: "flex", gap: "10px", paddingBottom: "10px" }}>
            <img
              src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin-black.svg"
              alt=""
              srcset=""
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <li>{listTwo}</li>
          </div>
          <div style={{ display: "flex", gap: "10px", paddingBottom: "10px" }}>
            <img
              src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin-black.svg"
              alt=""
              srcset=""
              style={{ height: "1.5rem", width: "1.5rem" }}
            />
            <li>{listThree}</li>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {listFour? <img
              src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin-black.svg"
              alt=""
              srcset=""
              style={{ height: "1.5rem", width: "1.5rem" }}
            />: null}
           
             <li>{listFour}</li>
          </div>
        </ul>
        <div className="product-card-button-container">
          {title === "Mortgage Marketplace" ? (
            <Button
            
             
              Label="Learn more"
              backgroundColor="#c33991"
              paddingTop="16px"
              paddingBottom="18px"
              paddingLeft="32px"
              paddingRight="32px"
            />
          ) : (
            <>
              <Button
                Label={
                  title === "TFSA Savings Account" ||
                  title === "GICs" ||
                  title === "RSP Savings Account"
                    ? "Start Investing "
                    : title === "International Money Transfers"
                    ? "Send money abroad"
                    : "Start earning"
                }
                backgroundColor="#c33991"
                paddingTop="16px"
                paddingBottom="18px"
                paddingLeft="32px"
                paddingRight="32px"
              />
              <Button
                paddingTop="16px"
                paddingBottom="18px"
                Label="Learn more"
                backgroundColor="white"
                textColor="black"
                borderColor="1px solid black"
                paddingLeft="32px"
                paddingRight="32px"
               
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
