import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import AuthInput from "components/Input/AuthInput";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { toastErrorFirebase } from "helpers/toastErrorFirebase";
import { useAppSelector } from "App/store";
import { PUBLIC_IMAGE } from "constants/path";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import AuthSuccess from "./AuthSuccess";

const StyledSignIn = styled.div``;

const SignIn = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectHome = (timeDelay = 500) => {
    setTimeout(() => navigate("/"), timeDelay);
  };

  const signInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(t("Success Sign In"));
      redirectHome();
    } catch (error: any) {
      if (error.message.includes("wrong-password"))
        toast.error(t("It seems your password was wrong"));
      else toastErrorFirebase(error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success(t("Success Login with Google"));
        redirectHome();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success(t("Success Login with Facebook"));
        redirectHome();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    document.title = t("Sign In Page");
  }, []);

  return (
    <StyledSignIn>
      <StyledAuth>
        <div className="auth">
          <div className="auth-container">
            {currentUser ? (
              <AuthSuccess />
            ) : (
              <div>
                <h2>Welcome to Youme</h2>
                <span className="auth-label">{t("SignIn to continue")}</span>
                <div className="auth-main">
                  <AuthInput
                    label="Email"
                    type="text"
                    placeholder="Email"
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  <AuthInput
                    label={t("Password")}
                    type="password"
                    placeholder={t("Password")}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <StyledButtonAuth
                    type="button"
                    className="auth-primary"
                    onClick={signInWithEmail}
                  >
                    {t("Sign In")}
                  </StyledButtonAuth>
                  <div className="auth-other">
                    <span>Or</span>
                  </div>
                  <StyledButtonAuth
                    type="button"
                    className="auth-facebook"
                    onClick={signInWithFacebook}
                  >
                    <img src={`${PUBLIC_IMAGE}/auth-facebook.png`} alt="facebook" />
                    {t("Sign In with Facebook")}
                  </StyledButtonAuth>
                  <StyledButtonAuth
                    type="button"
                    className="auth-google"
                    onClick={signInWithGoogle}
                  >
                    <img src={`${PUBLIC_IMAGE}/auth-google.png`} alt="google" />
                    {t("Sign In with Google")}
                  </StyledButtonAuth>
                </div>
                <div className="auth-no-acount">
                  {t("Do not have an account?")} <Link to="/sign-up">{t("Sign Up Here")}</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </StyledAuth>
    </StyledSignIn>
  );
};

export default SignIn;
