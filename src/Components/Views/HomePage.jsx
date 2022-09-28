import React from "react";
import NavBarContent from "../Organisms/NavBarContent/NavBarContent";
import SideBarDrawer from "../Organisms/SideBarDrawer/SideBarDrawer";
import ProductCardContent from "../Organisms/ProductCardsContent/ProductCardsContent";

function HomePage() {

  return (
    <>
      <NavBarContent />
      <SideBarDrawer />
      <div style={{height:'700px', backgroundColor:'lightgrey'}}>Carousel</div>
      <ProductCardContent/>
    </>
  );
}

export default HomePage;
