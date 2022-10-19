import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardContent from '../Organisms/ProductCardsContent/ProductCardsContent';
import Button from '../Atoms/Link/Link';
import { productCardTypes } from '../../Data/CardsData';

function HomePage() {
 
    return (
        <>
            <ProductCardContent productCardTypes={productCardTypes} />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: '40px',
                    marginBottom: '40px',
                }}
            >
                <Link to='/welcome'>
                    <Button
                        paddingTop='10px'
                        paddingBottom='10px'
                        Label='Get Started'
                        paddingLeft='10px'
                        paddingRight='10px'
                    />
                </Link>
            </div>
        </>
    );
}

export default HomePage;
