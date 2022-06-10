import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "firebase-app/firebase-config";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import AuthInput from "components/input/AuthInput";
import { PUBLIC_IMAGE } from "constants/path";
import { toastErrorFirebase } from "utils/toastErrorFirebase";
import { useAppSelector } from "App/store";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import AuthSuccess from "./AuthSuccess";

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

const SignUp = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showOption, setShowOption] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const redirectHome = (timeDelay = 500) => {
    setTimeout(() => navigate("/"), timeDelay);
  };

  const signUpWithEmail = async () => {
    if (password !== repeatPassword) {
      toast.error(t("Password and repeat password not same!"));
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
        avatar: `${PUBLIC_IMAGE}/header-avatar.png`,
        favorites: [],
      });
      toast.success(t("Sign Up Success"));
      redirectHome();
    } catch (error: any) {
      toastErrorFirebase(t(error.message));
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
        console.log(user);
        if (!user) return;
        createProfileUser(user);
        toast.success(t("Success Login with Google"));
        redirectHome();
      })
      .catch((error) => {
        toastErrorFirebase(error.message);
      });
  };

  const signUpWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        if (!user) return;
        createProfileUser(user);
        toast.success(t("Success Login with Facebook"));
        redirectHome();
      })
      .catch((error) => {
        toastErrorFirebase(error.message);
      });
  };

  useEffect(() => {
    document.title = t("Youme - Sign Up");
  }, []);

  return (
    <StyledSignUp>
      <StyledAuth>
        <div className="auth">
          {currentUser ? (
            <div className="auth-container">
              <AuthSuccess />
            </div>
          ) : (
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
                      <img src={`${PUBLIC_IMAGE}/auth-email.png`} alt="email" />{" "}
                      {t("Sign Up with Email")}
                    </StyledButtonAuth>
                    <StyledButtonAuth
                      type="button"
                      className="auth-facebook"
                      onClick={signUpWithFacebook}
                    >
                      <img src={`${PUBLIC_IMAGE}/auth-facebook.png`} alt="facebook" />
                      {t("Sign Up with Facebook")}
                    </StyledButtonAuth>
                    <StyledButtonAuth
                      type="button"
                      className="auth-google"
                      onClick={signUpWithGoogle}
                    >
                      <img src={`${PUBLIC_IMAGE}/auth-google.png`} alt="google" />
                      {t("Sign Up with Google")}
                    </StyledButtonAuth>
                  </div>
                </>
              ) : (
                <>
                  <div className="signup-header">
                    <h2>{t("Sign Up with Email")}</h2>
                    <button
                      onClick={() => setShowOption(true)}
                      type="button"
                      className="signup-back"
                    >
                      {t("Back")}
                    </button>
                  </div>
                  <div className="auth-main">
                    <AuthInput
                      label="Username"
                      type="text"
                      placeholder={t("Username")}
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
                      placeholder={t("Min 6 characters")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <AuthInput
                      label={t("Re-type Password")}
                      type="password"
                      placeholder={t("Min 6 characters")}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <StyledButtonAuth
                      type="button"
                      className="auth-primary"
                      onClick={signUpWithEmail}
                    >
                      {t("Sign Up")}
                    </StyledButtonAuth>
                  </div>
                </>
              )}
              <div className="auth-no-acount">
                {t("Have an account?")} <Link to="/sign-in">{t("Sign In Here")}</Link>
              </div>
            </div>
          )}
        </div>
      </StyledAuth>
    </StyledSignUp>
  );
};

export default SignUp;
