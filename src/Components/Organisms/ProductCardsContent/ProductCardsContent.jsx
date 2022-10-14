import React, { useState } from 'react';
import './ProductCardsContent.css';
import ProductCard from '../../Atoms/ProductCard/ProductCard';
import { bankingThatEarnsCardData } from '../../../Data/Data';
import { investmentsThatGrowCardData } from '../../../Data/Data';
import { aSmartWayToPayData } from '../../../Data/Data';
import { mortgageThatsWorthItData } from '../../../Data/Data';
import SideStickyNavBar from '../../Molecules/SideStickyNavBar/SideStickyNavBar';

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
    // const scrollDown = () => {
    //     window.scroll({
    //         top: document.body.offsetHeight,
    //         left: 0,
    //         behavior: 'smooth',
    //     });
    // };

    // const ref = useRef(null);

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    // };

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
                        Label={product.Label}
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
                        Label={product.Label}
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
                        Label={product.Label}
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
                        Label={product.Label}
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
                        Label={product.Label}
                    />
                ));
        }
    };
    return (
        <>
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

            <div className='product-cards-desktop'>
                {/* side navigation*/}
                <SideStickyNavBar
                    title={title}
                    bankingThatEarns={bankingThatEarns}
                    investmentsThatGrow={investmentsThatGrow}
                    aSmartWayToPay={aSmartWayToPay}
                    aMortgageThatsWorthIt={aMortgageThatsWorthIt}
                />

                <div className='product-cards-wrapper'>
                    <div className='product-cards-section'>{renderSelectedView(title)}</div>
                </div>
            </div>
        </>
    );
}

export default ProductCardContent;
