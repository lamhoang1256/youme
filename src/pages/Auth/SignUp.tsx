import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthInput from "components/Input/AuthInput";
import { toast } from "react-toastify";
import { auth, db } from "firebase-app/firebase-config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { StyledAuth, StyledButtonAuth } from "./auth.style";

const StyledSignUp = styled.div`
  .signup {
    &-header {
      display: flex;
      justify-content: space-between;
    }
    &-back {
      background-color: transparent;
      color: #fff;
    }
  }
`;

const publicImage = `${process.env.REACT_APP_PUBLIC}/images`;

const SignUp = () => {
  const navigate = useNavigate();
  const [showOption, setShowOption] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const signUpWithEmail = async () => {
    if (password !== repeatPassword) {
      toast.error("Password and repeat password not same !");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser) return;
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        username,
        email,
        createdAt: serverTimestamp(),
        avatar: `${publicImage}/header-avatar.png`,
        favorites: [],
      });
      toast.success("Sign Up Success");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const createProfileUser = (user: User) => {
    setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: user.displayName,
      email: user.email,
      createdAt: serverTimestamp(),
      avatar: user.photoURL,
      favorites: [],
    });
  };

  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        if (!user) return;
        createProfileUser(user);
        toast.success("Success Login with Google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const signUpWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        if (!user) return;
        createProfileUser(user);
        toast.success("Success Login with Facebook");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    document.title = "Sign Up Page";
  }, []);

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
                    <img src={`${publicImage}/auth-email.png`} alt="email" /> Sign Up with Email
                  </StyledButtonAuth>
                  <StyledButtonAuth
                    type="button"
                    className="auth-facebook"
                    onClick={signUpWithFacebook}
                  >
                    <img src={`${publicImage}/auth-facebook.png`} alt="facebook" />
                    Sign Up with Facebook
                  </StyledButtonAuth>
                  <StyledButtonAuth
                    type="button"
                    className="auth-google"
                    onClick={signUpWithGoogle}
                  >
                    <img src={`${publicImage}/auth-google.png`} alt="google" />
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
                  <StyledButtonAuth
                    type="button"
                    className="auth-primary"
                    onClick={signUpWithEmail}
                  >
                    Sign Up
                  </StyledButtonAuth>
                </div>
              </>
            )}
            <div className="auth-no-acount">
              Have an account? <Link to="/sign-in">Login Here</Link>
            </div>
          </div>
        </div>
      </StyledAuth>
    </StyledSignUp>
  );
};

export default SignUp;
