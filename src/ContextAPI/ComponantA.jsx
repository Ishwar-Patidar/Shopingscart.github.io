

// **********defination of Context API*************
// React context API is a Componant Structure, Which allows us to share data across all level of the application and solve the problem of prop drilling.





import React from 'react'
import COmponantB from './COmponantB'
import { createContext } from 'react'

const FirstName = createContext();
const LastName = createContext();
const ContextDef = createContext();

function ComponantA() {
    return (

        <>
            <FirstName.Provider value={"Ishwar "}>
                <LastName.Provider value={"Patel"}>
                    <ContextDef.Provider value = {"React context API is a Componant Structure, Which allows us to share data across all level of the application and solve the problem of prop drilling."}>
                    <COmponantB />
                    </ContextDef.Provider>
                </LastName.Provider>
            </FirstName.Provider>
        </>

    );
};

export default ComponantA ;
export { FirstName, LastName, ContextDef };

