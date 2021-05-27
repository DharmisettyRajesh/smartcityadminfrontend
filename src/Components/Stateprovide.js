import {useContext,createContext,useReducer} from 'react';

export const StateContext=createContext();

export const Stateprovider=({reducer,initialState,children})=>{
    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider>
    );
};
export const useStateValue=()=>useContext(StateContext);
