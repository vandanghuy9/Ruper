import React from "react";
import PasswordRecover from "@component/login-register/PasswordRecover";
const PasswordRecoverPage = ({ token }) => {
  return (
    <div class="page-login-register">
      <div class="row">
        <PasswordRecover token={token} />
      </div>
    </div>
  );
};

export default PasswordRecoverPage;
