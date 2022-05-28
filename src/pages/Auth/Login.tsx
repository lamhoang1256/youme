import { useState } from "react";
import { Link } from "react-router-dom";
import { loginAPi } from "apis/loginApi";
import AuthInput from "components/Input/AuthInput";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import { StyledLogin } from "./login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    loginAPi({ email, password });
    console.log("Success Login");
  };
  return (
    <StyledLogin>
      <StyledAuth>
        <div className="auth">
          <div className="auth-container">
            <h2>Welcome to Youme</h2>
            <span className="auth-label">Login to continue</span>
            <div className="auth-main">
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
              <StyledButtonAuth type="button" className="auth-primary" onClick={handleSignIn}>
                Login
              </StyledButtonAuth>
              <div className="auth-other">
                <span>Or</span>
              </div>
              <StyledButtonAuth type="button" className="auth-facebook">
                Login with Facebook
              </StyledButtonAuth>
              <StyledButtonAuth type="button" className="auth-google">
                Login with Google
              </StyledButtonAuth>
            </div>
            <div className="auth-no-acount">
              Dont have an account? <Link to="/register">Sign Up Here</Link>
            </div>
          </div>
        </div>
      </StyledAuth>
    </StyledLogin>
  );
};

export default Login;
