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
} from "firebase/auth";
import AuthInput from "components/input/AuthInput";
import { toastErrorFirebase } from "utils/toastErrorFirebase";
import { useAppSelector } from "App/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import AuthSuccess from "./AuthSuccess";
import { createProfileUser } from "./auth.action";
import { schemaYupSignUp } from "./auth.scheme";

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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaYupSignUp),
  });
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showOption, setShowOption] = useState(true);
  const redirectHome = (timeDelay = 500) => {
    setTimeout(() => navigate("/"), timeDelay);
  };

  const handleSignUpWithEmail = (values: any) => {
    const { username, email, password } = values;
    const signUpWithEmail = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        if (!auth.currentUser) return;
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          username,
          email,
          createdAt: serverTimestamp(),
          avatar: `images/header-avatar.webp`,
          favorites: [],
        });
        toast.success(t("Sign Up Success"));
        redirectHome();
      } catch (error: any) {
        toastErrorFirebase(t(error.message));
      }
    };
    signUpWithEmail();
  };

  const signUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const { user } = response;
      if (!user) return;
      createProfileUser(user);
      toast.success(t("Success Login with Google"));
      redirectHome();
    } catch (error: any) {
      toastErrorFirebase(error.message);
    }
  };

  const signUpWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const { user } = response;
      if (!user) return;
      createProfileUser(user);
      toast.success(t("Success Login with Facebook"));
      redirectHome();
    } catch (error: any) {
      toastErrorFirebase(error.message);
    }
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
                      <img src="images/auth-email.png" alt="email" /> {t("Sign Up with Email")}
                    </StyledButtonAuth>
                    <StyledButtonAuth
                      type="button"
                      className="auth-facebook"
                      onClick={signUpWithFacebook}
                    >
                      <img src="images/auth-facebook.png" alt="facebook" />
                      {t("Sign Up with Facebook")}
                    </StyledButtonAuth>
                    <StyledButtonAuth
                      type="button"
                      className="auth-google"
                      onClick={signUpWithGoogle}
                    >
                      <img src="images/auth-google.png" alt="google" />
                      {t("Sign Up with Google")}
                    </StyledButtonAuth>
                  </div>
                </>
              ) : (
                <form onSubmit={handleSubmit(handleSignUpWithEmail)}>
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
                      name="username"
                      control={control}
                      label="Username"
                      type="text"
                      placeholder={t("Username")}
                      error={errors.username}
                    />
                    <AuthInput
                      name="email"
                      control={control}
                      label="Email"
                      type="email"
                      placeholder="Email"
                      error={errors.email}
                    />
                    <AuthInput
                      name="password"
                      control={control}
                      label="Password"
                      type="password"
                      placeholder={t("Min 8 characters")}
                      error={errors.password}
                    />
                    <AuthInput
                      name="repeatPassword"
                      control={control}
                      label={t("Re-type Password")}
                      type="password"
                      placeholder={t("Min 8 characters")}
                      error={errors.repeatPassword}
                    />
                    <StyledButtonAuth type="submit" className="auth-primary">
                      {t("Sign Up")}
                    </StyledButtonAuth>
                  </div>
                </form>
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
