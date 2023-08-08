"use client";
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  list: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addList = (list) =>
    dispatch({
      type: "ADD_LIST",
      payload: list,
    });

  return (
    <Context.Provider value={{ list: state.list, addList }}>
      {children}
    </Context.Provider>
  );
};
