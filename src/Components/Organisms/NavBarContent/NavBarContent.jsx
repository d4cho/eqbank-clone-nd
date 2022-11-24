import React from 'react';
import './NavBarContent.css';


function NavBarContent({
    LeftNavigationBar,
    RightNavigationBar,
    NavBarDropdownContent,
    MiniCardsContent,
    SideBarDrawer,
    EQBankLogo,
    SlideIn,
    link,
    hamburgerMenu,
}) {

    return (
        <>
            <div className='parent-container'>
                <div className='inner-container'>
                    <div className='join-now-container'>
                        {link}
                      {hamburgerMenu}
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
