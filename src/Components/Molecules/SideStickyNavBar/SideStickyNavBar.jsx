import React from 'react';
import './SideStickyNavBar.css';

function SideStickyNavBar({title,bankingThatEarns,investmentsThatGrow,aSmartWayToPay,aMortgageThatsWorthIt}) {
    return (
        <div className='product-cards-nav-sticky'>
            <ul className='product-cards-nav-list'>
                <h3>I want...</h3>
                <li
                    className='product-cards-nav-item'
                    onClick={bankingThatEarns}
                    style={{
                        paddingBottom: '10px',
                        color: title === 'Banking that earns' ? '#c33991' : null,
                    }}
                >
                    Banking that earns
                    {title === 'Banking that earns' ? (
                        <img
                            src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                            alt=''
                            srcset=''
                            style={{ height: '20px' }}
                        />
                    ) : null}
                </li>{' '}
                <li
                    className='product-cards-nav-item'
                    onClick={investmentsThatGrow}
                    style={{
                        paddingBottom: '10px',
                        color: title === 'Investments that grow' ? '#c33991' : null,
                    }}
                >
                    Investments that grow
                    {title === 'Investments that grow' ? (
                        <img
                            src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                            alt=''
                            srcset=''
                            style={{ height: '20px' }}
                        />
                    ) : null}
                </li>
                <li
                    onClick={aSmartWayToPay}
                    className='product-cards-nav-item'
                    style={{
                        paddingBottom: '10px',
                        color: title === 'A smart way to pay' ? '#c33991' : null,
                    }}
                >
                    A smart way to pay
                    {title === 'A smart way to pay' ? (
                        <img
                            src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                            alt=''
                            srcset=''
                            style={{ height: '20px' }}
                        />
                    ) : null}
                </li>{' '}
                <li
                    onClick={aMortgageThatsWorthIt}
                    className='product-cards-nav-item'
                    style={{
                        paddingBottom: '10px',
                        color: title === "A mortgage that's worth it" ? '#c33991' : null,
                    }}
                >
                    A mortage that's worth it
                    {title === "A mortgage that's worth it" ? (
                        <img
                            src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                            alt=''
                            srcset=''
                            style={{ height: '20px' }}
                        />
                    ) : null}
                </li>
            </ul>
        </div>
    );
}

export default SideStickyNavBar;
