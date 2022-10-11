import React from "react";
import "./Stepper.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Stepper(props) {
  const activeStep = props.activeStep;

  return (
    <>
      <div className="create-profile">
        {activeStep === 0 ? (
          <>
            <p>Step 1 - Create a profile</p>
          </>
        ) : activeStep === 1 ? (
          <>
            <p>Step 2 - Verify Identity</p>
          </>
        ) : activeStep === 2 ? (
          <>
            <p>Step 3 - Final</p>
          </>
        ) :   <>
        <p>Step 1 - Create a profile</p>
      </>}
        <ChevronRightIcon />
      </div>

      <div  className="stepper">
        <div
          className={
            activeStep === 0 ? "tracker step-completed" : "tracker step-completed"
          }
        ></div>
        <div
          className={activeStep >= 1 ? "tracker step-completed" : "tracker"}
        ></div>
        <div
          className={activeStep === 2 ? "tracker step-completed" : "tracker"}
        ></div>
      </div>
    </>
  );
}

export default Stepper;
