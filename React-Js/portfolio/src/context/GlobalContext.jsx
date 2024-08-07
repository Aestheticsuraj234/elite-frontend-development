import { createContext } from 'react';


export const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    let greeting = "Hello World form provider";


    return (
        <GlobalContext.Provider value={
            {
                greeting
            }
        } >
            {children}
        </GlobalContext.Provider>
    )

}