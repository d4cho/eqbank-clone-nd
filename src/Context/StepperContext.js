import { useState, createContext } from "react";

export const StepperContext = createContext();

function  StepperContextProvider(props) {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () =>{
   if( activeStep < 2){
    setActiveStep((currentStep) => currentStep + 1)
   }
 }

  return (
    <StepperContext.Provider value={{activeStep,nextStep}}>
      {props.children}
    </StepperContext.Provider>
  );
}
export default  StepperContextProvider;