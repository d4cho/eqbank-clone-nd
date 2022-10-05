import React from "react";
import "./Stepper.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Stepper() {
  return (
    <>
      <div className="create-profile">
        <p>Step 1 - Create a profile</p> 
        <ChevronRightIcon/>
      </div>

      <div className="stepper">
       <div className="tracker completed"></div>
       <div className="tracker"></div>
       <div className="tracker"></div>
      </div>
    </>
  );
}

export default Stepper;
