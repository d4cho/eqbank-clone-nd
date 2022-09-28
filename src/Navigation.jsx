import NavBarContent from "./Components/Organisms/NavBarContent/NavBarContent";
const Navigation = ({ children }) => {
  return (
    <>
      < NavBarContent />
      <main>{children}</main>
    </>
  );
};
export default Navigation;