import React from 'react';
import './RightNavigationBar.css';


function RightNavigationBar({ image, signIn, lang, link }) {
    return (
        <>
            <div className='right-navigation-container'>
                {image}
                <div className='header-divider'></div>
                <a className='header-lang' href='/'>
                    {lang}
                </a>
                <div className='header-divider'></div>
                <a className='header-sign-in' href='/'>
                    {signIn}
                </a>
                {link}
            </div>
        </>
    );
}

export default RightNavigationBar;
