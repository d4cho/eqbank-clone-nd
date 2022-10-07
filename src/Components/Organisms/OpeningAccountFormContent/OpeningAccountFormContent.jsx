import React, { useState, useEffect} from "react";
import "./OpeningAccountFormContent.css";


function OpeningAccountFormContent(props) {
  const savingPlusText = props.savingPlusText;
  const mainHeader = props.mainHeader;
  const stepper = props.stepper;
  const viewAccountRequirements = props.viewAccountRequirements;
  const form = props.form;
  const  dropShawdow = props.dropShawdow
  const spinnerShow = props.spinnerShow
  const email = props.email
  const passcodeTextFields = props.passcodeTextFields

 


  const [matches, setMatches] = useState( window.matchMedia("(min-width: 1020px)").matches);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1020px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div  style={matches ? { backgroundColor: "#f8f8f8", height:'1300px' } : {}}>
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
            {email}
            {passcodeTextFields}
            {savingPlusText}
            {viewAccountRequirements}
            {form}
            {spinnerShow}
          </div>
        </div>
      </div>
    </>
  );
}

export default OpeningAccountFormContent;
