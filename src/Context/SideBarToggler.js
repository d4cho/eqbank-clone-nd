import { useState, createContext } from "react";

export const SideBarToggleContext = createContext();

function  SideBarToggleContextProvider(props) {
  const [toggle, setToggle] = useState(false);

  const sideBarToggle  = () =>{
     setToggle(!toggle)
  }

  return (
    <SideBarToggleContext.Provider value={{toggle,sideBarToggle, setToggle}}>
      {props.children}
    </SideBarToggleContext.Provider>
  );
}
export default  SideBarToggleContextProvider;