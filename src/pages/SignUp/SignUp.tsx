import { useAppDispatch } from "App/store";
import { useState } from "react";
import { authRegister } from "./auth.slice";
import { StyledSignUp } from "./signUp.style";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fullname = "Nguyen Hoang Lam";
  const photoURL =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  const dispatch = useAppDispatch();
  const handleSignUp = async () => {
    dispatch(authRegister({ fullname, email, password, photoURL }));
    console.log("Success");
  };

  return (
    <StyledSignUp>
      <div className="form">
        <form className="login-form">
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSignUp}>
            register
          </button>
          <p className="message">
            Not registered? <a href="!#">Create an account</a>
          </p>
        </form>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
