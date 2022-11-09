import { useState, createContext } from 'react';

export const leftNavigationContext = createContext();

function LeftNavigationContextProvider(props) {
    const [open, setOpen] = useState(false);
    const [menuTitle, setMenuTitle] = useState('');
    return (
        <leftNavigationContext.Provider
            value={{
                menuTitle,
                setMenuTitle,
                open,
                setOpen,
            }}
        >
            {props.children}
        </leftNavigationContext.Provider>
    );
}
export default LeftNavigationContextProvider;
