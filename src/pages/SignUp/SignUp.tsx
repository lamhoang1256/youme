import AuthInput from "components/Input/AuthInput";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useAppDispatch } from "App/store";
// import { authRegister } from "./auth.slice";
import { StyledButtonLogin, StyledLogin } from "./login.style";
import { StyledSignUp } from "./signUp.style";

const SignUp = () => {
  const [showOption, setShowOption] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  console.log(email, password, username, repeatPassword);
  // const fullname = "Nguyen Hoang Lam";
  // const photoURL =
  //   "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  // const dispatch = useAppDispatch();
  // const handleSignUp = async () => {
  //   dispatch(authRegister({ fullname, email, password, photoURL }));
  //   console.log("SignUp Success");
  // };

  return (
    <StyledSignUp>
      <StyledLogin>
        <div className="login">
          <div className="login-container">
            {showOption ? (
              <>
                <h2>Sign Up Option</h2>
                <div className="login-main">
                  <StyledButtonLogin
                    type="button"
                    className="login-primary"
                    onClick={() => setShowOption(false)}
                  >
                    Sign Up with Email
                  </StyledButtonLogin>
                  <StyledButtonLogin type="button" className="login-facebook">
                    Sign Up with Facebook
                  </StyledButtonLogin>
                  <StyledButtonLogin type="button" className="login-google">
                    Sign Up with Google
                  </StyledButtonLogin>
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
                <div className="login-main">
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
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <AuthInput
                    label="Re-type Password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                  <StyledButtonLogin type="button" className="login-primary">
                    Sign Up
                  </StyledButtonLogin>
                </div>
              </>
            )}
            <div className="login-no-acount">
              Dont have an account? <Link to="/">Sign Up Here</Link>
            </div>
          </div>
        </div>
      </StyledLogin>
    </StyledSignUp>
  );
};

export default SignUp;
