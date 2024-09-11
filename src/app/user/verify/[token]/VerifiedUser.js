"use client";
import { useEffect } from "react";
import { useAuth } from "@context/UserContext";
const VerifiedUser = ({ message }) => {
  const { register } = useAuth();
  useEffect(() => {
    register(message);
  }, [message]);
  return <div>Verified account successfully</div>;
};

export default VerifiedUser;
