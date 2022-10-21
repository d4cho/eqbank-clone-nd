import React, { useContext, useState, useEffect } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import FilterButton from '../Atoms/FilterButton/FilterButton';
import { filterButtonDesktop } from '../../Data/ButtonsData';
import { filterButtonMobile } from '../../Data/ButtonsData';
import { filteredDataContent } from '../../Data/FilteredDataContent';
import FormSubmissionButton from '../Atoms/FromSubmissionButton/FormSubmissionButton';
import { useNavigate } from 'react-router-dom';
import BackDropForForms from '../Organisms/BackDropForForms/BackDropFormForms';
import Spinner from '../Atoms/Spinner/Spinner';
import SignUpFAQ from '../Atoms/SignUpFAQ/SignUpFAQ';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function VerificationChoice() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [active, setActive] = useState(1);
    const filteredData = filteredDataContent.filter((item) => item.id === 1);
    const [state, setState] = useState(filteredData);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    const handleClick = (id) => {
        setActive(id);
        if (active === 1) {
            const filteredData = filteredDataContent.filter((item) => item.id === id);
            setState(filteredData);
        } else if (active === 2) {
            const filteredData = filteredDataContent.filter((item) => item.id === id);
            setState(filteredData);
        }
    };
    const navigate = useNavigate();

    const handleSubmit = () => {
        setTimeout(() => {
            navigate('/welcome/profile/FinalizeAccount');
            nextStep();
        }, 1500);
        setIsSubmitted(true);
    };
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
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
                mainHeader={<h2>We need to see some ID</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={
                    <p style={{ fontSize: '.875rem' }}>How would you like to share this with us?</p>
                }
                form={
                    <>
                        {matches ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: '10px',
                                }}
                            >
                                {filterButtonDesktop.map((button, idx) => (
                                    <FilterButton
                                        key={idx}
                                        width={button.width}
                                        id={button.id}
                                        Label={button.Label}
                                        color={button.color}
                                        backgroundColor={active === button.id ? '#fcf5fa' : ''}
                                        cursor={button.cursor}
                                        icon={button.icon}
                                        onClick={handleClick}
                                        borderLeft={
                                            active === button.id
                                                ? '2px solid #cb3694 '
                                                : '1px solid #a0a0a0'
                                        }
                                        borderRight={
                                            active === button.id
                                                ? '2px solid #cb3694 '
                                                : '1px solid #a0a0a0'
                                        }
                                        borderTop={
                                            active === button.id
                                                ? '2px solid #cb3694 '
                                                : '1px solid #a0a0a0'
                                        }
                                        borderBottom={
                                            active === button.id
                                                ? '2px solid #cb3694 '
                                                : '1px solid #a0a0a0'
                                        }
                                        borderRadius={button.borderRadius}
                                        matches={matches}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                {filterButtonMobile.map((button, idx) => (
                                    <FilterButton
                                        key={idx}
                                        width={button.width}
                                        id={button.id}
                                        Label={button.Label}
                                        color={active === button.id ? button.color : 'grey'}
                                        cursor={button.cursor}
                                        onClick={handleClick}
                                        borderBottomMobile={
                                            active === button.id
                                                ? 'black 2px solid '
                                                : '2px solid #c8c8c8'
                                        }
                                        matches={matches}
                                    />
                                ))}
                            </div>
                        )}
                        {state.map((data, idx) => (
                            <div key={idx}>
                                <div key={idx}>
                                    <ol className='data-list-order'>
                                        {data.listItems.map((item, idx) => (
                                            <li className='data-list' key={idx}>
                                                {item.suggestionOne}
                                                {item.suggestionTwo}
                                                {item.suggestionThree}
                                                <p
                                                    style={{
                                                        color: '#c33991',
                                                        position: 'relative',
                                                        left: '35px',
                                                        bottom: '10px',
                                                        fontSize: '0.9rem',
                                                    }}
                                                >
                                                    {' '}
                                                    {item.whatIDNeed}
                                                </p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <hr
                                    style={{
                                        border: 0,
                                        borderTop: '1px solid rgba(0,0,0,.1)',
                                    }}
                                />
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ color: '#c33991' }}>{data.icon}</div>
                                    <p>{data.mainText}</p>
                                    <p
                                        onClick={() => openInNewTab(data.href)}
                                        style={{ color: '#c33991', cursor: 'pointer' }}
                                    >
                                        {data.subText}
                                    </p>
                                </div>
                                <hr
                                    style={{
                                        border: 0,
                                        borderTop: '1px solid rgba(0,0,0,.1)',
                                    }}
                                />
                                <p className='online-legal-text'>{data.legalText}</p>
                                <FormSubmissionButton
                                    width='170px'
                                    Label="Ok let's do this"
                                    color='white'
                                    handleSubmit={handleSubmit}
                                />{' '}
                                <SignUpFAQ
                                    fontSize='0.8rem'
                                    color='#cb3694'
                                    Label='Sign-up FAQ'
                                    icon={<HelpOutlineIcon style={{ color: '#c73391' }} />}
                                />
                            </div>
                        ))}
                    </>
                }
            />
        </div>
    );
}

export default VerificationChoice;
