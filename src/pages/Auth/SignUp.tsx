import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "App/store";
import AuthInput from "components/Input/AuthInput";
import { authRegister } from "./auth.slice";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import { StyledSignUp } from "./signUp.style";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showOption, setShowOption] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== repeatPassword) return;
    await dispatch(authRegister({ username, email, password }));
    console.log("SignUp Success");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <StyledSignUp>
      <StyledAuth>
        <div className="auth">
          <div className="auth-container">
            {showOption ? (
              <>
                <h2>Sign Up Option</h2>
                <div className="auth-main">
                  <StyledButtonAuth
                    type="button"
                    className="auth-primary"
                    onClick={() => setShowOption(false)}
                  >
                    Sign Up with Email
                  </StyledButtonAuth>
                  <StyledButtonAuth type="button" className="auth-facebook">
                    Sign Up with Facebook
                  </StyledButtonAuth>
                  <StyledButtonAuth type="button" className="auth-google">
                    Sign Up with Google
                  </StyledButtonAuth>
                </div>
              </>
            ) : (
              <>
                <div className="signup-header">
                  <h2>Sign Up with Email</h2>
                  <button onClick={() => setShowOption(true)} type="button" className="signup-back">
                    Back
                  </button>
                </div>
                <div className="auth-main">
                  <AuthInput
                    label="Username"
                    type="text"
                    placeholder="Username"
                    onChange={(e: any) => setUsername(e.target.value)}
                  />
                  <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Email"
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  <AuthInput
                    label="Password"
                    type="password"
                    placeholder="Min 6 characters"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <AuthInput
                    label="Re-type Password"
                    type="password"
                    placeholder="Min 6 characters"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                  <StyledButtonAuth type="button" className="auth-primary" onClick={handleSignUp}>
                    Sign Up
                  </StyledButtonAuth>
                </div>
              </>
            )}
            <div className="auth-no-acount">
              Have an account? <Link to="/signin">Login Here</Link>
            </div>
          </div>
        </div>
      </StyledAuth>
    </StyledSignUp>
  );
};

export default SignUp;
