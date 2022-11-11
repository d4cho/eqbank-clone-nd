import React, { useState, useContext } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent.jsx';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent.jsx';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import TextField from '../Atoms/TextField/TextField.jsx';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IosShareIcon from '@mui/icons-material/IosShare';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms.jsx';
import { FormContext } from '../../Context/FormContext.js';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Spinner from '../Atoms/Spinner/Spinner.jsx';
import Label from '../Atoms/Label/Label.jsx';
import SignUpFAQ from '../Atoms/SignUpFAQ/SignUpFAQ.jsx';

import { MainContext } from '../../Context/MainContext.js';
function WelcomePage() {
    const [toggle, setToggle] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();
    const { activeStep, matches } = useContext(MainContext);

    const {
        values,
        handleFirstNameInputChange,
        handleLastNameInputChange,
        handleEmailInputChange,
    } = useContext(FormContext);


    const toggleHandler = () => {
        setToggle(!toggle);
    };

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.firstName && values.lastName && values.email && regex.test(values.email)) {
            setTimeout(() => {
                navigate('/welcome/profile/emailVerification');
            }, 1500);
            setValid(true);
        }

        setSubmitted(true);
    };
    return (
        <div>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                dropShawdow={submitted && valid ? <BackDropForForms /> : null}
                spinnerShow={
                    submitted && valid ? (
                        <Spinner
                            position='relative'
                            bottom='500px'
                            left='170px'
                            height='65px'
                            width='65px'
                        />
                    ) : null
                }
                savingPlusText={
                    <p>
                        A savings Plus Account gives you access to all EQ bank products.You can open
                        one in minutes.
                    </p>
                }
                mainHeader={<h2>Smart Choice</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                textAndIcon={
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                            marginLeft: '3px',
                            color: '#c33991',
                            fontSize: '0.8rem',
                        }}
                    >
                        <SwitchAccountIcon />
                        <p style={{ cursor: 'pointer' }}>View account requirements</p>
                    </div>
                }
                createProfileText={<h4>Let's create your profile</h4>}
                form={
                    <form action='' onSubmit={handleSubmit}>
                        <h4>Let's create your profile</h4>
                        <div className='text-field-container'>
                            <Label Label='First name' />
                            <TextField
                                placeholder='Enter your first name'
                                value={values.firstName}
                                handleInputChange={handleFirstNameInputChange}
                                width={matches ? '18.78rem' : null}
                                submitted={submitted}
                            />
                            {!values.firstName && submitted ? (
                                <p
                                    style={{
                                        color: '#cb061d',
                                        position: 'relative',
                                        bottom: '5px',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    This field is required
                                </p>
                            ) : null}
                        </div>
                        <div className='text-field-container'>
                            <Label Label='Last name' />
                            <TextField
                                placeholder='Enter your last name'
                                value={values.lastName}
                                handleInputChange={handleLastNameInputChange}
                                width={matches ? '18.78rem' : null}
                                submitted={submitted}
                            />
                            {!values.lastName && submitted ? (
                                <p
                                    style={{
                                        color: '#cb061d',
                                        position: 'relative',
                                        bottom: '5px',
                                        fontSize: '0.8rem',
                                    }}
                                >
                                    This field is required
                                </p>
                            ) : null}
                        </div>
                        <div className='text-field-container'>
                            <Label Label='Email Address' />
                            <TextField
                                placeholder='Enter your email'
                                value={values.email}
                                handleInputChange={handleEmailInputChange}
                                width={matches ? '18.78rem' : null}
                                submitted={submitted}
                            />
                        </div>
                        <p style={{ fontSize: '0.70rem', color: '#6d6761' }}>
                            A verification passcode will be sent to this address.
                        </p>
                        {!values.email && submitted ? (
                            <p
                                style={{
                                    color: '#cb061d',
                                    position: 'relative',
                                    bottom: '5px',
                                    fontSize: '0.8rem',
                                }}
                            >
                                This field is required
                            </p>
                        ) : null}
                        {!regex.test(values.email) && submitted ? (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '2px',
                                    color: '#cb061d',
                                    fontSize: '0.8rem',
                                }}
                            >
                                <ErrorOutlineIcon />
                                invalid email address
                            </div>
                        ) : null}
                        <p>
                            By providing the above information, you agree to the terms of our{' '}
                            <b style={{ color: '#c33991' }}>Privacy Agreement</b>{' '}
                        </p>
                        <div className='text-arrow-container'>
                            <p>You’re protected by CDIC</p>{' '}
                            <div onClick={toggleHandler}>
                                {toggle ? (
                                    <KeyboardArrowUpIcon
                                        style={{ color: '#c33991', cursor: 'pointer' }}
                                    />
                                ) : (
                                    <KeyboardArrowDownIcon
                                        style={{ color: '#c33991', cursor: 'pointer' }}
                                    />
                                )}
                            </div>
                        </div>
                        {toggle && (
                            <div style={{ fontSize: '0.8rem' }}>
                                <p>
                                    The Canada Deposit Insurance Corporation (CDIC) is a federal
                                    crown corporation that protects eligible deposits up to $100,000
                                    per insured category, per depositor, in the unlikely event of
                                    bank failure.
                                </p>
                                <p>
                                    To learn more, see the CDIC's{' '}
                                    <b
                                        className='protected-by-cdic'
                                        style={{ color: '#c33991', cursor: 'pointer' }}
                                    >
                                        Protecting Your Deposits <IosShareIcon />
                                    </b>{' '}
                                    brochure.
                                </p>
                                <img
                                    style={{ height: '90px', width: '90px' }}
                                    src='https://join.eqbank.ca/assets/images/general/cdic-member.svg?v=36725a9'
                                    alt=''
                                />
                            </div>
                        )}

                        {matches ? (
                            <button
                                style={{ cursor: 'pointer' }}
                                className='open-account-button-desktop'
                            >
                                Continue
                            </button>
                        ) : (
                            <button style={{ cursor: 'pointer' }} className='open-account-button'>
                                Continue
                            </button>
                        )}

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '5px',
                                marginTop: '10px',
                            }}
                        >
                            <SignUpFAQ
                                fontSize='0.8rem'
                                color='#cb3694'
                                Label='Sign-up FAQ'
                                icon={<HelpOutlineIcon style={{ color: '#c73391' }} />}
                            />
                        </div>
                    </form>
                }
            />
        </div>
    );
}

export default WelcomePage;
