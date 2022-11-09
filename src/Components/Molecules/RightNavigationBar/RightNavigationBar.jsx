import React from 'react';
import './RightNavigationBar.css';


function RightNavigationBar({ image, signIn, lang, button }) {
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
                {button}
            </div>
        </>
    );
}

export default RightNavigationBar;
