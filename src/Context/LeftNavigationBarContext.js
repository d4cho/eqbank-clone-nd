import { useState, createContext } from 'react';

export const leftNavigationContext = createContext();

function LeftNavigationContextProvider(props) {
    const [isPersonalBankingArrow, setIsPersonalBankingArrowIsOpen] = useState(false);
    const [isAboutUsArrow, setIsAboutUsArrowOpen] = useState(false);
    const [isOpenHelpArrow, setOpenHelpArrowIsOpen] = useState(false);
    const [menuTitle, setMenuTitle] = useState('');

    const openArrowPersonalBanking = () => {
        setIsPersonalBankingArrowIsOpen(!isPersonalBankingArrow);
        setMenuTitle('Personal Banking');
        setOpenHelpArrowIsOpen(false);
        setIsAboutUsArrowOpen(false);
    };

    const openArrowAboutUs = () => {
        setIsAboutUsArrowOpen(!isAboutUsArrow);
        setMenuTitle('About us');
        setIsPersonalBankingArrowIsOpen(false);
        setOpenHelpArrowIsOpen(false);
    };

    const openArrowHelpUs = () => {
        setOpenHelpArrowIsOpen(!isOpenHelpArrow);
        setIsAboutUsArrowOpen(false);
        setIsPersonalBankingArrowIsOpen(false);
        setMenuTitle('Help');
    };

    return (
        <leftNavigationContext.Provider
            value={{
                isPersonalBankingArrow,
                setIsPersonalBankingArrowIsOpen,
                isAboutUsArrow,
                setIsAboutUsArrowOpen,
                isOpenHelpArrow,
                setOpenHelpArrowIsOpen,
                menuTitle,
                setMenuTitle,
                openArrowPersonalBanking,
                openArrowAboutUs,
                openArrowHelpUs,
            }}
        >
            {props.children}
        </leftNavigationContext.Provider>
    );
}
export default LeftNavigationContextProvider;
