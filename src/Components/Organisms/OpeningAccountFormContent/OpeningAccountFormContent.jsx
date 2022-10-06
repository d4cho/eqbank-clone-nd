import React, { useState, useEffect } from "react";
import "./OpeningAccountFormContent.css";

function OpeningAccountFormContent(props) {
  const savingPlusText = props.savingPlusText;
  const smartChoiceText = props.smartChoiceText;
  const stepper = props.stepper;
  const viewAccountRequirements = props.viewAccountRequirements;
  const form = props.form;
  const successMessage = props.successMessage;

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
      <div style={matches ? { backgroundColor: "#f8f8f8" } : {}}>
        <div className={matches ? "container" : ""}>
          <div
            className={
              matches
                ? "opening-account-form-container-desktop"
                : "opening-account-form-container "
            }
          >
            {stepper}
            {smartChoiceText}
            {savingPlusText}
            {viewAccountRequirements}
            {successMessage}
            {form}
          </div>
        </div>
      </div>
    </>
  );
}

export default OpeningAccountFormContent;
