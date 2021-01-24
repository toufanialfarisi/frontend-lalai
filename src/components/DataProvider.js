import React, {useContext, createContext} from "react"

export const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export default function DataProvider (props){
    const endpoint = "http://localhost:5000/api/v1";
    const prodEndp = "https://backend-lalai.herokuapp.com/api/v1";
    return (
        <DataContext.Provider
        value={{endpoint}}
        >
            {props.children}
        </DataContext.Provider>
    )
}