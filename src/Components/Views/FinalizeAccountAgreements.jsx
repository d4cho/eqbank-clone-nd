import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import TextField from '../Atoms/TextField/TextField';
// import Label from '../Atoms/Label/Label';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
// import { useNavigate } from 'react-router-dom';
// import PasswordChecklist from 'react-password-checklist';
// import PasswordStrengthMeter from '../Molecules/PasswordStrengthMeter/PasswordStrengthMeter';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import DoneIcon from '@mui/icons-material/Done';
// import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
// import Spinner from '../Atoms/Spinner/Spinner';
import Label from '../Atoms/Label/Label';

function FinalizeAccountAgreements() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    // const [password, setPassword] = useState('');
    // const [passwordAgain, setPasswordAgain] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);
    // const navigate = useNavigate();
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (password.length > 0 && passwordAgain.length > 0 && password === passwordAgain) {
    //         setTimeout(() => {
    //             navigate('/welcome/profile/PersonalInformation');
    //             nextStep();
    //         }, 1500);
    //         setIsSubmitted(true);
    //     }
    // };

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
                mainHeader={<h2>Now for the fine print</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={<p style={{ fontSize: '.875rem' }}>Please review the following.</p>}
                form={
                    <>
                        <ul>
                            <li className='agreement-list'> Savings Plus Account Agreement </li>
                            <li className='agreement-list'>
                                {' '}
                                EQ Bank Mobile and Online Banking Terms & Conditions{' '}
                            </li>
                            <li className='agreement-list'> CDIC Protecting Your Deposits </li>
                        </ul>
                        <form action=''>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {' '}
                                <TextField type={'checkbox'} />
                                <Label
                                    Label='I have read and agree to the Account Agreement and Terms & Conditions.'
                                    fontSize='0.8rem'
                                    fontWeight='600'
                                />
                            </div>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <TextField type={'checkbox'} />
                                <Label
                                    Label='I confirm that I am opening this account for my own personal use, and not for use by or for the benefit of a third party.'
                                    fontSize='0.8rem'
                                    fontWeight='600'
                                />
                            </div>

                            <FormSubmissionButton
                                width='170px'
                                Label='Open my account'
                                color='white'
                                marginTop='5px'
                            />
                        </form>
                    </>
                }
            />
        </div>
    );
}

export default FinalizeAccountAgreements;
