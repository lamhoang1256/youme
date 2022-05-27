import { loginAPi } from "apis/loginApi";
import AuthInput from "components/Input/AuthInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButtonLogin, StyledLogin } from "./login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    loginAPi({ email, password });
    console.log("Success Login");
  };
  return (
    <StyledLogin>
      <div className="login">
        <div className="login-container">
          <h2>Welcome to Youme</h2>
          <span className="login-label">Login to continue</span>
          <div className="login-main">
            <AuthInput
              label="Email"
              type="text"
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <AuthInput
              label="Password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButtonLogin type="button" className="login-primary" onClick={handleSignIn}>
              Login
            </StyledButtonLogin>
            <div className="login-other">
              <span>Or</span>
            </div>
            <StyledButtonLogin type="button" className="login-facebook">
              Login with Facebook
            </StyledButtonLogin>
            <StyledButtonLogin type="button" className="login-google">
              Login with Google
            </StyledButtonLogin>
          </div>
          <div className="login-no-acount">
            Dont have an account? <Link to="/">Sign Up Here</Link>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
