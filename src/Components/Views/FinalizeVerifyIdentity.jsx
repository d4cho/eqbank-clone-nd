import React, { useContext, useEffect, useState } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import { StepperContext } from '../../Context/StepperContext';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function FinalizeVerifyIdentity() {
    const { activeStep, nextStep } = useContext(StepperContext);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    return (
        <div>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                mainHeader={
                    <>
                        <div
                            style={{
                                flexDirection: 'row',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccountBoxIcon style={{ fontSize: '80px', color: '#cb3694' }} />

                            <h2>
                                Last step! <br /> Verify your identity at Canada Post{' '}
                            </h2>
                        </div>
                    </>
                }
                subText={
                    <>
                        {' '}
                        <img
                            style={{ width: '180px', height: '80px' }}
                            src='https://join.eqbank.ca/assets/images/en/canada-post-logo-en.svg'
                            alt=''
                        />
                        <p
                            style={{
                                fontWeight: '700',
                                lineHeight: '1.625rem',
                                fontSize: '0.9rem',
                            }}
                        >
                            Your application is good to go! All you need to do now is verify your
                            identity at an{' '}
                            <b
                                className='canada-post-title'
                                style={{ color: '#cb3694', cursor: 'pointer' }}
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.canadapost-postescanada.ca/information/app/fpo/personal/findpostoffice?location='
                                    )
                                }
                            >
                                eligible Canada Post outlet
                            </b>{' '}
                            within the next 60 days so we can activate your account.
                        </p>
                    </>
                }
            />
        </div>
    );
}

export default FinalizeVerifyIdentity;
