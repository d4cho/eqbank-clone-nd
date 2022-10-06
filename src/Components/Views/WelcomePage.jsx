import React, { useState, useEffect } from "react";
import OpeningAccountNavbarContent from "../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent.jsx";
import OpeningAccountFormContent from "../Organisms/OpeningAccountFormContent/OpeningAccountFormContent.jsx";
import Stepper from "../Molecules/Stepper/Stepper.jsx";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import TextField from "../Atoms/TextField/TextField.jsx";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IosShareIcon from "@mui/icons-material/IosShare";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


function WelcomePage() {
  const [toggle, setToggle] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1020px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1020px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
    console.log(values);
  };

  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
    console.log(values);
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
    console.log(values);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
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
        }
        createProfileText={<h4>Let's create your profile</h4>}
        form={
          <form action="" onSubmit={handleSubmit}>
            <h4>Let's create your profile</h4>

            <div className="text-field-container">
              <label htmlFor="">First name</label>
              <TextField
                placeholder="Enter your first name"
                value={values.firstName}
                handleInputChange={handleFirstNameInputChange}
                width={matches ? "18.78rem" : null}
              />
              {submitted && !values.firstName ? (
                <p
                  style={{
                    color: "#cb061d",
                    position: "relative",
                    bottom: "5px",
                  }}
                >
                  This field is required
                </p>
              ) : null}
            </div>
            <div className="text-field-container">
              <label htmlFor="">Last name</label>
              <TextField
                placeholder="Enter your last name"
                value={values.lastName}
                handleInputChange={handleLastNameInputChange}
                width={matches ? "18.78rem" : null}
              />
              {submitted && !values.lastName ? (
                <p
                  style={{
                    color: "#cb061d",
                    position: "relative",
                    bottom: "5px",
                  }}
                >
                  This field is required
                </p>
              ) : null}
            </div>
            <div className="text-field-container">
              <label htmlFor="">Email Address</label>
              <TextField
                placeholder="Enter your email"
                value={values.email}
                handleInputChange={handleEmailInputChange}
                width={matches ? "18.78rem" : null}
              />
            </div>
            <p style={{ fontSize: "0.70rem", color: "#6d6761" }}>
              A verification passcode will be sent to this address.
            </p>
            {submitted && !values.email ? (
              <p
                style={{
                  color: "#cb061d",
                  position: "relative",
                  bottom: "5px",
                }}
              >
                This field is required
              </p>
            ) : null}
            <p>
              By providing the above information, you agree to the terms of our{" "}
              <b style={{ color: "#c33991" }}>Privacy Agreement</b>{" "}
            </p>
            <div className="text-arrow-container">
              <p>You’re protected by CDIC</p>{" "}
              <div onClick={toggleHandler}>
                {toggle ? (
                  <KeyboardArrowUpIcon
                    style={{ color: "#c33991", cursor: "pointer" }}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    style={{ color: "#c33991", cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
            {toggle && (
              <div style={{ fontSize: "0.8rem" }}>
                <p>
                  The Canada Deposit Insurance Corporation (CDIC) is a federal
                  crown corporation that protects eligible deposits up to
                  $100,000 per insured category, per depositor, in the unlikely
                  event of bank failure.
                </p>
                <p>
                  To learn more, see the CDIC's{" "}
                  <b
                    className="protected-by-cdic"
                    style={{ color: "#c33991", cursor: "pointer" }}
                  >
                    Protecting Your Deposits <IosShareIcon />
                  </b>{" "}
                  brochure.
                </p>
                <img
                  style={{ height: "90px", width: "90px" }}
                  src="https://join.eqbank.ca/assets/images/general/cdic-member.svg?v=36725a9"
                  alt=""
                  srcset=""
                />
              </div>
            )}

            {matches ? (
              <button
                style={{ cursor: "pointer" }}
                className="open-account-button-desktop"
              >
                Continue
              </button>
            ) : (
              <button
                style={{ cursor: "pointer" }}
                className="open-account-button"
              >
                Continue
              </button>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "5px",
                marginTop: "10px",
              }}
            >
              <HelpOutlineIcon style={{ color: "#c73391" }} />
              <p style={{ fontSize: "0.8rem", color: "#cb3694" }}>
                Sign-up FAQ
              </p>
            </div>
          </form>
        }
        successMessage={
          submitted && valid ? <div>SUBMITTED SUCCESS</div> : null
        }
      />
      {/* <OpeningAccountFormCard/> */}
    </>
  );
}

export default WelcomePage;
