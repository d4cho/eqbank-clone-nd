import React from 'react';
import './Stepper.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Stepper({ activeStep }) {
    return (
        <>
            <div className='create-profile'>
                {activeStep === 0 ? (
                    <>
                        <p>Step {activeStep + 1} - Create a profile</p>
                    </>
                ) : activeStep === 1 ? (
                    <>
                        <p>Step {activeStep + 1} - Verify your Identity</p>
                    </>
                ) : activeStep === 2 ? (
                    <>
                        <p>Step {activeStep + 1} - Final</p>
                    </>
                ) : (
                    <>
                        <p>Step 1 - Create a profile</p>
                    </>
                )}
                <ChevronRightIcon />
            </div>

            <div style={{ position: 'relative', right: '5px' }} className='stepper'>
                <div
                    className={
                        activeStep === 0 ? 'tracker step-completed' : 'tracker step-completed'
                    }
                ></div>
                <div className={activeStep >= 1 ? 'tracker step-completed' : 'tracker'}></div>
                <div className={activeStep === 2 ? 'tracker step-completed' : 'tracker'}></div>
            </div>
        </>
    );
}

export default Stepper;
