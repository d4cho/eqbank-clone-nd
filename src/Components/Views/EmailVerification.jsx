import React from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
function EmailVerification() {
  return (
    <>
     <OpeningAccountNavbarContent />
     <OpeningAccountFormContent savingPlusText={
          <p>
            A savings Plus Account gives you access to all EQ bank products.You
            can open one in minutes.
          </p>
        }
        smartChoiceText={<h2>Smart Choice</h2>}
        stepper={<Stepper />}
        viewAccountRequirements={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              marginLeft: "3px",
              color: "#c33991",
              fontSize: "0.8rem",
            }}
          >
            <SwitchAccountIcon />
            <p style={{ cursor: "pointer" }}>View account requirements</p>
          </div>
        } />
    </>
  );
}

export default EmailVerification;