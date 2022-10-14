import React, { useState} from 'react';
import './ProductCardsContent.css';
import ProductCard from '../../Atoms/ProductCard/ProductCard';
import { bankingThatEarnsCardData } from '../../../Data/Data';
import { investmentsThatGrowCardData } from '../../../Data/Data';
import { aSmartWayToPayData } from '../../../Data/Data';
import { mortgageThatsWorthItData } from '../../../Data/Data';
import SideStickyNavBar from '../../Molecules/SideStickyNavBar/SideStickyNavBar';

function ProductCardContent({ productCardTypes }) {
    const [title, setTitle] = useState('Banking that earns');

    const switchTitles = (title) => {
        switch (title) {
            case 'Banking that earns':
                setTitle('Banking that earns');
                break;
            case 'Investments that grow':
                setTitle('Investments that grow');
                break;
            case 'A smart way to pay':
                setTitle('A smart way to pay');
                break;
            case "A mortgage that's worth it":
                setTitle("A mortgage that's worth it");
                break;
            default:
                setTitle('Banking that earns');
        }
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
                <h3 className='product-cards-subtitle'>
                    {' '}
                    {productCardTypes.filter((name) => {
                        return name === 'Banking that earns';
                    })}
                </h3>
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
                <h3 className='product-cards-subtitle'>
                    {productCardTypes.filter((name) => {
                        return name === 'Investments that grow';
                    })}
                </h3>
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
                <h3 className='product-cards-subtitle'>
                    {' '}
                    {productCardTypes.filter((name) => {
                        return name === 'A smart way to pay';
                    })}
                </h3>
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
                ;
                <h3 className='product-cards-subtitle'>
                    {' '}
                    {productCardTypes.filter((name) => {
                        return name === "A mortgage that's worth it";
                    })}
                </h3>
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
                    productCardTypes={productCardTypes}
                    switchTitles={switchTitles}
                />

                <div className='product-cards-wrapper'>
                    <div className='product-cards-section'>{renderSelectedView(title)}</div>
                </div>
            </div>
        </>
    );
}

export default ProductCardContent;
