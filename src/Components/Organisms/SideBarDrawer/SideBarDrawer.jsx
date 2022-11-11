import React, { useContext } from "react";
import "./SideBarDrawer.css";
import { MainContext } from "../../../Context/MainContext";
import SideBarMobileSearchBar from "../../Atoms/SideBarSearchBar/SideBarSearchBar";
import SideNavigationBar from "../../Molecules/SideNavigationBar/SideNavigationBar";
import Backdrop from "../Backdrop/Backdrop";


function SideBarDrawer() {
  const { toggle, setToggle } = useContext(MainContext);
  
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
