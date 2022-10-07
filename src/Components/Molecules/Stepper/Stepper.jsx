import React,{useContext} from "react";
import "./Stepper.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SearchBarContext } from "../../../Context/SearchBarContext";

function Stepper() {

  const {handleShow } = useContext(SearchBarContext);
  console.log(handleShow)
  return (
    <>
      <div className="create-profile">
        <p>Step 1 - Create a profile</p> 
        <ChevronRightIcon/>
      </div>

      <div onClick={handleShow} className="stepper">
       <div className="tracker completed"></div>
       <div className="tracker"></div>
       <div className="tracker"></div>
      </div>
    </>
  );
}

export default Stepper;
