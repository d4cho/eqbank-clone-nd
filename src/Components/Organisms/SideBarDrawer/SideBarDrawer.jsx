import React, { useContext } from "react";
import "./SideBarDrawer.css";
import { SideBarToggleContext } from "../../../Context/SideBarToggler";
import SideBarMobileSearchBar from "../../Atoms/SideBarMobileSearchBar/SideBarMobileSearchBar";
import SideNavigationBar from "../../Molecules/SideNavigationBar/SideNavigationBar";

function SideBarDrawer() {
  const { toggle } = useContext(SideBarToggleContext);

  let drawerClass = "side-bar-drawer";
  if (toggle) {
    drawerClass = "side-bar-drawer open";
  }
  console.log(toggle);
  return (
    <>
      <div className={drawerClass}>
        <SideBarMobileSearchBar />
        <SideNavigationBar/>
      </div>
    </>
  );
}

export default SideBarDrawer;
