import React , { createContext, useContext, useReducer } from "react";
 
export const stateContext = createContext();

export const StateProvider = ({ Reducer, initialState, children }) =>
                     (
                         <stateContext.Provider value = {useReducer (Reducer, initialState)}>
                             {children}
                         </stateContext.Provider>
                     )

export const useStateValue = () => useContext(stateContext);                     