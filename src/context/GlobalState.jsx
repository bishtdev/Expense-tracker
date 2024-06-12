import React,{ createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//initial State

const initialState = {
    transcations:[]
}


// create Context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer, initialState)
    
    // actions
    function deleteTrascation(id){
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        })
    }

    function addTranscation(transcation){
        dispatch({
            type: 'ADD_TRANS',
            payload: transcation
        })
    }

    return(
        <GlobalContext.Provider value={{transcations:state.transcations, deleteTrascation, addTranscation}}>
            {children}
        </GlobalContext.Provider>
    )
}