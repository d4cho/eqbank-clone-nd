import React, { useContext } from "react";
import "./SideBarDrawer.css";
import { MainContext } from "../../../Context/MainContext";
import SideNavigationBar from "../../Molecules/SideNavigationBar/SideNavigationBar";
import Backdrop from "../Backdrop/Backdrop";
import { navInfo } from "../../../Data/NavbarLabel";


function SideBarDrawer({ sideBarMobileSearchBar }) {
    const { toggle, setToggle } = useContext(MainContext);

    const backdropHandler = () => {
        setToggle(false);
    };

    let drawerClass = 'side-bar-drawer';
    let backDrop;
    if (toggle) {
        drawerClass = 'side-bar-drawer open';
        backDrop = <Backdrop backdropHandler={backdropHandler} />;
    }
    return (
        <>
            <div className={drawerClass}>
                {sideBarMobileSearchBar}
                <SideNavigationBar navInfo={navInfo} backgroundColor='#fafafa' color='#c33991' />
                {backDrop}
            </div>
        </>
    );
}

export default SideBarDrawer;
