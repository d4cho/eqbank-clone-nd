import { useState, createContext } from "react";

export const FormContext = createContext();

function FormContextProvider(props) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <FormContext.Provider
      value={{
        values,
        handleFirstNameInputChange,
        handleLastNameInputChange,
        handleEmailInputChange,
        setValues
       
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContextProvider;
