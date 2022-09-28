const scrollDown = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
 }
export const cardsDataOne = [
    {
      id: 1,
      cardTitle:"Savings Plus Account",
      subTitle:"Earn up to 200×  more than other banks without all the nonsense.",
      image: "https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4",
      listOne:"2.00% interest",
      listTwo:"No Monthly fees or minimum balance",
      listThree:"Free bill payments",
      listFour:"Free interac e-Transfers and more"
    },
    {
      id: 2,
      image:"https://www.eqbank.ca/images/default-source/svgs/jointaccount_pink.svg?sfvrsn=b12a86d3_4",
      cardTitle:"Joint Savings Plus Account",
      subTitle:"Earn up to 200×  more than other banks without all the nonsense.",
      listOne:"2.00% interest",
      listTwo:"Easy online sign-up with zero paperwork",
      listThree:"Add up 3 people in a single click",
    },
    {
      id: 3,
      image:"https://www.eqbank.ca/images/default-source/svgs/tfsa_pink.svg?sfvrsn=bd2a86d3_10",
      cardTitle:"TFSA Savings Account",
      subTitle:"Earn up to 200×  more than other banks without all the nonsense.",
      listOne:"2.00 interest, tax free",
      listTwo:"Zero fees for bigger earnings",
      listThree:"No minimum balance",
      listFour:"No-nonsense online sign-up in minutes"
    },
    {
      id: 4,
      image:"https://www.eqbank.ca/images/default-source/svgs/usd_pink.svg?sfvrsn=892a86d3_4",
      cardTitle:"US Dollar Account",
      subTitle:"Earn up to 200×  more than other banks without all the nonsense.",
      listOne:"1.40% interest on every dollar",
      listTwo:"No monthly fees",
      listThree:"Seriously competitive exchange rate",
      listFour:"A fast, cheap way to send US dollars abroad"
      },
    ]

    export const cardsDataTwo = [
        {
          id: 1,
          image:"https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4",
          cardTitle:"GICs",
          subTitle:"Invest it and forget it with guaranteed rates on our registered and non-registred GICs.",
          listOne: <>FEATURE RATE: 4.55%<sup onClick={scrollDown}>**</sup>on a 1-year GIC</>,
          listTwo:"Invest for the short term or long term",
          listThree:"Break free of restrictions with our low minimum deposit",
          listFour:"Skip the hassle and buy a GIC in second"
        },
        {
          id: 2,
          image:"https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4",
          cardTitle:"RSP Savings Account",
          listOne:<>2.00% interest<sup onClick={scrollDown}>*</sup> on every tax-deferred dollar</>,
          listTwo:"Zero fees for bigger earnings",
          listThree:"No minimum balance or other banking nonsense",
          listFour:"Online sign-up in minutes"
        },
        {
          id: 3,
          image:"https://www.eqbank.ca/images/default-source/svgs/savings_pink.svg?sfvrsn=812a86d3_4",
          cardTitle:"TFSA Savings Account",
          subTitle:"Invest smarter with high interest and tax-free earnings",
          listOne:<>2.00% interest<sup onClick={scrollDown}>*</sup>, tax-free</>,
          listTwo:"Zero fees for bigger earnings",
          listThree:"No minimum balance",
          listFour:"No-nonsense online sign-up in minutes"
        },
        ]