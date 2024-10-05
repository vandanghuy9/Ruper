import React from "react";
import PasswordRecover from "@component/login-register/PasswordRecover";
const PasswordRecoverPage = ({ token }) => {
  return (
    <div className="page-login-register">
      <div className="row">
        <PasswordRecover token={token} />
      </div>
    </div>
  );
};

export default PasswordRecoverPage;
