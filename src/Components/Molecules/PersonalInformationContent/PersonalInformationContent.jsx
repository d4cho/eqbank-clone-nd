import React, { useState, useContext } from 'react';
import './PersonalInformationContent.css';
import TextField from '../../Atoms/TextField/TextField';
import FormSubmissionButton from '../../Atoms/FromSubmissionButton/FormSubmissionButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';

function PersonalInformationContent({ streetAddress, width, isSubmitted, setIsSubmitted }) {
    const [personalValues, setPersonalValues] = useState({
        dateofbirth: '',
        sin: '',
    });

    const dateOfBirthInputChange = (event) => {
        setPersonalValues({ ...personalValues, dateofbirth: event.target.value });
    };

    const sinInputChange = (event) => {
        setPersonalValues({
            ...personalValues,
            sin: event.target.value,
        });
    };
    const regex =
        /^(?:(?:31(\/)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const regexSin = /^(\d{3}-\d{3}-\d{3})|(\d{9})$/;

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if (regex.test(personalValues.dateofbirth) && regexSin.test(personalValues.sin)) {
            setTimeout(() => {
                navigate('/welcome/profile/verificationChoice');
            }, 1500);
        }

        setIsSubmitted(true)
        event.preventDefault();
    };
    return (
        <>
            <form action='' onSubmit={handleSubmit}>
                <div className='address-card'>
                    <p style={{ color: '#515151' }}> Residential address</p>
                    <p>
                        <b>{streetAddress}</b>
                    </p>
                </div>
                <div className='text-field-container' style={{ marginTop: '20px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                        Date of birth (Day/Month/Year){' '}
                    </label>
                    <TextField
                        width={width}
                        handleInputChange={dateOfBirthInputChange}
                        placeholder='DD/MM/YYYY'
                    />
                    {isSubmitted && !personalValues.dateofbirth ? (
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
                <div className='text-field-container'>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                        Social Insurance Number
                    </label>
                    <TextField
                        width={width}
                        handleInputChange={sinInputChange}
                        placeholder='### - ### - ###'
                    />
                    {isSubmitted && !personalValues.sin ? (
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
                <p style={{ fontSize: '0.8rem' }}>
                    Your SIN is required for tax reporting purposes. We will also use it to match
                    your information with the credit bureau. If you choose not to share your SIN
                    with the credit bureau
                </p>
                <p style={{ fontSize: '0.8rem' }}>
                    By continuing, you consent to us sharing your SIN with the credit bureau.
                </p>
                <FormSubmissionButton width='110px' Label='Continue' color='white' />{' '}
            </form>
        </>
    );
}

export default PersonalInformationContent;
