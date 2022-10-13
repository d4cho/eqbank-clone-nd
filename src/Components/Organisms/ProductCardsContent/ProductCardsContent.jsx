import React, { useState, useRef } from 'react';
import './ProductCardsContent.css';
import ProductCard from '../../Atoms/ProductCard/ProductCard';
import { bankingThatEarnsCardData } from '../../../Data/Data';
import { investmentsThatGrowCardData } from '../../../Data/Data';
import { aSmartWayToPayData } from '../../../Data/Data';
import { mortgageThatsWorthItData } from '../../../Data/Data';

function ProductCardContent() {
    const [title, setTitle] = useState('Banking that earns');

    const bankingThatEarns = () => {
        setTitle('Banking that earns');
    };

    const investmentsThatGrow = () => {
        setTitle('Investments that grow');
    };

    const aSmartWayToPay = () => {
        setTitle('A smart way to pay');
    };
    const aMortgageThatsWorthIt = () => {
        setTitle("A mortgage that's worth it");
    };

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const renderSelectedView = (title) => {
        switch (title) {
            case 'Banking that earns':
                return bankingThatEarnsCardData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ));

            case 'Investments that grow':
                return investmentsThatGrowCardData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ));

            case 'A smart way to pay':
                return aSmartWayToPayData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ));

            case "A mortgage that's worth it":
                return mortgageThatsWorthItData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ));
            default:
                return bankingThatEarnsCardData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ));
        }
    };
    return (
        <>
            {/* mobile */}
            <div className='product-cards-mobile'>
                <h2 className='product-cards-title'>I want…</h2>
                <h3 className='product-cards-subtitle'>Banking that earns</h3>
                <div className='product-cards-container'>
                    {bankingThatEarnsCardData.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            title={product.cardTitle}
                            image={product.image}
                            subTitle={product.subTitle}
                            listItems={product.listItems}
                            width='70%'
                        />
                    ))}
                </div>
                <h3 className='product-cards-subtitle'>Investment that grow</h3>
                <div className='product-cards-container'>
                    {investmentsThatGrowCardData.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            title={product.cardTitle}
                            image={product.image}
                            subTitle={product.subTitle}
                            listItems={product.listItems}
                            width='70%'
                        />
                    ))}
                    ;
                </div>
                <h3 className='product-cards-subtitle'> A Smart way to pay</h3>
                {aSmartWayToPayData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ))}
                ;<h3 className='product-cards-subtitle'>A mortgage that’s worth it</h3>
                {mortgageThatsWorthItData.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.cardTitle}
                        image={product.image}
                        subTitle={product.subTitle}
                        listItems={product.listItems}
                        width='70%'
                    />
                ))}
                ;
            </div>

            {/* desktop */}
            <div className='product-cards-desktop'>
                {/* side navigation this can be a molecule */}
                <div className='product-cards-nav-sticky'>
                    <ul className='product-cards-nav-list'>
                        <h3>I want...</h3>
                        <div onClick={bankingThatEarns} className='product-cards-nav-item'>
                            <li
                                onClick={handleClick}
                                style={{
                                    paddingBottom: '10px',
                                    color: title === 'Banking that earns' ? '#c33991' : null,
                                }}
                            >
                                Banking that earns
                            </li>{' '}
                            {title === 'Banking that earns' ? (
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                                    alt=''
                                    srcset=''
                                    style={{ height: '20px' }}
                                />
                            ) : null}
                        </div>
                        <div onClick={investmentsThatGrow} className='product-cards-nav-item'>
                            <li
                                style={{
                                    paddingBottom: '10px',
                                    color: title === 'Investments that grow' ? '#c33991' : null,
                                }}
                            >
                                Investments that grow
                            </li>
                            {title === 'Investments that grow' ? (
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                                    alt=''
                                    srcset=''
                                    style={{ height: '20px' }}
                                />
                            ) : null}
                        </div>
                        <div onClick={aSmartWayToPay} className='product-cards-nav-item'>
                            <li
                                style={{
                                    paddingBottom: '10px',
                                    color: title === 'A smart way to pay' ? '#c33991' : null,
                                }}
                            >
                                A smart way to pay
                            </li>
                            {title === 'A smart way to pay' ? (
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                                    alt=''
                                    srcset=''
                                    style={{ height: '20px' }}
                                />
                            ) : null}
                        </div>
                        <div onClick={aMortgageThatsWorthIt} className='product-cards-nav-item'>
                            {' '}
                            <li
                                style={{
                                    paddingBottom: '10px',
                                    color:
                                        title === "A mortgage that's worth it" ? '#c33991' : null,
                                }}
                            >
                                A mortage that's worth it
                            </li>
                            {title === "A mortgage that's worth it" ? (
                                <img
                                    src='https://www.eqbank.ca/Assets/dist/images/arrow-right-thin.svg'
                                    alt=''
                                    srcset=''
                                    style={{ height: '20px' }}
                                />
                            ) : null}
                        </div>
                    </ul>
                </div>

                <div className='product-cards-wrapper'>
                    <div className='product-cards-section'>{renderSelectedView(title)}</div>
                </div>
            </div>
        </>
    );
}

export default ProductCardContent;
