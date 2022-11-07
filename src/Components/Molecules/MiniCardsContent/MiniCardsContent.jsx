import React, { useContext } from "react";
import MiniCard from "../../Atoms/MiniCard/MiniCard";
import "./MiniCardsContent.css";
import { leftNavigationContext } from "../../../Context/LeftNavigationBarContext";
import { SubMenuContext } from "../../../Context/SubMenuContext";
import { everydayBankingCardData } from "../../../Data/MiniCardData";
import { investmentsCardData } from '../../../Data/MiniCardData';
import { paymentsCardData } from '../../../Data/MiniCardData';
import { borrowingCardData } from '../../../Data/MiniCardData';

function MiniCardsContent() {
  console.log(everydayBankingCardData)
  const { isPersonalBankingArrow } = useContext(leftNavigationContext);
  const { subMenuTitle } = useContext(SubMenuContext);
  return (
      <>
          {isPersonalBankingArrow && subMenuTitle === 'Everyday Banking' ? (
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
          ) : isPersonalBankingArrow && subMenuTitle === 'Investments' ? (
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
          ) : isPersonalBankingArrow && subMenuTitle === 'Payments' ? (
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
          ) : isPersonalBankingArrow && subMenuTitle === 'Borrowing' ? (
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
