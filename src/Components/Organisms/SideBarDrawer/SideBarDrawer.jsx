import React, { useContext } from "react";
import "./SideBarDrawer.css";
import { SideBarToggleContext } from "../../../Context/SideBarToggler";
import SideBarMobileSearchBar from "../../Atoms/SideBarMobileSearchBar/SideBarMobileSearchBar";
import SideNavigationBar from "../../Molecules/SideNavigationBar/SideNavigationBar";
import Backdrop from "../Backdrop/Backdrop";


function SideBarDrawer() {
  const { toggle, setToggle } = useContext(SideBarToggleContext);
  
  const backdropHandler = () => {
    setToggle(false);
  };

  let drawerClass = "side-bar-drawer";
  let backDrop;
  if (toggle) {
    drawerClass = "side-bar-drawer open";
    backDrop =  <Backdrop backdropHandler={backdropHandler}/>
  }
  return (
    <>
      <div className={drawerClass}>
        <SideBarMobileSearchBar />
        <SideNavigationBar/>
        {backDrop}
      </div>
    </>
  );
}

export default SideBarDrawer;
