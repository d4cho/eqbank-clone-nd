// import "../App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Views/HomePage";
import LeftNavigationContextProvider from "./Context/LeftNavigationBarContext";
import SubMenuContextProvider from "./Context/SubMenuContext";
import SearchBarContextProvider from "./Context/SearchBarContext";
import SideBarToggleContextProvider from "./Context/SideBarToggler";
import Navigation from "./Navigation";
import WelcomePage from "./Components/Views/WelcomePage";

function App() {
  return (
    <SideBarToggleContextProvider>
      <SubMenuContextProvider>
        <LeftNavigationContextProvider>
          <SearchBarContextProvider>
            <Routes>
              <Route
                path="/"
                element={<Navigation><HomePage /> </Navigation>}
              />
              <Route path="/welcome" element={<WelcomePage/>} />
            </Routes>
          </SearchBarContextProvider>
        </LeftNavigationContextProvider>
      </SubMenuContextProvider>
    </SideBarToggleContextProvider>
  );
}

export default App;
