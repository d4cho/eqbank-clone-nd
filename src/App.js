 import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Views/HomePage";
import LeftNavigationContextProvider from "./Context/LeftNavigationBarContext";
import SubMenuContextProvider from "./Context/SubMenuContext";
import SearchBarContextProvider from "./Context/SearchBarContext";
import SideBarToggleContextProvider from "./Context/SideBarToggler";
import Navigation from "./Navigation";
import WelcomePage from "./Components/Views/WelcomePage";
import OpeningAccountNavbarTogglerContextProvider from "./Context/OpeningAccountNavbarToggler";
import EmailVerification from "./Components/Views/EmailVerification";
import FormContextProvider from "./Context/FormContext";

function App() {
  return (
    <FormContextProvider>
    <SideBarToggleContextProvider>
      <SubMenuContextProvider>
        <LeftNavigationContextProvider>
          <SearchBarContextProvider>
            <OpeningAccountNavbarTogglerContextProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navigation>
                      <HomePage />{" "}
                    </Navigation>
                  }
                />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/welcome/profile/emailVerification" element={<EmailVerification/>}></Route>
              </Routes>
            </OpeningAccountNavbarTogglerContextProvider>
          </SearchBarContextProvider>
        </LeftNavigationContextProvider>
      </SubMenuContextProvider>
    </SideBarToggleContextProvider>
    </FormContextProvider>
  );
}

export default App;
