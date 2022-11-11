import React, { useContext } from 'react';
import './NavBarDropDownContent.css';
import { MainContext } from '../../../Context/MainContext';
import MiniCard from '../../Atoms/MiniCard/MiniCard';
import { findOutMoreCardData } from '../../../Data/MiniCardData';
import { dropdownNavbarLabels } from '../../../Data/NavbarLabel';

function NavBarDropdownContent() {
    const { menuTitle, open, subMenuTitle, setSubMenuTitle } = useContext(MainContext);

    const subMenuTitleSwitch = (subMenuTitle) => {
        switch (subMenuTitle) {
            case 'Everyday Banking':
                setSubMenuTitle('Everyday Banking');
                break;
            case 'Investments':
                setSubMenuTitle('Investments');
                break;
            case 'Payments':
                setSubMenuTitle('Payments');
                break;
            case 'Borrowing':
                setSubMenuTitle('Borrowing');
                break;
            default:
                setSubMenuTitle('Everyday Banking');
        }
    };
    return (
        <>
            {open && menuTitle === 'Personal Banking' ? (
                <>
                    <div className='link-drop-down'>
                        <h2 className='explore-products-title'>Explore products for...</h2>
                        <ul className='main-content'>
                            {dropdownNavbarLabels.map((navItem, idx) => (
                                <>
                                    <li onClick={() => subMenuTitleSwitch(navItem)} key={idx}>
                                        {navItem}
                                        <div
                                            className={subMenuTitle === navItem ? 'check-div' : ''}
                                        />
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </>
            ) : open && menuTitle === 'About us' ? (
                <div
                    className='find-out-parent-container'
                    style={
                        open
                            ? {
                                  boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2) inset',
                                  paddingTop: '10px',
                              }
                            : null
                    }
                >
                    <h1 className='find-out-more'>Find out more about...</h1>
                    <div className='find-out-cards-container'>
                        {findOutMoreCardData.map((miniCard, idx) => (
                            <MiniCard
                                key={idx}
                                header={miniCard.header}
                                content={miniCard.content}
                                link={miniCard.link}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default NavBarDropdownContent;
