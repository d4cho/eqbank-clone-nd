import { useState, createContext } from "react";

export const SubMenuContext = createContext();

function SubMenuContextProvider(props) {
  const [subMenuTitle, setSubMenuTitle] = useState("Everyday Banking");

  return (
    <SubMenuContext.Provider
      value={{
        subMenuTitle,
        setSubMenuTitle,
      }}
    >
      {props.children}
    </SubMenuContext.Provider>
  );
}
export default SubMenuContextProvider;
