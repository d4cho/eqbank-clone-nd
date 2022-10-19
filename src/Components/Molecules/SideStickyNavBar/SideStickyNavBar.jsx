import React from 'react';
import './SideStickyNavBar.css';

function SideStickyNavBar({ title, productCardTypes, switchTitles }) {
    return (
        <div className='product-cards-nav-sticky'>
            <ul className='product-cards-nav-list'>
                <h3>I want...</h3>
                {productCardTypes.map((productCardType, idx) => {
                    return (
                        <li
                            className='product-cards-nav-item'
                            style={title === productCardType ? { color: '#c33991' } : null}
                            onClick={() => switchTitles(productCardType)}
                            key={idx}
                        >
                            {productCardType}
                            {title === productCardType ? (
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                                    alt=''
                                    style={{ height: '20px' }}
                                />
                            ) : null}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideStickyNavBar;
