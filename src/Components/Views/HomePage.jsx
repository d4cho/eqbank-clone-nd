import React from "react";
import { Link } from "react-router-dom";
import ProductCardContent from "../Organisms/ProductCardsContent/ProductCardsContent";
import Button from "../Atoms/Button/Button";

function HomePage() {
  return (
    <>
      <div style={{ height: "700px", backgroundColor: "lightgrey" }}>
        Carousel
      </div>
      <ProductCardContent />

      <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', marginTop:'40px', marginBottom:'40px'}}>
        <Link to="/welcome">
          <Button
            paddingTop="10px"
            paddingBottom="10px"
            Label="Get Started"
            paddingLeft="10px"
            paddingRight="10px"
          />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
