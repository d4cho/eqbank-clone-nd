import React, { useContext, useState, useEffect } from 'react';
import OpeningAccountNavbarContent from '../Organisms/OpeningAccountNavbarContent/OpeningAccountNavbarContent';
import OpeningAccountFormContent from '../Organisms/OpeningAccountFormContent/OpeningAccountFormContent';
import Stepper from '../Molecules/Stepper/Stepper.jsx';
import { StepperContext } from '../../Context/StepperContext';
import FilterButton from '../Atoms/FilterButton/FilterButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function VerificationChoice() {
    const { activeStep } = useContext(StepperContext);
    const [active, setActive] = useState(1);
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <div>
            <OpeningAccountNavbarContent />
            <OpeningAccountFormContent
                mainHeader={<h2>We need to see some ID</h2>}
                stepper={<Stepper activeStep={activeStep} />}
                subText={
                    <p style={{ fontSize: '.875rem' }}>How would you like to share this with us?</p>
                }
                form={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                       {matches? <> <FilterButton
                            width='190px'
                            id={1}
                            Label='Online'
                            color='black'
                            backgroundColor={active === 1 ? '#fcf5fa' : ''}
                            cursor='pointer'
                            icon={<CameraAltOutlinedIcon />}
                            onClick={handleClick}
                            border={active === 1 ? '2px solid #cb3694 ' : ''}
                        />
                        <FilterButton
                            width='190px'
                            id={2}
                            Label='In person'
                            color='black'
                            backgroundColor={active === 2 ? '#fcf5fa' : ''}
                            cursor='pointer'
                            icon={<PermIdentityOutlinedIcon />}
                            onClick={handleClick}
                            border={active === 2? '2px solid #cb3694 ' : ''}
                        /></> : null}
                    </div>
                }
            />
        </div>
    );
}

export default VerificationChoice;
