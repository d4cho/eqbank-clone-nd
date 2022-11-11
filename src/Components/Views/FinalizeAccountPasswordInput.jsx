import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import TextField from '../Atoms/TextField/TextField';
import Label from '../Atoms/Label/Label';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import { useNavigate } from 'react-router-dom';
import PasswordChecklist from 'react-password-checklist';
import PasswordStrengthMeter from '../Molecules/PasswordStrengthMeter/PasswordStrengthMeter';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneIcon from '@mui/icons-material/Done';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
import Spinner from '../Atoms/Spinner/Spinner';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { MainContext } from '../../Context/MainContext';

function FinalizeAccountPasswordInput() {
    const { activeStep, nextStep } = useContext(MainContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfirmShown, setComfirmPasswordShown] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length > 0 && passwordAgain.length > 0 && password === passwordAgain) {
            setTimeout(() => {
                navigate('/welcome/profile/FinalizeAccount/AccountAgreement');
                nextStep();
            }, 1500);
            setIsSubmitted(true);
        }
    };

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
                mainHeader={<h2>Let’s create your password</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={
                    <p style={{ fontSize: '.875rem' }}>Tip: avoid reusing your email password.</p>
                }
                form={
                    <form action='' onSubmit={handleSubmit}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginTop: '10px',
                            }}
                        >
                            <Label Label='Enter password' fontSize='0.8rem' fontWeight='600' />
                            <TextField
                                width={matches ? '20.78rem' : '90%'}
                                handleInputChange={(e) => setPassword(e.target.value)}
                                type={passwordShown ? 'text' : 'password'}
                            />
                            <div
                                style={{
                                    position: 'relative',
                                    left: '320px',
                                    bottom: '45px',
                                    cursor: 'pointer',
                                }}
                            >
                                <VisibilityOffIcon
                                    title={passwordShown ? 'Hide password' : 'Show password'}
                                    onClick={() => setPasswordShown((prevState) => !prevState)}
                                    fontSize='small'
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundColor: '#f8f8f8',
                                margin: matches
                                    ? '1.5rem -3.8rem 1.5rem -3.8rem'
                                    : '1.5rem -0.8rem 1.5rem -1.9rem',
                                border: '1px solid #c8c8c8',
                                paddingLeft: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                paddingRight: '40px',
                            }}
                        >
                            <PasswordStrengthMeter password={password} />
                            <p>Your password must have</p>
                            <PasswordChecklist
                                rules={['minLength', 'specialChar', 'number', 'letter', 'match']}
                                minLength={7}
                                value={password}
                                valueAgain={passwordAgain}
                                onChange={(isValid) => {}}
                                iconComponents={{
                                    ValidIcon: <DoneIcon fontSize='xs' />,
                                    InvalidIcon: <FiberManualRecordIcon fontSize='xs' />,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <Label Label='Confirm password' fontSize='0.8rem' fontWeight='600' />
                            <TextField
                                width={matches ? '20.78rem' : '90%'}
                                handleInputChange={(e) => setPasswordAgain(e.target.value)}
                                type={passwordConfirmShown ? 'text' : 'password'}
                            />
                            <div style={{ position: 'relative', left: '320px', bottom: '45px' }}>
                                <VisibilityOffIcon
                                    title={passwordConfirmShown ? 'Hide password' : 'Show password'}
                                    onClick={() =>
                                        setComfirmPasswordShown((prevState) => !prevState)
                                    }
                                    fontSize='small'
                                />
                            </div>
                        </div>

                        <FormSubmissionButton
                            width='120px'
                            Label='Continue'
                            color='white'
                            marginTop='10px'
                        />
                    </form>
                }
            />
        </div>
    );
}

export default FinalizeAccountPasswordInput;
