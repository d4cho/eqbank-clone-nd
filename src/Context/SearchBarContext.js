import { useState, createContext } from "react";

export const SearchBarContext = createContext();

function SearchBarContextProvider(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  }
  const closeShow = () => {
      setShow(false);
  }

  return (
    <SearchBarContext.Provider value={{show,handleShow,closeShow}}>
      {props.children}
    </SearchBarContext.Provider>
  );
}
export default SearchBarContextProvider;
