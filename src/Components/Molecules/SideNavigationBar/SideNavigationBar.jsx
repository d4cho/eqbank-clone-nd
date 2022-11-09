import React, { useState } from 'react';
import './SideNavigationBar.css';
import Link from '../../Atoms/Link/Link';
import SocialButton from '../../Atoms/SocialLink/SocialLink';
import { navInfo } from '../../../Data/NavbarLabel';

function SideNavigationBar() {
    const [clicked, setClicked] = useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index);
    };

    return (
        <>
            <div>
                <nav>
                    <ul className='nav-list'>
                        {navInfo.map((navItem, idx) => (
                            <div key={idx}>
                                <div style={{ padding: '25px 20px 25px 20px' }}>
                                    <li
                                        onClick={() => handleToggle(idx)}
                                        className='list-item'
                                        style={{
                                            pointerEvents:
                                                navItem.mainLabel.mainLabelName === 'Sign in' ||
                                                navItem.mainLabel.mainLabelName ===
                                                    'Education Centre' ||
                                                navItem.mainLabel.mainLabelName === 'Contact us' ||
                                                navItem.mainLabel.mainLabelName === 'Français'
                                                    ? 'none'
                                                    : '',
                                        }}
                                    >
                                        <a href='/'>{navItem.mainLabel.mainLabelName}</a>

                                        {navItem.mainLabel.mainLabelName !== 'Sign in' &&
                                            navItem.mainLabel.mainLabelName !== 'Contact us' &&
                                            navItem.mainLabel.mainLabelName !==
                                                'Education Centre' &&
                                            navItem.mainLabel.mainLabelName !== 'Français' && (
                                                <span className='toggle-button'>
                                                    <img
                                                        src={
                                                            clicked === idx
                                                                ? 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-up.svg'
                                                                : 'https://www.eqbank.ca/Sitefinity/WebsiteTemplates/EQ/App_Themes/EQ/static/images/data-uri/chevron-down.svg'
                                                        }
                                                        className='toggle-button-arrow '
                                                        alt=''
                                                    />
                                                </span>
                                            )}

                                        {clicked === idx && (
                                            <div style={{ backgroundColor: '#fafafa' }}>
                                                <ul
                                                    className={
                                                        navItem.mainLabel.mainLabelName ===
                                                        'Personal banking'
                                                            ? 'secondary-nav-list'
                                                            : 'secondary-nav-list-no-scroll'
                                                    }
                                                >
                                                    {navItem.mainLabel.subTitle?.map((name, id) => (
                                                        <li key={id}>
                                                            {name.name}
                                                            {
                                                                <ul className='inner-sub-list'>
                                                                    {name.links.map((link, id) => (
                                                                        <>
                                                                            <li key={id}>{link}</li>
                                                                        </>
                                                                    ))}
                                                                </ul>
                                                            }
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </ul>
                </nav>
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
