import React, { useContext } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import { FormContext } from "../../Context/FormContext";
import PassCodeTextField from "../Atoms/PasscodeTextField/PasscodeTextField";

function EmailVerification() {
  const { values } = useContext(FormContext);
  return (
    <>
      <OpeningAccountNavbarContent />
      <OpeningAccountFormContent
        mainHeader={<h2>Check your inbox</h2>}
        stepper={<Stepper />}
        email={
          <p>
            A passcode was sent to <b>{values.email}</b>
          </p>
        }
        passcodeTextFields={
          <div style={{ display: "flex", flexDirection: "row", gap:'20px' }}>
            <PassCodeTextField />
            <PassCodeTextField />
            <PassCodeTextField />
            <PassCodeTextField />
            <PassCodeTextField />
            <PassCodeTextField />
          </div>
        }
      />
    </>
  );
}

export default EmailVerification;
