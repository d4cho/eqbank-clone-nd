import React, { useState } from 'react';
import './SideNavigationBar.css';
import Link from '../../Atoms/Link/Link';
import SocialButton from '../../Atoms/SocialLink/SocialLink';
import { everyDayBankingSideBarNavbarLabels } from '../../../Data/NavbarLabel';
import { investmentsSideBarNavbarLabels } from '../../../Data/NavbarLabel';
import { paymentsSideBarNavbarLabels } from '../../../Data/NavbarLabel';
import { borrowingSideBarNavbarLabels } from '../../../Data/NavbarLabel';
import { aboutUsSideBarNavbarLabels } from '../../../Data/NavbarLabel';
import { helpUsSideBarNavbarLabels } from '../../../Data/NavbarLabel';

function SideNavigationBar() {
    const [personalBankingBar, setPersonalBankingBar] = useState(false);
    const [aboutUsBar, setAboutUsBar] = useState(false);
    const [helpBar, setHelpBar] = useState(false);

    const personalBankingHandleBar = () => {
        setPersonalBankingBar(!personalBankingBar);
        setAboutUsBar(false);
        setHelpBar(false);
    };

    const aboutUshandleBar = () => {
        setAboutUsBar(!aboutUsBar);
        setHelpBar(false);
        setPersonalBankingBar(false);
    };

    const helpHandleBar = () => {
        setHelpBar(!helpBar);
        setPersonalBankingBar(false);
        setAboutUsBar(false);
    };

    return (
        <>
            <div>
                <nav>
                    <ul className='nav-list'>
                        <div style={{ padding: '25px 20px 25px 20px' }}>
                            <li className='list-item'>
                                <a href='/'>Sign in</a>
                            </li>
                        </div>
                        <hr />

                        <li onClick={personalBankingHandleBar} className='list-item'>
                            <div style={{ padding: '25px 20px 25px 20px' }}>
                                <a href='/'>Personal Banking</a>
                                <span className='toggle-button'>
                                    <img
                                        src={
                                            personalBankingBar
                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                        }
                                        className='toggle-button-arrow '
                                        alt=''
                                    />
                                </span>
                            </div>

                            {personalBankingBar === false && <hr />}

                            {/* add the content here */}
                            {personalBankingBar && (
                                <div style={{ backgroundColor: '#fafafa' }}>
                                    <ul className='personal-secondary-nav-list'>
                                        <li>
                                            <a href='/'>Everyday Banking</a>

                                            <ul className='inner-sub-list'>
                                                {everyDayBankingSideBarNavbarLabels.map(
                                                    (everDayItem, idx) => (
                                                        <>
                                                            <li key={idx}>{everDayItem}</li>
                                                        </>
                                                    )
                                                )}
                                            </ul>
                                        </li>

                                        <li>
                                            {' '}
                                            <a href='/'>Investments</a>
                                            <ul className='inner-sub-list'>
                                                {investmentsSideBarNavbarLabels.map(
                                                    (investmentsItem, idx) => (
                                                        <>
                                                            <li key={idx}>{investmentsItem}</li>
                                                        </>
                                                    )
                                                )}
                                            </ul>
                                        </li>

                                        <li>
                                            <a href='/'>Payments</a>
                                            <ul className='inner-sub-list'>
                                                {paymentsSideBarNavbarLabels.map(
                                                    (paymentsItem, idx) => (
                                                        <>
                                                            <li key={idx}>{paymentsItem}</li>
                                                        </>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                        <li>
                                            {' '}
                                            <a href='/'>Borrowing</a>
                                            <ul className='inner-sub-list'>
                                                {borrowingSideBarNavbarLabels.map(
                                                    (borrowingItem, idx) => (
                                                        <>
                                                            <li key={idx}>{borrowingItem}</li>
                                                        </>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <div>
                            <li
                                style={{ padding: '25px 20px 25px 20px' }}
                                onClick={aboutUshandleBar}
                                className='list-item'
                            >
                                <a href='/'>About Us</a>
                                <span className='toggle-button'>
                                    <img
                                        src={
                                            aboutUsBar
                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                        }
                                        className='toggle-button-arrow '
                                        alt=''
                                    />
                                </span>
                            </li>

                            {aboutUsBar && (
                                <div>
                                    <ul className='about-us-secondary-list'>
                                        {aboutUsSideBarNavbarLabels.map((aboutUSItem, idx) => (
                                            <>
                                                <li key={idx}>{aboutUSItem}</li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {aboutUsBar === false && <hr />}

                        <div style={{ padding: '25px 20px 25px 20px' }}>
                            <li className='list-item'>
                                <a href='/'>Education Center</a>
                            </li>
                        </div>

                        <hr />

                        <div style={{ padding: '25px 20px 25px 20px' }}>
                            <li onClick={helpHandleBar} className='list-item'>
                                <a href='/'>Help</a>
                                <span className='toggle-button'>
                                    <img
                                        src={
                                            helpBar
                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                        }
                                        className='toggle-button-arrow '
                                        alt=''
                                    />
                                </span>
                            </li>
                        </div>

                        {helpBar && (
                            <div style={{ backgroundColor: '#fafafa' }}>
                                <ul className='help-us-secondary-list'>
                                    {helpUsSideBarNavbarLabels.map((helpUSItem, idx) => (
                                        <>
                                            <li key={idx}>
                                                <a className='help-list-items' href='/'>
                                                    {helpUSItem}
                                                </a>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </ul>
                </nav>

                <div className='contact-us-wrapper'>
                    <a className='contact-us' href='/'>
                        Contact us
                    </a>
                </div>

                <div className='language-wrapper'>
                    <a className='language' href='/'>
                        Français
                    </a>
                </div>

                <div className='blocker-content'>
                    <div className='block-content-join-now'>
                        <Link
                            width='11.25rem'
                            paddingTop='13px'
                            paddingBottom='13px'
                            Label='Join now'
                            href='/'
                        />
                    </div>

                    <div className='blocker-content-apple-google-buttons'>
                        <SocialButton img='https://www.eqbank.ca/images/default-source/svgs/download_on_the_app_store_badge.svg?sfvrsn=fe69bfd3_14' />
                        <SocialButton img='https://www.eqbank.ca/images/default-source/svgs/get_it_on_google_play.svg?sfvrsn=fb69bfd3_30' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNavigationBar;
