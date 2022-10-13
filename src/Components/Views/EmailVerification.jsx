import React, { useContext, useState } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import { FormContext } from "../../Context/FormContext";
import PassCodeTextField from "../Atoms/PasscodeTextField/PasscodeTextField";
import FormSubmissionButton from "../Atoms/FromSubmissionButton/FormSubmissionButton";
import { StepperContext } from "../../Context/StepperContext";
import { useNavigate } from "react-router-dom";
import BackDropForForms from "../Organisms/BackDropForForms/BackDropFormForms";
import EditIcon from '@mui/icons-material/Edit';

function EmailVerification() {
  const { values } = useContext(FormContext);
  const { nextStep, activeStep } = useContext(StepperContext);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [passcode, setPasscode] = useState({
    firstPasscode: "",
    secondPasscode: "",
    thirdPasscode: "",
    fourthPasscode: "",
    fifthPasscode: "",
    sixthPasscode: "",
  });

  const firstPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, firstPasscode: event.target.value });
  };

  const secondPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, secondPasscode: event.target.value });
  };
  const thirdPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, thirdPasscode: event.target.value });
  };

  const fourthPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, fourthPasscode: event.target.value });
  };

  const fifthPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, fifthPasscode: event.target.value });
  };
  const sixthPasscodeInputChange = (event) => {
    setPasscode({ ...passcode, sixthPasscode: event.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstPasscode,
      secondPasscode,
      thirdPasscode,
      fourthPasscode,
      fifthPasscode,
      sixthPasscode,
    } = passcode;
    if (
      firstPasscode &&
      secondPasscode &&
      thirdPasscode &&
      fourthPasscode &&
      fifthPasscode &&
      sixthPasscode
    ) {
      setTimeout(() => {
        navigate("/welcome/profile/PersonalInformation");
        nextStep();
      }, 1500);
      setValid(true);
    }
    setSubmitted(true);
  };

  const {
    firstPasscode,
    secondPasscode,
    thirdPasscode,
    fourthPasscode,
    fifthPasscode,
    sixthPasscode,
  } = passcode;
  const enabled =
    firstPasscode.length > 0 &&
    secondPasscode.length > 0 &&
    thirdPasscode.length > 0 &&
    fourthPasscode.length > 0 &&
    fifthPasscode.length > 0 &&
    sixthPasscode.length > 0;
  return (
    <>
      <OpeningAccountNavbarContent />
      <OpeningAccountFormContent
        dropShawdow={submitted && valid ? <BackDropForForms /> : null}
        spinnerShow={
          submitted && valid ? (
            <div
              className="spin"
              style={{
                position: "relative",
                bottom: "200px",
                left: "170px",
                zIndex: "3000",
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                width: "65px",
                height: "65px",
              }}
            ></div>
          ) : null
        }
        mainHeader={<h2>Check your inbox</h2>}
        stepper={<Stepper activeStep={activeStep} />}
        subText={
          <p style={{ fontSize: ".875rem" }}>
            A passcode was sent to <b>{values.email}</b>
          </p>
        }
        passcodeTextFields={
          <form action="" onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <PassCodeTextField
                value={passcode.firstPasscode}
                handleInputChange={firstPasscodeInputChange}
              />
              <PassCodeTextField
                value={passcode.secondPasscode}
                handleInputChange={secondPasscodeInputChange}
              />
              <PassCodeTextField
                value={passcode.thirdPasscode}
                handleInputChange={thirdPasscodeInputChange}
              />
              <PassCodeTextField
                value={passcode.fourthPasscode}
                handleInputChange={fourthPasscodeInputChange}
              />
              <PassCodeTextField
                value={passcode.fifthPasscode}
                handleInputChange={fifthPasscodeInputChange}
              />
              <PassCodeTextField
                value={passcode.sixthPasscode}
                handleInputChange={sixthPasscodeInputChange}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <FormSubmissionButton
                disabled={!enabled}
                width="90px"
                Label="Verify"
                color="white"
              />{" "}
            </div>
          </form>
        }
        textAndIcon={
          <div
          onClick={()=>{
            navigate("/welcome")
          }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              marginLeft: "3px",
              color: "#c33991",
              fontSize: "0.8rem",
            }}
          >
            <EditIcon />
            <p className="edit-email" style={{ cursor: "pointer", }}>Edit email</p>
          </div>
        }
      />
    </>
  );
}

export default EmailVerification;
