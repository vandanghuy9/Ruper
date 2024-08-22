"use client";
import React, { useState } from "react";
import { useAuth } from "@context/UserContext";
import handleLogin from "../../authentication/handleAuth";
import ErrorText from "@component/form/ErrorText";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
const Login = () => {
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
    <div className="col-lg-6 col-md-6 col-sm-12 sm-m-b-50">
      <div className="box-form-login">
        <h2>
          <CiUser size={30} />
          Login
          <span></span>
        </h2>
        <div className="box-content">
          <div className="form-login">
            <form action={onLogin} className="login">
              <div className="username">
                <label>
                  Username or email address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="input-text"
                  name="username"
                  id="username"
                />
              </div>
              <div className="password">
                <label htmlFor="password">
                  Password <span className="required">*</span>
                </label>
                <input className="input-text" type="password" name="password" />
              </div>
              <div className="rememberme-lost">
                <div className="remember-me">
                  <input name="rememberme" type="checkbox" value={true} />
                  <label className="inline">Remember me</label>
                </div>
                <div className="lost-password">
                  <Link href="/forgot-password">Lost your password?</Link>
                </div>
              </div>
              {error !== "" && (
                <ErrorText error={error !== ""} message={error} />
              )}

              <div className="button-login">
                <input
                  type="submit"
                  className="button"
                  name="login"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
