import Login from "@component/login-register/Login";
import Register from "@component/login-register/Register";
const LoginRegister = () => {
  return (
    <div class="page-login-register">
      <div class="row">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default LoginRegister;
