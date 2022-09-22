import { useState, createContext } from "react";

export const SubMenuContext = createContext();

function SubMenuContextProvider(props) {
  const [subMenuTitle, setSubMenuTitle] = useState("Everyday Banking");

  const everydayBankingClick = () => {
    setSubMenuTitle("Everyday Banking");
  };

  const investementsClick = () => {
    setSubMenuTitle("Investments");
  };

  const paymentsClick = () => {
    setSubMenuTitle("Payments");
  };
  const borrowingClick = () => {
    setSubMenuTitle("Borrowing");
  };

  return (
    <SubMenuContext.Provider
      value={{
        subMenuTitle,
        setSubMenuTitle,
        everydayBankingClick,
        investementsClick,
        paymentsClick,
        borrowingClick,
      }}
    >
      {props.children}
    </SubMenuContext.Provider>
  );
}
export default SubMenuContextProvider;
