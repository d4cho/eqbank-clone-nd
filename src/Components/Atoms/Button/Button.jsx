import React from 'react';
import './Button.css';

function Button({
    width,
    paddingTop,
    paddingBottom,
    label,
    backgroundColor,
    textColor,
    borderColor,
    paddingLeft,
    paddingRight,
    href,
}) {
    return (
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
            <span>{label}</span>
        </a>
    );
}

export default Button;
