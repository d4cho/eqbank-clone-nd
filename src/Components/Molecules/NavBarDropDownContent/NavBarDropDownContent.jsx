import React, { useContext } from 'react';
import './NavBarDropDownContent.css';
import { leftNavigationContext } from '../../../Context/LeftNavigationBarContext';
import { SubMenuContext } from '../../../Context/SubMenuContext';
import MiniCard from '../../Atoms/MiniCard/MiniCard';

function NavBarDropdownContent() {
    const { subMenuTitle, everydayBankingClick, investementsClick, paymentsClick, borrowingClick } =
        useContext(SubMenuContext);

    const { isPersonalBankingArrow, isAboutUsArrow } = useContext(leftNavigationContext);
    return (
        <>
            {isPersonalBankingArrow ? (
                <>
                    <div className='link-drop-down'>
                        <h2 className='explore-products-title'>Explore products for...</h2>
                        <ul className='main-content'>
                            <li onClick={everydayBankingClick}>
                                Everyday Banking{' '}
                                <div
                                    className={
                                        subMenuTitle === 'Everyday Banking' ? 'check-div' : ''
                                    }
                                />
                            </li>

                            <li onClick={investementsClick}>
                                Investments{' '}
                                <div
                                    className={subMenuTitle === 'Investments' ? 'check-div' : ''}
                                />
                            </li>

                            <li onClick={paymentsClick}>
                                Payments{' '}
                                <div className={subMenuTitle === 'Payments' ? 'check-div' : ''} />
                            </li>

                            <li onClick={borrowingClick}>
                                Borrowing{' '}
                                <div className={subMenuTitle === 'Borrowing' ? 'check-div' : ''} />
                            </li>
                        </ul>
                    </div>
                </>
            ) : isAboutUsArrow ? (
                <div
                    className='find-out-parent-container'
                    style={
                        isAboutUsArrow
                            ? {
                                  boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2) inset',
                                  paddingTop: '10px',
                              }
                            : null
                    }
                >
                    <h1 className='find-out-more'>Find out more about...</h1>
                    <div className='find-out-cards-container'>
                        <MiniCard
                            header='Our Company'
                            content="Who we are and how we're changing banking."
                            link='Learn more'
                        />{' '}
                        <MiniCard
                            header='Community'
                            content='How we support the community.'
                            link='Learn more'
                        />{' '}
                        <MiniCard
                            header='Careers'
                            content='See if EQ Bank could be the right career fit'
                            link='Learn more'
                        />{' '}
                        <MiniCard
                            header='News'
                            content='All the latest industry news about EQ Bank'
                            link='Learn more'
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default NavBarDropdownContent;
