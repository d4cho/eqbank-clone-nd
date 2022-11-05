import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import TextField from '../Atoms/TextField/TextField';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import { useNavigate } from 'react-router-dom';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
import Spinner from '../Atoms/Spinner/Spinner';
import Label from '../Atoms/Label/Label';
import IosShareIcon from '@mui/icons-material/IosShare';

function FinalizeAccountAgreements() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [firstChecked, setFirstChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    const isCheckedFirstBox = (event) => {
        setFirstChecked(event.target.checked);
    };

    const isCheckedSecondBox = (event) => {
        setSecondChecked(event.target.checked);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            navigate('/welcome/profile/FinalizeAccount/FinalizeVerifyIdentity');
            nextStep();
        }, 1500);
        setIsSubmitted(true);
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
                mainHeader={<h2>Now for the fine print</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={<p style={{ fontSize: '.875rem' }}>Please review the following.</p>}
                form={
                    <>
                        <ul>
                            <li
                                className='agreement-list'
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.eqbank.ca/legal/savings-plus-account-agreement'
                                    )
                                }
                            >
                                {' '}
                                Savings Plus Account Agreement <IosShareIcon fontSize='small' />
                            </li>
                            <li
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.eqbank.ca/legal/Mobile-Online-Banking-Terms-Conditions'
                                    )
                                }
                                className='agreement-list'
                            >
                                EQ Bank Mobile and Online Banking Terms & Conditions{' '}
                                <IosShareIcon fontSize='small' />
                            </li>
                            <li
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.cdic.ca/wp-content/uploads/cdic-abbreviated-brochure-en.pdf'
                                    )
                                }
                                className='agreement-list'
                            >
                                {' '}
                                CDIC Protecting Your Deposits <IosShareIcon fontSize='small' />
                            </li>
                        </ul>
                        <form action='' onSubmit={handleSubmit}>
                            <div
                                style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <TextField
                                    type={'checkbox'}
                                    checked={firstChecked}
                                    handleInputChange={isCheckedFirstBox}
                                />
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
                                <TextField
                                    type={'checkbox'}
                                    checked={secondChecked}
                                    handleInputChange={isCheckedSecondBox}
                                />
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
                                disabled={
                                    firstChecked === false || secondChecked === false
                                        ? 'disabled'
                                        : ''
                                }
                            />
                            <p style={{ fontWeight: '700', fontSize: '0.8rem' }}>
                                Want to know more?
                            </p>
                            <p style={{ fontSize: '0.8rem' }}>
                                Learn how we protect you and your money at eqbank.ca/legal.
                            </p>
                        </form>
                    </>
                }
            />
        </div>
    );
}

export default FinalizeAccountAgreements;
