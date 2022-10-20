import React from 'react';
import './SocialLink.css';

function SocialLink({ img }) {
    return (
        <a href='/'>
            <img
                style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '135px',
                }}
                src={img}
                alt=''
            />
        </a>
    );
}

export default SocialLink;
