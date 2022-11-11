import React, { useContext, useState} from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import TextField from '../Atoms/TextField/TextField';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import SelectField from '../Atoms/SelectField/SelectField';
import { provincesData } from '../../Data/Provinces';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PersonalInformationContent from '../Molecules/PersonalInformationContent/PersonalInformationContent';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
import Spinner from '../Atoms/Spinner/Spinner';
import Label from '../Atoms/Label/Label';
import { MainContext } from '../../Context/MainContext';

function PersonalInformation() {
    const { activeStep, matches } = useContext(MainContext);
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

    return (
        <>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                dropShawdow={isSubmitted && address ? <BackDropForForms /> : null}
                spinnerShow={
                    isSubmitted && address ? (
                        <Spinner
                            position='relative'
                            bottom='200px'
                            left='170px'
                            height='65px'
                            width='65px'
                        />
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
                                <Label Label='Street Address' fontSize='0.8rem' fontWeight='600' />
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
                                    <Label
                                        Label='Address Line 2(optional)'
                                        fontSize='0.8rem'
                                        fontWeight='600'
                                    />
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
                                    <Label Label='City' fontSize='0.8rem' fontWeight='600' />
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
                                    <Label Label='Province' fontSize='0.8rem' fontWeight='600' />
                                    <SelectField
                                        width={matches ? '13.78rem' : '20.78rem'}
                                        provincesData={provincesData}
                                        value={personalValues.province}
                                        handleInputChange={provinceInputChange}
                                        placeholder='Select one'
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
                                    <Label Label='Postal Code' fontSize='0.8rem' fontWeight='600' />
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
