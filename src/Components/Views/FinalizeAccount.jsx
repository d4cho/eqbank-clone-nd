import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import SelectField from '../Atoms/SelectField/SelectField';
import { provincesData } from '../../Data/Provinces';
import Label from '../Atoms/Label/Label';
// import { useNavigate } from 'react-router-dom';
// import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
// import Spinner from '../Atoms/Spinner/Spinner';

function FinalizeAccount() {
    const { activeStep } = useContext(StepperContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    //  const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <div>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                // dropShawdow={isSubmitted ? <BackDropForForms /> : null}
                // spinnerShow={
                //     isSubmitted ? (
                //         <Spinner
                //             position='relative'
                //             bottom='200px'
                //             left='170px'
                //             height='65px'
                //             width='65px'
                //         />
                //     ) : null
                // }
                mainHeader={<h2>A bit more about you</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={
                    <p style={{ fontSize: '.875rem' }}>
                        Lets add finishing touches to your account.
                    </p>
                }
                form={
                    <form action=''>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    marginTop: '10px',
                                }}
                            >
                                <label style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                                    Occupation
                                </label>
                                <SelectField
                                    width={matches ? '25.78rem' : '20.78rem'}
                                    provincesData={provincesData}
                                    placeholder="Select occupation"
                                />
                            </div>
                        </div>
                    </form>
                }
            />
        </div>
    );
}

export default FinalizeAccount;
