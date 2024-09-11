"use client";
import React, { useState } from "react";
import { useAuth } from "@context/UserContext";
import { handleRecoverPassword } from "../../authentication/handleAuth";
import ErrorText from "@component/form/ErrorText";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { errorNoti, successNoti } from "@utils/notification/notification";
import { recoverPassword } from "@services/userService";
const PasswordRecover = ({ token }) => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const onRecoverPassword = async (formData) => {
    const res = await handleRecoverPassword(formData);
    if (res.status === false) {
      return setError(res.message);
    }
    recoverPassword({ ...res, token })
      .then((res) => {
        setError("");
        router.push("/");
        return successNoti(res.message);
      })
      .catch((e) => {
        errorNoti(e.message);
      });
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 sm-m-b-50 offset-md-3">
      <div className="box-form-login">
        <h2>
          <CiUser size={30} />
          Set new password
          <span></span>
        </h2>
        <div className="box-content">
          <div className="form-login">
            <form action={onRecoverPassword} className="login">
              <div className="username">
                <label>
                  New password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  className="input-text"
                  name="new_password"
                  id="username"
                />
              </div>
              <div className="password">
                <label htmlFor="password">
                  Confirm password <span className="required">*</span>
                </label>
                <input
                  className="input-text"
                  type="password"
                  name="confirm_password"
                />
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

export default PasswordRecover;
