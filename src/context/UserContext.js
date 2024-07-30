"use client";
import { createContext, useReducer, useContext, useState } from "react";
import { successNoti, errorNoti } from "@utils/notification/notification";
export const Context = createContext();
export const UserContext = ({ userInfor, children }) => {
  const initialUser = {
    userInfor: userInfor,
    shippingOption: "hello",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return { ...state, userInfor: action.payload };
      }
    }
  };
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialUser);

  const handleFormActive = (e) => {
    setIsFormActive(!isFormActive);
    setIsRegisterActive(false);
    setIsLoginActive(false);
  };
  const handleLoginActive = (e) => {
    e.preventDefault();
    setIsRegisterActive(!isRegisterActive);
    setIsLoginActive(!isLoginActive);
  };
  const handleRegisterActive = (e) => {
    e.preventDefault();
    setIsLoginActive(!isLoginActive);
    setIsRegisterActive(!isRegisterActive);
  };
  const isUserLogin = () => state?.userInfor?._id !== null;
  const getUserName = () => {
    return state?.userInfor?.name;
  };
  const login = (userInfor) => {
    dispatch({ type: "LOGIN", payload: userInfor });
    successNoti("Login successfully");
    handleFormActive();
  };
  const handleLoginError = (error) => {
    errorNoti(error);
  };
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        isUserLogin,
        handleFormActive,
        handleLoginActive,
        handleRegisterActive,
        getUserName,
        login,
        handleLoginError,
        isLoginActive,
        isRegisterActive,
        isFormActive,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
