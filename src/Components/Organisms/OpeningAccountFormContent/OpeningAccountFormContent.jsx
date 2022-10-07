import React, { useState, useEffect} from "react";
import "./OpeningAccountFormContent.css";


function OpeningAccountFormContent(props) {
  const savingPlusText = props.savingPlusText;
  const smartChoiceText = props.smartChoiceText;
  const stepper = props.stepper;
  const viewAccountRequirements = props.viewAccountRequirements;
  const form = props.form;
  const  dropShawdow = props.dropShawdow
  const spinnerShow = props.spinnerShow

 


  const [matches, setMatches] = useState( window.matchMedia("(min-width: 1020px)").matches);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1020px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div  style={matches ? { backgroundColor: "#f8f8f8", height:'1000px' } : {}}>
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
            {smartChoiceText}
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
