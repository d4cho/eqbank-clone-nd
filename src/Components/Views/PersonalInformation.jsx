import React, { useContext, useState, useEffect } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import { StepperContext } from "../../Context/StepperContext";
import TextField from "../Atoms/TextField/TextField";
import FormSubmissionButton from "../Atoms/FromSubmissionButton/FormSubmissionButton";
import SelectField from "../Atoms/SelectField/SelectField";
import { provincesData } from "../../Data/Provinces";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function PersonalInformation() {
  const { activeStep, nextStep } = useContext(StepperContext);
  // const [select, setSelect] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState("");
  const [personalValues, setPersonalValues] = useState({
    streetAddress: "",
    streetAddressLineTwo: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const streetAddressInputChange = (event) => {
    console.log(personalValues.streetAddress);
    setPersonalValues({ ...personalValues, streetAddress: event.target.value });
  };

  const streetAddressLineTwoInputChange = (event) => {
    setPersonalValues({
      ...personalValues,
      streetAddressLineTwo: event.target.value,
    });
  };
  const cityInputChange = (event) => {
    setPersonalValues({ ...personalValues, city: event.target.value });
  };

  const provinceInputChange = (event) => {
    setPersonalValues({ ...personalValues, province: event.target.value });
  };

  const postalCodeInputChange = (event) => {
    setPersonalValues({ ...personalValues, postalCode: event.target.value });
  };

  const regexPostalCode= /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/

  const handleSubmit = (event) => {
    if (
      (personalValues.streetAddress &&
        personalValues.city &&
        personalValues.province &&
        personalValues.postalCode  &&
        regexPostalCode.test(personalValues.postalCode)) ||
       personalValues.streetAddressLineTwo
    ) {
      setPostalCodeError("")
      nextStep();
    }
    else if (!regexPostalCode.test(personalValues.postalCode)){
      setPostalCodeError("The postal code format is incorrect")
    }
   
    setSubmitted(true);
    event.preventDefault();
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
              <label
                style={{ fontSize: "0.8rem", fontWeight: "600" }}
                htmlFor=""
              >
                Street Address
              </label>
              <TextField
                width={matches ? "27rem" : null}
                value={personalValues.streetAddress}
                handleInputChange={streetAddressInputChange}
              />
              {submitted && !personalValues.streetAddress ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: "#cb061d",
                  }}
                >
                  {" "}
                  <ErrorOutlineIcon />{" "}
                  <p
                    style={{
                      color: "#cb061d",
                      fontSize: "0.8rem",
                    }}
                  >
                    This field is required
                  </p>
                </div>
              ) : null}
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <label
                  style={{ fontSize: "0.8rem", fontWeight: "600" }}
                  htmlFor=""
                >
                  Address Line 2(optional)
                </label>
                <TextField
                  width={matches ? "12.78rem" : "20.78rem"}
                  value={personalValues.streetAddressLineTwo}
                  handleInputChange={streetAddressLineTwoInputChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <label
                  style={{ fontSize: "0.8rem", fontWeight: "600" }}
                  htmlFor=""
                >
                  City
                </label>
                <TextField
                  width={matches ? "12.78rem" : "20.78rem"}
                  value={personalValues.city}
                  handleInputChange={cityInputChange}
                />
                {submitted && !personalValues.city ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      color: "#cb061d",
                    }}
                  >
                    {" "}
                    <ErrorOutlineIcon />{" "}
                    <p
                      style={{
                        color: "#cb061d",
                        fontSize: "0.8rem",
                      }}
                    >
                      This field is required
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <label
                  style={{ fontSize: "0.8rem", fontWeight: "600" }}
                  htmlFor=""
                >
                  Province
                </label>
                <SelectField
                  width={matches ? "13.78rem" : "20.78rem"}
                  provincesData={provincesData}
                  value={personalValues.province}
                  handleInputChange={provinceInputChange}
                />
                {submitted && !personalValues.province ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      color: "#cb061d",
                    }}
                  >
                    {" "}
                    <ErrorOutlineIcon />{" "}
                    <p
                      style={{
                        color: "#cb061d",
                        fontSize: "0.8rem",
                      }}
                    >
                      This field is required
                    </p>
                  </div>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <label
                  style={{ fontSize: "0.8rem", fontWeight: "600" }}
                  htmlFor=""
                >
                  Postal Code
                </label>
                <TextField
                  width={matches ? "12.78rem" : "20.78rem"}
                  value={personalValues.postalCode}
                  handleInputChange={postalCodeInputChange}
                />
                {submitted && !personalValues.postalCode ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      color: "#cb061d",
                    }}
                  >
                    {" "}
                    <ErrorOutlineIcon />{" "}
                    <p
                      style={{
                        color: "#cb061d",
                        fontSize: "0.8rem",
                      }}
                    >
                      This field is required
                    </p>
                  </div>
                ) : null}
                {postalCodeError? <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      color: "#cb061d",
                    }}
                  >
                    {" "}
                    <ErrorOutlineIcon />{" "}
                    <p
                      style={{
                        color: "#cb061d",
                        fontSize: "0.8rem",
                      }}
                    >
                      {postalCodeError}
                    </p>
                  </div>: null}
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
