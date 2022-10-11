import React, { useContext, useState, useEffect } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import { StepperContext } from "../../Context/StepperContext";
import TextField from "../Atoms/TextField/TextField";
import FormSubmissionButton from "../Atoms/FormSubmissionButton";


function PersonalInformation() {
  const { activeStep, nextStep } = useContext(StepperContext);

  const handleSubmit = (event) => {
    alert(`it worked`);
    event.preventDefault();
    nextStep();
  };

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1020px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1020px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <OpeningAccountNavbarContent />
      <OpeningAccountFormContent
        stepper={<Stepper activeStep={activeStep} />}
        form={
          <form action="" onSubmit={handleSubmit}>
            <TextField width={matches ? "18.78rem" : null} />
            <div style={{ display: "flex", gap: "10px" }}>
              <FormSubmissionButton
                width="100px"
                Label="Continue"
                color="white"
              />{" "}
            </div>
          </form>
        }
      />
    </>
  );
}

export default PersonalInformation;
