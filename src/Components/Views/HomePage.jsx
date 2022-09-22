import React,{useContext}  from "react";
import NavBarContent from "../Organisms/NavBarContent/NavBarContent";
import NavBarDropdownContent from "../Organisms/NavBarDropDownContent/NavBarDropDownContent";
import MiniCardsContent from "../Organisms/MiniCardsContent/MiniCardsContent";
 import SideBarDrawer from "../Organisms/SideBarDrawer/SideBarDrawer";
import { SideBarToggleContext } from "../../Context/SideBarToggler";
import Backdrop from "../Organisms/Backdrop/Backdrop";

function HomePage() {
  const { toggle } = useContext(SideBarToggleContext);
  let sideDrawer    
  let backdrop;
  if(toggle){
    sideDrawer = <SideBarDrawer/>
    backdrop= <Backdrop/>
  }
  return (
    <>
      <NavBarContent />
      {sideDrawer}
      {backdrop}
      <NavBarDropdownContent />
      <MiniCardsContent/>
    </>
  );
}

export default HomePage;
