import React, { useState, useEffect } from 'react';
import './OpeningAccountFormContent.css';

function OpeningAccountFormContent({
    savingPlusText,
    mainHeader,
    stepper,
    textAndIcon,
    form,
    dropShawdow,
    spinnerShow,
    subText,
    passcodeTextFields,
    formButton,
}) {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <>
            <div style={matches ? { backgroundColor: '#f8f8f8', minHeight: '1010px' } : {}}>
                {dropShawdow}
                <div className={matches ? 'container' : ''}>
                    <div
                        className={
                            matches
                                ? 'opening-account-form-container-desktop'
                                : 'opening-account-form-container '
                        }
                    >
                        {stepper}
                        {mainHeader}
                        {subText}
                        {textAndIcon}
                        {passcodeTextFields}
                        {savingPlusText}
                        {formButton}
                        {form}
                        {spinnerShow}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpeningAccountFormContent;
