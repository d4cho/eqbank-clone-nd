import React, { useState } from 'react';
import './ProductCardsContent.css';
import ProductCard from '../../Atoms/ProductCard/ProductCard';
import { bankingThatEarnsCardData } from '../../../Data/CardsData';
import { investmentsThatGrowCardData } from '../../../Data/CardsData';
import { aSmartWayToPayData } from '../../../Data/CardsData';
import { mortgageThatsWorthItData } from '../../../Data/CardsData';
import SideStickyNavBar from '../../Molecules/SideStickyNavBar/SideStickyNavBar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


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

  const pagination = {clickable: true}

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
                <div style={{ width: '100%' }}>
                    <Swiper
                        slidesPerView={1.5}
                        pagination={pagination}
                        modules={[Pagination]}
                        speed={800}
                        spaceBetween={10}
                    >
                        {bankingThatEarnsCardData.map((product, idx) => (
                            <SwiperSlide>
                                <ProductCard
                                    key={idx}
                                    title={product.cardTitle}
                                    image={product.image}
                                    subTitle={product.subTitle}
                                    listItems={product.listItems}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <h3 className='product-cards-subtitle'>
                    {productCardTypes.filter((name) => {
                        return name === 'Investments that grow';
                    })}
                </h3>
                <div>
                    <Swiper
                        slidesPerView={1.5}
                        pagination={pagination}
                        modules={[Pagination]}
                        speed={800}
                        spaceBetween={10}
                    >
                        {investmentsThatGrowCardData.map((product, idx) => (
                            <SwiperSlide>
                                <ProductCard
                                    key={idx}
                                    title={product.cardTitle}
                                    image={product.image}
                                    subTitle={product.subTitle}
                                    listItems={product.listItems}
                                />
                            </SwiperSlide>
                        ))}
                        ;
                    </Swiper>
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
