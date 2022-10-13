import React, { useState, useEffect} from "react";
import "./OpeningAccountFormContent.css";


function OpeningAccountFormContent(props) {
  const savingPlusText = props.savingPlusText;
  const mainHeader = props.mainHeader;
  const stepper = props.stepper;
  const textAndIcon = props.textAndIcon;
  const form = props.form;
  const  dropShawdow = props.dropShawdow
  const spinnerShow = props.spinnerShow
  const subText = props.subText
  const passcodeTextFields = props.passcodeTextFields
  const formButton = props.formButton
  
  const [matches, setMatches] = useState( window.matchMedia("(min-width: 1020px)").matches);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1020px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div  style={matches ? { backgroundColor: "#f8f8f8" } : {}}>
      {dropShawdow}
        <div className={matches ? "container" : ""}>
          <div
            className={
              matches
                ? "opening-account-form-container-desktop"
                : "opening-account-form-container "
            }
          >
            {stepper}
            {mainHeader}
            {subText}
            {textAndIcon}
            {passcodeTextFields}
            {savingPlusText}
            {formButton}
            {form}
            {spinnerShow}
          </div>
        </div>
      </div>
    </>
  );
}

export default OpeningAccountFormContent;
