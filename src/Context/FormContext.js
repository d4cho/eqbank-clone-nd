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
    console.log(values);
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
    console.log(values);
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
    console.log(values);
  };

  return (
    <FormContext.Provider
      value={{
        values,
        handleFirstNameInputChange,
        handleLastNameInputChange,
        handleEmailInputChange,
       
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContextProvider;
