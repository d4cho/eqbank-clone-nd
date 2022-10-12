import React, { useContext, useState, useEffect } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import { StepperContext } from "../../Context/StepperContext";
import TextField from "../Atoms/TextField/TextField";
import FormSubmissionButton from "../Atoms/FromSubmissionButton/FormSubmissionButton";
import SelectField from "../Atoms/SelectField/SelectField";
import {provincesData} from "../../Data/Provinces"

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
        mainHeader={<h2>Tell us about you</h2>}
        form={
          <form action="" onSubmit={handleSubmit}>
            <div className="text-field-container">
              <label style={{fontSize:'0.8rem', fontWeight:'600'}}  htmlFor="">Street Address</label>
              <TextField width={matches ? "27rem" : null} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column",gap: "10px", marginTop:'10px'   }}>
                <label style={{fontSize:'0.8rem',  fontWeight:'600'}} htmlFor="">Address Line 2(optional)</label>
                <TextField width={matches ? "12.78rem" : "20.78rem"} />
              </div>
              <div style={{ display: "flex", flexDirection: "column",gap: "10px", marginTop:'10px'  }}>
                <label style={{fontSize:'0.8rem',  fontWeight:'600'}}  htmlFor="">City</label>
                <TextField width={matches ? "12.78rem" : "20.78rem"} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column",gap: "10px", marginTop:'10px'   }}>
                <label style={{fontSize:'0.8rem',  fontWeight:'600'}}  htmlFor="">Province</label>
                <SelectField width={matches ? "13.78rem" : "20.78rem"}  provincesData = {provincesData}/>
              </div>
              <div style={{ display: "flex", flexDirection: "column",gap: "10px", marginTop:'10px'   }}>
                <label style={{fontSize:'0.8rem',  fontWeight:'600'}}  htmlFor="">Postal Code</label>
                <TextField width={matches ? "12.78rem" : "20.78rem"} />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <FormSubmissionButton
                width="170px"
                Label="Confirm Address"
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
