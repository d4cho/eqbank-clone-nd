import React, {useContext } from 'react';
import './OpeningAccountFormContent.css';
import { MainContext } from '../../../Context/MainContext';

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
    const {matches } = useContext(MainContext);
    return (
        <>
            <div style={matches ? { backgroundColor: '#f8f8f8', minHeight: '1000px' } : {}}>
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
