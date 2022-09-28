import React, { useState, useRef } from "react";
import "./ProductCardsContent.css";
import ProductCard from "../../Atoms/ProductCard/ProductCard";
import { cardsDataOne } from "../../../Data/Data";
import { cardsDataTwo } from "../../../Data/Data";

function ProductCardContent() {
  const [title, setTitle] = useState("Banking that earns");

  const bankingThatEarns = () => {
    setTitle("Banking that earns");
  };

  const investmentsThatGrow = () => {
    setTitle("Investments that grow");
  };

  const aSmartWayToPay = () => {
    setTitle("A smart way to pay");
  };
  const aMortgageThatsWorthIt = () => {
    setTitle("A mortgage that's worth it");
  };

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderSelectedView = (title) => {
    switch (title) {
      case "Banking that earns":
        return cardsDataOne.map((product) => (
          <ProductCard key={product.id} {...product} />
        ));

      case "Investments that grow":
        return cardsDataTwo.map((product) => (
          <ProductCard key={product.id} {...product} />
        ));

      case "A smart way to pay":
        return (
          <ProductCard
          image={
            "https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4"
          }
          cardTitle="International Money Transfers"
          subTitle="Need to send money or make payments abroad? do it for a whole lot less"
          listOne="Up to 8 cheaper than other banks"
          listTwo="A no-nonsense, zero-markup exchange rate"
          listThree="Send money direct from your account in a few easy steps"
          listFour="Get your money there fast(some transfers are instant!)"
        />
        );

      case "A mortgage that's worth it":
        return (
          <ProductCard
          image={
            "https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4"
          }
          cardTitle="Mortgage Marketplace"
          subTitle="The no-nonsense way to find the best mortgage that's right for you."
          listOne="Access 2,000 mortgage products in one place"
          listTwo="Get the best rates right from the start"
          listThree="Simple online process"
        />
        );

      default:
        return cardsDataOne.map((product) => (
          <ProductCard key={product.id} {...product} />
        ));
    }
  };
  return (
    <>
      {/* mobile */}
      <div className="product-cards-mobile">
        <h2 className="product-cards-title">I want…</h2>
        <h3 className="product-cards-subtitle">Banking that earns</h3>
        <div className="product-cards-container">
          {cardsDataOne.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <h3 className="product-cards-subtitle">Investment that grow</h3>

        <div className="product-cards-container">
          {cardsDataTwo.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <h3 className="product-cards-subtitle"> A Smart way to pay</h3>
        <ProductCard
          image={
            "https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4"
          }
          cardTitle="International Money Transfers"
          subTitle="Need to send money or make payments abroad? do it for a whole lot less"
          listOne="Up to 8 cheaper than other banks"
          listTwo="A no-nonsense, zero-markup exchange rate"
          listThree="Send money direct from your account in a few easy steps"
          listFour="Get your money there fast(some transfers are instant!)"
        />
        <h3 className="product-cards-subtitle">A mortgage that’s worth it</h3>
        <ProductCard
          image={
            "https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4"
          }
          cardTitle="Mortgage Marketplace"
          subTitle="The no-nonsense way to find the best mortgage that's right for you."
          listOne="Access 2,000 mortgage products in one place"
          listTwo="Get the best rates right from the start"
          listThree="Simple online process"
        />
      </div>

      {/* desktop */}
      <div className="product-cards-desktop">
        {/* side navigation */}
        <div className="product-cards-nav-sticky">
          <ul className="product-cards-nav-list">
            <h3>I want...</h3>
            <div onClick={bankingThatEarns} className="product-cards-nav-item">
              <li
                onClick={handleClick}
                style={{
                  paddingBottom: "10px",
                  color: title === "Banking that earns" ? "#c33991" : null,
                }}
              >
                Banking that earns
              </li>{" "}
              {title === "Banking that earns" ? (
                <img
                  src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg"
                  alt=""
                  srcset=""
                  style={{ height: "20px" }}
                />
              ) : null}
            </div>
            <div
              onClick={investmentsThatGrow}
              className="product-cards-nav-item"
            >
              <li
                style={{
                  paddingBottom: "10px",
                  color: title === "Investments that grow" ? "#c33991" : null,
                }}
              >
                Investments that grow
              </li>
              {title === "Investments that grow" ? (
                <img
                  src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg"
                  alt=""
                  srcset=""
                  style={{ height: "20px" }}
                />
              ) : null}
            </div>
            <div onClick={aSmartWayToPay} className="product-cards-nav-item">
              <li
                style={{
                  paddingBottom: "10px",
                  color: title === "A smart way to pay" ? "#c33991" : null,
                }}
              >
                A smart way to pay
              </li>
              {title === "A smart way to pay" ? (
                <img
                  src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg"
                  alt=""
                  srcset=""
                  style={{ height: "20px" }}
                />
              ) : null}
            </div>
            <div
              onClick={aMortgageThatsWorthIt}
              className="product-cards-nav-item"
            >
              {" "}
              <li
                style={{
                  paddingBottom: "10px",
                  color:
                    title === "A mortgage that's worth it" ? "#c33991" : null,
                }}
              >
                A mortage that's worth it
              </li>
              {title === "A mortgage that's worth it" ? (
                <img
                  src="https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg"
                  alt=""
                  srcset=""
                  style={{ height: "20px" }}
                />
              ) : null}
            </div>
          </ul>
        </div>

        <div className="product-cards-wrapper">
          <div className="product-cards-section">
            {renderSelectedView(title)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardContent;
