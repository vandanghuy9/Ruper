"use client";
import { createContext, useReducer, useContext, useState } from "react";
import { successNoti, errorNoti } from "@utils/notification/notification";
import { useSearchParams, useRouter } from "next/navigation";
import { handleLogout } from "../authentication/handleAuth";

export const Context = createContext();
export const UserContext = ({ userInfor, children }) => {
  const query = useSearchParams();
  const router = useRouter();
  const initialUser = {
    userInfor: userInfor,
    shippingOption: "hello",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return { ...state, userInfor: action.payload };
      }
      case "LOGOUT": {
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
  const handleLoginActive = () => {
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
  const getUserId = () => {
    return state?.userInfor?._id;
  };

  const login = (userInfor) => {
    dispatch({ type: "LOGIN", payload: userInfor });
    successNoti("Login successfully");
    const redirect = query.get("redirect");
    router.push(`${redirect ? redirect : "/"}`);
    if (isFormActive) {
      handleFormActive();
    }
  };

  const register = (message) => {
    successNoti(message);
    router.push("/");
  };
  const verifyEmail = (res) => {
    successNoti(res);
    handleFormActive();
  };
  const logout = () => {
    handleLogout();
    dispatch({
      type: "LOGOUT",
      payload: { _id: null, name: null, email: null },
    });
    successNoti("Logout successfully");
    return router.push("/");
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
        getUserId,
        isLoginActive,
        isRegisterActive,
        isFormActive,
        logout,
        register,
        verifyEmail,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
