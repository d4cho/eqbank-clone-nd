import React, { useContext, useState, useEffect } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import TextField from '../Atoms/TextField/TextField';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import SelectField from '../Atoms/SelectField/SelectField';
import { provincesData } from '../../Data/Provinces';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PersonalInformationContent from '../Molecules/PersonalInformationContent/PersonalInformationContent';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';

function PersonalInformation() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [address, setAddress] = useState(false);
    const [personalValues, setPersonalValues] = useState({
        streetAddress: '',
        streetAddressLineTwo: '',
        city: '',
        province: '',
        postalCode: '',
    });

    const streetAddressInputChange = (event) => {
        setPersonalValues({ ...personalValues, streetAddress: event.target.value });
    };

    const streetAddressLineTwoInputChange = (event) => {
        setPersonalValues({
            ...personalValues,
            streetAddressLineTwo: event.target.value,
        });
    };
    const cityInputChange = (event) => {
        setPersonalValues({ ...personalValues, city: event.target.value });
    };

    const provinceInputChange = (event) => {
        setPersonalValues({ ...personalValues, province: event.target.value });
    };

    const postalCodeInputChange = (event) => {
        setPersonalValues({ ...personalValues, postalCode: event.target.value });
    };

    const regexPostalCode = /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;
    const streetAddressRegex = /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/;

    const handleSubmit = (event) => {
        if (
            (personalValues.streetAddress &&
                personalValues.city &&
                personalValues.province &&
                personalValues.postalCode &&
                regexPostalCode.test(personalValues.postalCode) &&
                streetAddressRegex.test(personalValues.streetAddress)) ||
            personalValues.streetAddressLineTwo
        ) {
            setAddress(true);
        }

        setSubmitted(true);
        event.preventDefault();
    };

    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);
    return (
        <>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                dropShawdow={isSubmitted && address ? <BackDropForForms /> : null}
                spinnerShow={
                    isSubmitted && address ? (
                        <div
                            className='spin'
                            style={{
                                position: 'relative',
                                bottom: '200px',
                                left: '170px',
                                zIndex: '3000',
                                flexDirection: 'row',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '65px',
                                height: '65px',
                            }}
                        ></div>
                    ) : null
                }
                stepper={<Stepper activeStep={activeStep} />}
                mainHeader={<h2>Tell us about you</h2>}
                subText={
                    <p style={{ fontSize: '.875rem' }}>
                        W'ell use this information verify your identity
                    </p>
                }
                form={
                    address && submitted ? (
                        <PersonalInformationContent
                            streetAddress={personalValues.streetAddress}
                            width={matches ? '17rem' : null}
                            isSubmitted={isSubmitted}
                            setIsSubmitted={setIsSubmitted}
                        />
                    ) : (
                        <form action='' onSubmit={handleSubmit}>
                            <div className='text-field-container'>
                                <label style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                                    Street Address
                                </label>
                                <TextField
                                    width={matches ? '27rem' : null}
                                    value={personalValues.streetAddress}
                                    handleInputChange={streetAddressInputChange}
                                />
                                {submitted && !personalValues.streetAddress ? (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '2px',
                                            color: '#cb061d',
                                        }}
                                    >
                                        {' '}
                                        <ErrorOutlineIcon />{' '}
                                        <p
                                            style={{
                                                color: '#cb061d',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            This field is required
                                        </p>
                                    </div>
                                ) : null}
                                {submitted &&
                                !regexPostalCode.test(personalValues.streetAddress) ? (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '2px',
                                            color: '#cb061d',
                                        }}
                                    >
                                        {' '}
                                        <ErrorOutlineIcon />{' '}
                                        <p
                                            style={{
                                                color: '#cb061d',
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            Invalid street address
                                        </p>
                                    </div>
                                ) : null}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <label
                                        style={{ fontSize: '0.8rem', fontWeight: '600' }}
                                        htmlFor=''
                                    >
                                        Address Line 2(optional)
                                    </label>
                                    <TextField
                                        width={matches ? '12.78rem' : '20.78rem'}
                                        value={personalValues.streetAddressLineTwo}
                                        handleInputChange={streetAddressLineTwoInputChange}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <label
                                        style={{ fontSize: '0.8rem', fontWeight: '600' }}
                                        htmlFor=''
                                    >
                                        City
                                    </label>
                                    <TextField
                                        width={matches ? '12.78rem' : '20.78rem'}
                                        value={personalValues.city}
                                        handleInputChange={cityInputChange}
                                    />
                                    {submitted && !personalValues.city ? (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '2px',
                                                color: '#cb061d',
                                            }}
                                        >
                                            {' '}
                                            <ErrorOutlineIcon />{' '}
                                            <p
                                                style={{
                                                    color: '#cb061d',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                This field is required
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <label
                                        style={{ fontSize: '0.8rem', fontWeight: '600' }}
                                        htmlFor=''
                                    >
                                        Province
                                    </label>
                                    <SelectField
                                        width={matches ? '13.78rem' : '20.78rem'}
                                        provincesData={provincesData}
                                        value={personalValues.province}
                                        handleInputChange={provinceInputChange}
                                    />
                                    {submitted && !personalValues.province ? (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '2px',
                                                color: '#cb061d',
                                            }}
                                        >
                                            {' '}
                                            <ErrorOutlineIcon />{' '}
                                            <p
                                                style={{
                                                    color: '#cb061d',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                This field is required
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <label
                                        style={{ fontSize: '0.8rem', fontWeight: '600' }}
                                        htmlFor=''
                                    >
                                        Postal Code
                                    </label>
                                    <TextField
                                        width={matches ? '12.78rem' : '20.78rem'}
                                        value={personalValues.postalCode}
                                        handleInputChange={postalCodeInputChange}
                                    />
                                    {submitted && !personalValues.postalCode ? (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '2px',
                                                color: '#cb061d',
                                            }}
                                        >
                                            {' '}
                                            <ErrorOutlineIcon />{' '}
                                            <p
                                                style={{
                                                    color: '#cb061d',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                This field is required
                                            </p>
                                        </div>
                                    ) : null}
                                    {submitted &&
                                    !regexPostalCode.test(personalValues.postalCode) ? (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '2px',
                                                color: '#cb061d',
                                            }}
                                        >
                                            {' '}
                                            <ErrorOutlineIcon />{' '}
                                            <p
                                                style={{
                                                    color: '#cb061d',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                Invalid postal
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <FormSubmissionButton
                                    width='170px'
                                    Label='Confirm Address'
                                    color='white'
                                    marginTop='60px'
                                />{' '}
                            </div>
                        </form>
                    )
                }
            />
        </>
    );
}

export default PersonalInformation;
