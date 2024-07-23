import { handleRegister } from "../../authentication/handleAuth";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@context/UserContext";
import ErrorText from "@component/form/ErrorText";

export default function Register({ isRegisterActive, handleLoginActive }) {
  const [error, setError] = useState("");
  const { login, handleLoginError } = useAuth();
  const onRegister = async (formData) => {
    const userInfor = await handleRegister(formData);
    // if (userInfor.status === 401) {
    //   return setError(userInfor.message);
    // }
    // return login(userInfor);
  };

  return (
    <div className={isRegisterActive ? "form-register active" : "form-register"}>
      <form action={handleRegister} className="register">
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
          <div className="button-register">
            <input type="submit" className="button" name="register" value="Register" />
          </div>
          <div className="button-next-login" onClick={handleLoginActive}>
            Already has an account
          </div>
        </div>
      </form>
    </div>
  );
}
