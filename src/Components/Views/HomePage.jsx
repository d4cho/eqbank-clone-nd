import React, { useContext } from 'react';
import ProductCardContent from '../Organisms/ProductCardsContent/ProductCardsContent';
import { productCardTypes } from '../../Data/CardsData';
import NavBarContent from '../Organisms/NavBarContent/NavBarContent';
import LeftNavigationBar from '../Molecules/LeftNavigationBar/LeftNavigationBar';
import RightNavigationBar from '../Molecules/RightNavigationBar/RightNavigationBar';
import NavBarDropdownContent from '../Molecules/NavBarDropDownContent/NavBarDropDownContent';
import MiniCardsContent from '../Molecules/MiniCardsContent/MiniCardsContent';
import SideBarDrawer from '../Organisms/SideBarDrawer/SideBarDrawer';
import Logo from '../Atoms/Logo/Logo';
import SlideInSearchBar from '../Molecules/SlideInSearchBar/SlideInSearchBar';
import { MainContext } from '../../Context/MainContext';
import Link from '../Atoms/Link/Link';
import SideBarMobileSearchBar from '../Atoms/SideBarSearchBar/SideBarSearchBar';

function HomePage() {
    const { show, closeShow, sideBarToggle, toggle } = useContext(MainContext);
    let slideInSearchBar = 'search-bar-wrapper';
    if (show) {
        slideInSearchBar = 'search-bar-wrapper open';
    }
    return (
        <>
            <NavBarContent
                hamburgerMenu={
                    <span onClick={sideBarToggle} className={toggle ? 'x-button' : 'menu-button'}>
                        <span className='menu-icon' data-parent-container-toggle-icon=''></span>
                    </span>
                }
                LeftNavigationBar={<LeftNavigationBar arrowUp='arrow-up' arrowDown='arrow-down' />}
                RightNavigationBar={
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
                        link={
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
                }
                NavBarDropdownContent={<NavBarDropdownContent />}
                MiniCardsContent={<MiniCardsContent />}
                SideBarDrawer={
                    <SideBarDrawer sideBarMobileSearchBar={<SideBarMobileSearchBar />} />
                }
                EQBankLogo={<Logo height='49px' width='114px' />}
                SlideIn={
                    <SlideInSearchBar slideInSearchBar={slideInSearchBar} closeShow={closeShow} />
                }
                link={
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
            <ProductCardContent productCardTypes={productCardTypes} />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: '40px',
                    marginBottom: '40px',
                }}
            >
                <Link
                    paddingTop='10px'
                    paddingBottom='10px'
                    Label='Get Started'
                    paddingLeft='10px'
                    paddingRight='10px'
                    href='/welcome'
                />
            </div>
        </>
    );
}

export default HomePage;
