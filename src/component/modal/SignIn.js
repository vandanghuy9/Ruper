"use client";
import { useState } from "react";
import Link from "next/link";
import handleLogin from "../../authentication/handleAuth";
import { useAuth } from "@context/UserContext";
import { useShopProduct } from "@context/ShopProductContext";
import ErrorText from "@component/form/ErrorText";
export default function Signin({ isRegisterActive, handleRegisterActive, handleFormActive }) {
  const [error, setError] = useState("");
  const { login, handleLoginError } = useAuth();
  const { handleSetWishList } = useShopProduct();
  const onLogin = async (formData) => {
    const { userInfor, wishlist } = await handleLogin(formData);
    if (userInfor.status === 401) {
      return setError(userInfor.message);
    }
    login(userInfor);
    return handleSetWishList(wishlist);
  };
  return (
    <div className={!isRegisterActive ? "form-login active" : "form-login"}>
      <form action={onLogin}>
        <h2>Sign in</h2>
        <div className="content">
          <div className="username">
            <input
              type="text"
              required="required"
              className="input-text"
              name="username"
              id="username"
              placeholder="Your name"
            />
          </div>
          <div className="password">
            <input
              className="input-text"
              required="required"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          {error !== "" && <ErrorText error={error !== ""} message={error} />}
          <div className="rememberme-lost">
            <div className="rememberme">
              <input name="rememberme" type="checkbox" id="rememberme" value={true} />
              <label htmlFor="rememberme" className="inline">
                Remember me
              </label>
            </div>
            <div className="lost_password">
              <Link href="/forget-password">Lost your password?</Link>
            </div>
          </div>
          <div className="button-login">
            <input type="submit" className="button" name="login" value="Login" />
          </div>
          <div className="button-next-reregister" onClick={handleRegisterActive}>
            Create An Account
          </div>
        </div>
      </form>
    </div>
  );
}
