import React, { useContext } from 'react';
import MiniCard from '../../Atoms/MiniCard/MiniCard';
import './MiniCardsContent.css';
import { MainContext } from '../../../Context/MainContext';
import { everydayBankingCardData } from '../../../Data/MiniCardData';
import { investmentsCardData } from '../../../Data/MiniCardData';
import { paymentsCardData } from '../../../Data/MiniCardData';
import { borrowingCardData } from '../../../Data/MiniCardData';

function MiniCardsContent() {
    const { open, menuTitle, subMenuTitle } = useContext(MainContext);
    return (
        <>
            {open && subMenuTitle === 'Everyday Banking' && menuTitle === 'Personal Banking' ? (
                <>
                    <div className='everyday-cards-container'>
                        {everydayBankingCardData.map((miniCard, idx) => (
                            <MiniCard
                                key={idx}
                                header={miniCard.header}
                                content={miniCard.content}
                                link={miniCard.link}
                            />
                        ))}
                    </div>
                </>
            ) : open && subMenuTitle === 'Investments' && menuTitle === 'Personal Banking' ? (
                <>
                    <div className='investments-cards-container'>
                        {investmentsCardData.map((miniCard, idx) => (
                            <MiniCard
                                key={idx}
                                header={miniCard.header}
                                content={miniCard.content}
                                link={miniCard.link}
                            />
                        ))}
                    </div>
                </>
            ) : open && subMenuTitle === 'Payments' && menuTitle === 'Personal Banking' ? (
                <>
                    <div className='payments-cards-container'>
                        {paymentsCardData.map((miniCard, idx) => (
                            <MiniCard
                                key={idx}
                                header={miniCard.header}
                                content={miniCard.content}
                                link={miniCard.link}
                            />
                        ))}
                    </div>
                </>
            ) : open && subMenuTitle === 'Borrowing' && menuTitle === 'Personal Banking' ? (
                <>
                    <div className='borrowing-cards-container'>
                        {borrowingCardData.map((miniCard, idx) => (
                            <MiniCard
                                key={idx}
                                header={miniCard.header}
                                content={miniCard.content}
                                link={miniCard.link}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </>
    );
}

export default MiniCardsContent;
