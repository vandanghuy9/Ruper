"use client";
import React, { useState } from "react";
import { useAuth } from "@context/UserContext";
import handleLogin from "../../authentication/handleAuth";
import ErrorText from "@component/form/ErrorText";
import { IoIosLogIn } from "react-icons/io";
const Register = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const onLogin = async (formData) => {
    const { userInfor, wishlist } = await handleLogin(formData);
    if (userInfor.status === 401) {
      return setError(userInfor.message);
    }
    login(userInfor);
    return handleSetWishList(wishlist);
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="box-form-login">
        <h2 className="register">
          <IoIosLogIn size={30} />
          Register
          <span></span>
        </h2>
        <div className="box-content">
          <div className="form-register">
            <form action={onLogin} className="register">
              <div className="email">
                <label>
                  Email address <span className="required">*</span>
                </label>
                <input type="email" className="input-text" name="email" />
              </div>
              <div className="password">
                <label>
                  Password <span className="required">*</span>
                </label>
                <input type="password" className="input-text" name="password" />
              </div>
              {error !== "" && (
                <ErrorText error={error !== ""} message={error} />
              )}
              <div className="button-register">
                <input
                  type="submit"
                  className="button"
                  name="register"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
