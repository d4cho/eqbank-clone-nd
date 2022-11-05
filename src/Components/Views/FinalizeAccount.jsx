import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import SelectField from '../Atoms/SelectField/SelectField';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import RadioButton from '../Atoms/RadioButton/RadioButton';
import { occupationData } from '../../Data/Occupation';

import { useNavigate } from 'react-router-dom';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
import Spinner from '../Atoms/Spinner/Spinner';

function FinalizeAccount() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [occupation, setOccupation] = useState('Personal Savings');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        setTimeout(() => {
            navigate('/welcome/profile/FinalizeAccount/password');
            nextStep();
        }, 1500);
        setIsSubmitted(true);
         event.preventDefault();
    };

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <div>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                dropShawdow={isSubmitted ? <BackDropForForms /> : null}
                spinnerShow={
                    isSubmitted ? (
                        <Spinner
                            position='relative'
                            bottom='200px'
                            left='170px'
                            height='65px'
                            width='65px'
                        />
                    ) : null
                }
                mainHeader={<h2>A bit more about you</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={
                    <p style={{ fontSize: '.875rem' }}>
                        Lets add finishing touches to your account.
                    </p>
                }
                form={
                    <form action=''>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                            }}
                        >
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
                                    width={matches ? '22.78rem' : '100%'}
                                    provincesData={occupationData}
                                    placeholder='Select occupation'
                                />
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', fontWeight: '600', marginTop: '20px' }}>
                            How do you intend to use this account?
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                gap: '10px',
                            }}
                        >
                            <RadioButton
                                value={'Personal Savings'}
                                label='Personal Savings'
                                handleChange={(e) => setOccupation(e.target.value)}
                                checked={occupation === 'Personal Savings'}
                            />
                            <RadioButton
                                value={'Deposits / Living Expenses'}
                                label='Deposits / Living Expenses'
                                handleChange={(e) => setOccupation(e.target.value)}
                                checked={occupation === 'Deposits / Living Expenses'}
                            />
                            <RadioButton
                                value={'Investment'}
                                label='Investment'
                                handleChange={(e) => setOccupation(e.target.value)}
                                checked={occupation === 'Investment'}
                            />
                        </div>

                        <FormSubmissionButton
                            width={matches ? '360px' : '100%'}
                            Label='Continue'
                            color='white'
                            marginTop='40px'
                            handleSubmit={handleSubmit}
                        />
                    </form>
                }
            />
        </div>
    );
}

export default FinalizeAccount;
