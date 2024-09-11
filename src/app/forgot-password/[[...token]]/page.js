import React from "react";
import ForgotPassword from "./ForgotPassword";
import PasswordRecoverPage from "./PasswordRecoverPage";
export const metadata = {
  title: "Forgot Password | Ruper",
};

const ForgotPasswordPage = async ({ params, searchParams }) => {
  const token = params.token;
  if (token === undefined) return <ForgotPassword />;
  return <PasswordRecoverPage token={token} />;
};

export default ForgotPasswordPage;
