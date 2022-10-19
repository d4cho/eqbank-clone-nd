import React from 'react';
import './ProductCard.css';
import Button from '../Link/Link';

function ProductCard({ image, title, subTitle, listItems, width, Label }) {
    return (
        <div style={{ minWidth: width }} className='product-card'>
            <div className='product-card-header-container'>
                <img src={image} alt='' style={{ height: '40px', width: '40px' }} />
                <h4>{title}</h4>
            </div>

            <div>
                <strong>
                    <p style={{ fontSize: '1.2rem' }}>{subTitle}</p>
                </strong>
            </div>

            <ul className='product-card-list' >
                {listItems.map((item, idx) => {
                    return (
                        <>
                            <li
                                key={idx}
                                style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
                            >
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin-black.svg'
                                    alt=''
                                    style={{ height: '1.5rem', width: '1.5rem' }}
                                />
                                {item}{' '}
                            </li>
                        </>
                    );
                })}
            </ul>
            <div className='product-card-button-container'>
                {!Label ? (
                    <Button
                        Label='Learn more'
                        backgroundColor='#c33991'
                        paddingTop='16px'
                        paddingBottom='18px'
                        paddingLeft='32px'
                        paddingRight='32px'
                        href='/'
                    />
                ) : (
                    <>
                        <Button
                            Label={Label}
                            backgroundColor='#c33991'
                            paddingTop='16px'
                            paddingBottom='18px'
                            paddingLeft='32px'
                            paddingRight='32px'
                            href='/'
                        />
                        <Button
                            paddingTop='16px'
                            paddingBottom='18px'
                            Label='Learn more'
                            backgroundColor='white'
                            textColor='black'
                            borderColor='1px solid black'
                            paddingLeft='32px'
                            paddingRight='32px'
                            href='/'
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
