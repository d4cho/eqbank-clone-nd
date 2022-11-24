import { useState, createContext, useEffect } from 'react';

export const MainContext = createContext();

function MainContextProvider(props) {
    const [open, setOpen] = useState(false);
    const [menuTitle, setMenuTitle] = useState('');
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [subMenuTitle, setSubMenuTitle] = useState('Everyday Banking');
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

      const handleMouseEnter = () => {
          setIsHover(true);
      };

      const handleMouseLeave = () => {
          setIsHover(false);
      };

    const nextStep = () => {
        if (activeStep < 2) {
            setActiveStep((currentStep) => currentStep + 1);
        }
    };

    const sideBarToggle = () => {
        setToggle(!toggle);
    };

    const handleShow = () => {
        setShow(true);
    };
    const closeShow = () => {
        setShow(false);
    };

    const openCloseMenuToggler = () => {
        setOpenCloseMenu(!openCloseMenu);
    };
    return (
        <MainContext.Provider
            value={{
                menuTitle,
                setMenuTitle,
                open,
                setOpen,
                openCloseMenu,
                openCloseMenuToggler,
                show,
                handleShow,
                closeShow,
                toggle,
                sideBarToggle,
                setToggle,
                activeStep,
                nextStep,
                subMenuTitle,
                setSubMenuTitle,
                matches,
                isHover,
                handleMouseEnter,
                handleMouseLeave,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
}
export default MainContextProvider;
