import { handleVerifyEmail } from "../../authentication/handleAuth";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@context/UserContext";
import ErrorText from "@component/form/ErrorText";
import { errorNoti } from "@utils/notification/notification";

export default function Register({ isRegisterActive, handleLoginActive }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { verifyEmail } = useAuth();
  const onRegister = async (formData) => {
    setLoading(true);
    handleVerifyEmail(formData)
      .then((res) => {
        verifyEmail(res.message);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  return (
    <div
      className={isRegisterActive ? "form-register active" : "form-register"}
    >
      <form action={onRegister} className="register">
        <h2>REGISTER</h2>
        <div className="content">
          <div className="email">
            <input
              type="email"
              className="input-text"
              placeholder="Email"
              name="email"
              id="reg_email"
            />
          </div>
          <div className="password">
            <input
              type="password"
              className="input-text"
              placeholder="Password"
              name="password"
              id="reg_password"
            />
          </div>
          <ErrorText error={error !== ""} message={error} />
          <div className="button-register">
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Processing" : "Register"}
            </button>
          </div>
          <div className="button-next-login" onClick={handleLoginActive}>
            Already has an account
          </div>
        </div>
      </form>
    </div>
  );
}
