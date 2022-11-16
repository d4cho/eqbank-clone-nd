import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Views/HomePage';
import MainContextProvider from './Context/MainContext';
import WelcomePage from './Components/Views/WelcomePage';
import EmailVerification from './Components/Views/EmailVerification';
import FormContextProvider from './Context/FormContext';
import PersonalInformation from './Components/Views/PersonalInformation';
import VerificationChoice from './Components/Views/VerificationChoice';
import FinalizeAccount from './Components/Views/FinalizeAccount';
import FinalizeAccountPasswordInput from './Components/Views/FinalizeAccountPasswordInput';
import FinalizeAccountAgreements from './Components/Views/FinalizeAccountAgreements';
import FinalizeVerifyIdentity from './Components/Views/FinalizeVerifyIdentity';

function App() {
    return (
        <FormContextProvider>
            <MainContextProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/welcome' element={<WelcomePage />} />
                    <Route
                        path='/welcome/profile/emailVerification'
                        element={<EmailVerification />}
                    ></Route>
                    <Route
                        path='/welcome/profile/PersonalInformation'
                        element={<PersonalInformation />}
                    ></Route>
                    <Route
                        path='/welcome/profile/verificationChoice'
                        element={<VerificationChoice />}
                    ></Route>
                    <Route
                        path='/welcome/profile/FinalizeAccount'
                        element={<FinalizeAccount />}
                    ></Route>
                    <Route
                        path='/welcome/profile/FinalizeAccount/password'
                        element={<FinalizeAccountPasswordInput />}
                    ></Route>
                    <Route
                        path='/welcome/profile/FinalizeAccount/AccountAgreement'
                        element={<FinalizeAccountAgreements />}
                    ></Route>
                    <Route
                        path='/welcome/profile/FinalizeAccount/FinalizeVerifyIdentity'
                        element={<FinalizeVerifyIdentity />}
                    ></Route>
                </Routes>
            </MainContextProvider>
        </FormContextProvider>
    );
}

export default App;
