import Login from "@component/login-register/Login";
import Register from "@component/login-register/Register";
const LoginRegister = () => {
  return (
    <div className="page-login-register">
      <div className="row">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default LoginRegister;
