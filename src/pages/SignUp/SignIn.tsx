import { loginAPi } from "apis/loginApi";
import { logout } from "firebase-app/firebase-action";
import { useState } from "react";
// import { authLogin } from "./auth.slice";
import { StyledSignUp } from "./signUp.style";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    // dispatch(authLogin({ email, password }));
    loginAPi({ email, password });
    console.log("Success Login");
  };

  return (
    <StyledSignUp>
      <div className="form">
        <form className="login-form">
          <span>Email</span>
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSignIn} style={{ background: "#3d6ef7" }}>
            login
          </button>
          <button type="button" onClick={() => logout()} style={{ background: "#ff0000" }}>
            logout
          </button>
          <p className="message">
            Not registered? <a href="!#">Create an account</a>
          </p>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default SignIn;
