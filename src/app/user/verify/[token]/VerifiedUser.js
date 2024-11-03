"use client";
import { useEffect } from "react";
import { useAuth } from "@context/UserContext";
const VerifiedUser = ({ message }) => {
  const { register } = useAuth();
  useEffect(() => {
    register(message);
  }, [message, register]);
  return <div>Verified account successfully</div>;
};

export default VerifiedUser;
