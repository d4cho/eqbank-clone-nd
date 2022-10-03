import { useState, createContext } from "react";

export const OpeningAccountNavbarTogglerContext = createContext();

function  OpeningAccountNavbarTogglerContextProvider(props) {
  const [openCloseMenu, setOpenCloseMenu] = useState(false);

  const openCloseMenuToggler = () =>{
    setOpenCloseMenu(!openCloseMenu)
  }

  return (
    <OpeningAccountNavbarTogglerContext.Provider value={{openCloseMenu, openCloseMenuToggler}}>
      {props.children}
    </OpeningAccountNavbarTogglerContext.Provider>
  );
}
export default  OpeningAccountNavbarTogglerContextProvider;