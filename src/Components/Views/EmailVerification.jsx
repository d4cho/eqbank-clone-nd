import React from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
function EmailVerification() {
  return (
    <>
      <OpeningAccountNavbarContent />
      <OpeningAccountFormContent
        savingPlusText={
          <p>
            A savings Plus Account gives you access to all EQ bank products.You
            can open one in minutes.
          </p>
        }
        smartChoiceText={<h2>Smart Choice</h2>}
        stepper={<Stepper />}
      />
    </>
  );
}

export default EmailVerification;
