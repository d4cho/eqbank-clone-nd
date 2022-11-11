import React, { useContext } from 'react';
import './NavBarContent.css';
import Link from '../../Atoms/Link/Link';
import LeftNavigationBar from '../../Molecules/LeftNavigationBar/LeftNavigationBar';
import RightNavigationBar from '../../Molecules/RightNavigationBar/RightNavigationBar';
import { MainContext } from '../../../Context/MainContext';
import SearchBar from '../../Atoms/SlideInSearchBar/SlideInSearchBar';
import NavBarDropdownContent from '../../Molecules/NavBarDropDownContent/NavBarDropDownContent';
import MiniCardsContent from '../../Molecules/MiniCardsContent/MiniCardsContent';
import SideBarDrawer from '../SideBarDrawer/SideBarDrawer';
import EQBankLogo from '../../Atoms/EQBankLogo/EQBankLogo';

function NavBarContent() {
    const { show, closeShow, toggle, sideBarToggle } = useContext(MainContext);
    let slideInSearchBar = 'search-bar-wrapper';
    if (show) {
        slideInSearchBar = 'search-bar-wrapper open';
    }
    return (
        <>
            <div className='parent-container'>
                <div className='inner-container'>
                    <div className='join-now-container'>
                        <Link
                            paddingTop='10px'
                            paddingBottom='10px'
                            Label='Join now'
                            paddingLeft='10px'
                            paddingRight='10px'
                        />
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
                        <RightNavigationBar
                            image={
                                <img
                                    className='contact-us-img'
                                    src='https://www.eqbank.ca/images/default-source/svgs/eqbank_phone-grey.svg?sfvrsn=2ed0b9d3_6'
                                    alt=''
                                />
                            }
                            lang=' FR'
                            signIn=' Sign in'
                            button={
                                <Link
                                    paddingTop='10px'
                                    paddingBottom='10px'
                                    Label='Join now'
                                    paddingLeft='10px'
                                    paddingRight='10px'
                                    href='/'
                                />
                            }
                        />
                        <LeftNavigationBar />
                    </div>

                    <EQBankLogo height='49px' width='114px' />
                </div>
                <div className={slideInSearchBar}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <SearchBar />
                        <span className='search-close-button'>
                            <img
                                onClick={closeShow}
                                src='https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg'
                                alt=''
                            />
                        </span>
                        <button className='Go-button'>Go</button>
                    </div>
                </div>
            </div>
            <NavBarDropdownContent />
            <MiniCardsContent />
            <SideBarDrawer />
        </>
    );
}

export default NavBarContent;
