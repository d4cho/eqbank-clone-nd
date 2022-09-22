import React, { useContext } from "react";
import MiniCard from "../../Atoms/MiniCard/MiniCard";
import "./MiniCardsContent.css";
import { leftNavigationContext } from "../../../Context/LeftNavigationBarContext";
import { SubMenuContext } from "../../../Context/SubMenuContext";

function MiniCardsContent() {
  const { isPersonalBankingArrow } = useContext(leftNavigationContext);
  const { subMenuTitle } = useContext(SubMenuContext);
  return (
    <>
      {isPersonalBankingArrow && subMenuTitle === "Everyday Banking" ? (
        <>
          <div className="everyday-cards-container">
            <MiniCard
              header="Saving Plus Account"
              content="Earn more without all the banking nonsense"
              link="Learn more"
            />{" "}
            <MiniCard
              header="Joint Savings Plus Account"
              content="Earn more with up to 3 other people."
              link="Learn more"
            />{" "}
            <MiniCard
              header="TFSA Savings Account"
              content="Get tax-free earnings with no fees."
              link="Learn more"
            />{" "}
            <MiniCard
              header="US Dollar Account"
              content="Earn more on US dollars with no monthly fees."
              link="Learn more"
            />
          </div>
        </>
      ) : isPersonalBankingArrow && subMenuTitle === "Investments" ? (
        <>
          <div className="investments-cards-container">
            <MiniCard
              header="GICs"
              content="Invest in registered and non-registered GICs."
              link="Learn more"
            />{" "}
            <MiniCard
              header="RSP Savings Account"
              content="Grow retirement savings the smart way."
              link="Learn more"
            />{" "}
            <MiniCard
              header="TFSA Savings Account"
              content="Get tax-free earnings with no fees."
              link="Learn more"
            />
          </div>
        </>
      ) : isPersonalBankingArrow && subMenuTitle === "Payments" ? (
        <>
          <div className="payments-cards-container">
            <MiniCard
              header="International Money Transfers"
              content="Send money abroad for less using Wise."
              link="Learn more"
            />{" "}
          </div>
        </>
      ) :isPersonalBankingArrow && subMenuTitle === "Borrowing" ? (
        <>
          <div className="borrowing-cards-container">
            <MiniCard
              header="International Money Transfers"
              content="Send money abroad for less using Wise."
              link="Learn more"
            />{" "}
          </div>
        </>
      ) : null}
    </>
  );
}

export default MiniCardsContent;
