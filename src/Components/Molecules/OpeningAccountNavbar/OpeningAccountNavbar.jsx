import React from 'react';
import './OpeningAccountNavbar.css';

function OpeningAccountNavbar({ needHelp, contactUs, signIn, helpIcon, commentsIcon }) {
    return (
        <>
            <ul className='opening-Account-navbar-wrapper'>
                <li>{helpIcon}</li>
                <li className='need-help'>{needHelp}</li>
                <li>
                    <div className='header-diver' />
                </li>
                {commentsIcon}
                <li className='contact-us-opening-account'>{contactUs}</li>
                <li>
                    <a className='sign-up' href='/'>
                        {signIn}
                    </a>
                </li>
            </ul>
        </>
    );
}

export default OpeningAccountNavbar;
