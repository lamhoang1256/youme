import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import AuthInput from "components/Input/AuthInput";
import styled from "styled-components";
import { StyledAuth, StyledButtonAuth } from "./auth.style";

const StyledSignIn = styled.div``;

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Success Sign In");
      setTimeout(() => navigate("/"), 500);
    } catch (error: any) {
      if (error.message.includes("wrong-password")) toast.error("It seems your password was wrong");
      else toast.error(error.message.split("Firebase: ")[1]);
    }
  };

  useEffect(() => {
    document.title = "Sign In Page";
  }, []);

  return (
    <StyledSignIn>
      <StyledAuth>
        <div className="auth">
          <div className="auth-container">
            <h2>Welcome to Youme</h2>
            <span className="auth-label">SignIn to continue</span>
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
                Sign In
              </StyledButtonAuth>
              <div className="auth-other">
                <span>Or</span>
              </div>
              <StyledButtonAuth type="button" className="auth-facebook">
                Sign In with Facebook
              </StyledButtonAuth>
              <StyledButtonAuth type="button" className="auth-google">
                Sign In with Google
              </StyledButtonAuth>
            </div>
            <div className="auth-no-acount">
              Dont have an account? <Link to="/sign-up">Sign Up Here</Link>
            </div>
          </div>
        </div>
      </StyledAuth>
    </StyledSignIn>
  );
};

export default SignIn;
