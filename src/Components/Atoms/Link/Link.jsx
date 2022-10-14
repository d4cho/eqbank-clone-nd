import React from 'react';
import './Link.css';

function Link({
    width,
    paddingTop,
    paddingBottom,
    Label,
    backgroundColor,
    textColor,
    borderColor,
    paddingLeft,
    paddingRight,
    href,
}) {
    return (
        <>
            <a
                style={{
                    minWidth: width,
                    paddingBottom: paddingBottom,
                    paddingTop: paddingTop,
                    backgroundColor: backgroundColor,
                    color: textColor,
                    border: borderColor,
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight,
                }}
                className='main-button'
                href={href}
            >
                <span>{Label}</span>
            </a>
        </>
    );
}

export default Link;
