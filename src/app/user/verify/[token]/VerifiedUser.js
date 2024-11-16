"use client";
import { useEffect } from "react";
import { useAuth } from "@context/UserContext";
import { errorNoti } from "@utils/notification/notification";
const VerifiedUser = ({ message, isRegisterSuccess }) => {
  const { register } = useAuth();
  useEffect(() => {
    if (isRegisterSuccess) {
      return register(message);
    }
    return errorNoti(message);
  }, [message, register, isRegisterSuccess]);
  return <div>{message}</div>;
};

export default VerifiedUser;
