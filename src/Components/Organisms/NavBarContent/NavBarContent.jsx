import React, { useContext } from 'react';
import './NavBarContent.css';

import { MainContext } from '../../../Context/MainContext';

function NavBarContent({
    LeftNavigationBar,
    RightNavigationBar,
    NavBarDropdownContent,
    MiniCardsContent,
    SideBarDrawer,
    EQBankLogo,
    SlideIn,
    link
}) {
    const { toggle, sideBarToggle } = useContext(MainContext);
  
    return (
        <>
            <div className='parent-container'>
                <div className='inner-container'>
                    <div className='join-now-container'>
                       {link}
                        <span
                            onClick={sideBarToggle}
                            className={toggle ? 'x-button' : 'menu-button'}
                        >
                            <span className='menu-icon' data-parent-container-toggle-icon=''></span>
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            gap: '80px',
                        }}
                    >
                       {RightNavigationBar}
                        {LeftNavigationBar}
                    </div>

                  {EQBankLogo}
                </div>
               {SlideIn}
            </div>
            {NavBarDropdownContent}
            {MiniCardsContent}
           {SideBarDrawer}
        </>
    );
}

export default NavBarContent;
