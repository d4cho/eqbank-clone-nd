import React, { useContext } from 'react';
import './LeftNavigationBar.css';
import { leftNavigationContext } from '../../../Context/LeftNavigationBarContext';
import { SearchBarContext } from '../../../Context/SearchBarContext';
import { leftNavbarLabels } from '../../../Data/NavbarLabel';
function LeftNavigationBar() {
    const { menuTitle, setMenuTitle, open, setOpen } = useContext(leftNavigationContext);

    const { handleShow } = useContext(SearchBarContext);

    const leftNavBarSwitchLabel = (menuTitle) => {
        switch (menuTitle) {
            case 'Personal Banking':
                setMenuTitle('Personal Banking');
                setOpen(!open);
                break;
            case 'About us':
                setMenuTitle('About us');
                setOpen(!open);
                break;
            case 'Help':
                setOpen(!open);
                setMenuTitle('Help');
                break;
            default:
                setMenuTitle('Personal Banking');
        }
    };

    return (
        <>
            <div className='left-navbar-container'>
                <nav>
                    <ul className='menu-items'>
                        {leftNavbarLabels.map((leftNavItem, idx) => (
                            <div key={idx}>
                                <li onClick={() => leftNavBarSwitchLabel(leftNavItem)}>
                                    <span
                                        style={
                                            menuTitle === leftNavItem && open
                                                ? { color: '#c33991' }
                                                : null
                                        }
                                        className='align-name-title'
                                    >
                                        {leftNavItem}
                                        {leftNavItem !== 'Education Centre' && (
                                            <span
                                                className={
                                                    open && menuTitle === leftNavItem
                                                        ? 'arrow-up'
                                                        : 'arrow-down'
                                                }
                                            />
                                        )}
                                    </span>

                                    <div
                                        className={
                                            menuTitle === leftNavItem && open ? 'active' : null
                                        }
                                    />
                                </li>
                            </div>
                        ))}
                        <li onClick={handleShow} className='search-button'>
                            {' '}
                            <span className='search-link'>
                                <span className='search-icon'></span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default LeftNavigationBar;
