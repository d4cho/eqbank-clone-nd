import React, { useContext } from 'react';
import './LeftNavigationBar.css';
import { leftNavigationContext } from '../../../Context/LeftNavigationBarContext';
import { SearchBarContext } from '../../../Context/SearchBarContext';
function LeftNavigationBar() {
    const {
        isPersonalBankingArrow,
        isAboutUsArrow,
        isOpenHelpArrow,
        menuTitle,
        openArrowPersonalBanking,
        openArrowAboutUs,
        openArrowHelpUs,
    } = useContext(leftNavigationContext);

    const { handleShow } = useContext(SearchBarContext);

    return (
        <>
            <div className='left-navbar-container'>
                <nav>
                    <ul className='menu-items'>
                        <li onClick={openArrowPersonalBanking}>
                            <span
                                style={
                                    menuTitle === 'Personal Banking' && isPersonalBankingArrow
                                        ? { color: '#c33991' }
                                        : null
                                }
                                className='align-name-title'
                            >
                                Personal Banking{' '}
                                <span
                                    className={isPersonalBankingArrow ? 'arrow-up' : 'arrow-down'}
                                />
                            </span>

                            <div
                                className={
                                    menuTitle === 'Personal Banking' && isPersonalBankingArrow
                                        ? 'active'
                                        : ''
                                }
                            />
                        </li>

                        <li onClick={openArrowAboutUs}>
                            <span
                                style={
                                    menuTitle === 'About us' && isAboutUsArrow
                                        ? { color: '#c33991' }
                                        : null
                                }
                                className='align-name-title'
                            >
                                About us
                                <span className={isAboutUsArrow ? 'arrow-up' : 'arrow-down'} />
                            </span>

                            <div
                                className={
                                    menuTitle === 'About us' && isAboutUsArrow ? 'active' : ''
                                }
                            />
                        </li>

                        <li>
                            <span className='align-name-title-no-arrow'>Education Centre</span>
                        </li>

                        <li onClick={openArrowHelpUs}>
                            <span
                                style={
                                    menuTitle === 'Help' && isOpenHelpArrow
                                        ? { color: '#c33991' }
                                        : null
                                }
                                className='align-name-title'
                            >
                                Help
                                <span className={isOpenHelpArrow ? 'arrow-up' : 'arrow-down'} />
                            </span>
                            <div
                                className={menuTitle === 'Help' && isOpenHelpArrow ? 'active' : ''}
                            />
                        </li>

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
