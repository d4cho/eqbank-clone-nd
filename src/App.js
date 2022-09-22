// import "../App.css";
import HomePage from "./Components/Views/HomePage";
import LeftNavigationContextProvider from "./Context/LeftNavigationBarContext";
import SubMenuContextProvider from "./Context/SubMenuContext";
import SearchBarContextProvider from "./Context/SearchBarContext";
import SideBarToggleContextProvider from "./Context/SideBarToggler";

function App() {
  return (
    <SideBarToggleContextProvider>
      <SubMenuContextProvider>
        <LeftNavigationContextProvider>
          <SearchBarContextProvider>
            <HomePage />
          </SearchBarContextProvider>
        </LeftNavigationContextProvider>
      </SubMenuContextProvider>
    </SideBarToggleContextProvider>
  );
}

export default App;
