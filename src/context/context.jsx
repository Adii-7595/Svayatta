import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const onsent = async (prompt)=>{
        console.log("loading...");
        await run(prompt)
    }

    onsent("What is reactjs")
    
    const contextValue = {}

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider