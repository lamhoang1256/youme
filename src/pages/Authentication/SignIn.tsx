/* eslint-disable no-underscore-dangle */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "App/store";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/input/Input";
import { toastErrorFirebase } from "utils/toastError";
import Field from "components/field/Field";
import ErrorMessage from "components/notification/ErrorMessage";
import Label from "components/label/Label";
import { StyledAuth, StyledButtonAuth } from "./auth.style";
import { createProfileUser } from "./auth.action";
import { schemaYupSignIn } from "./auth.scheme";
import AuthSuccess from "./AuthSuccess";

const StyledSignIn = styled.div``;

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaYupSignIn),
  });

  const redirectHome = (timeDelay = 500) => {
    setTimeout(() => navigate("/"), timeDelay);
  };

  const handleSignInWithEmail = (values: any) => {
    const { email, password } = values;
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
    signInWithEmail();
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response: any = await signInWithPopup(auth, provider);
      const { user } = response;
      if (response._tokenResponse.isNewUser) {
        createProfileUser(user);
      }
      toast.success(t("Success Login with Google"));
      redirectHome();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const response: any = await signInWithPopup(auth, provider);
      const { user } = response;
      if (response._tokenResponse.isNewUser) {
        createProfileUser(user);
      }
      toast.success(t("Success Login with Facebook"));
      redirectHome();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.title = t("Youme - Sign In");
  }, []);

  return (
    <StyledSignIn>
      <StyledAuth>
        <div className="auth">
          <div className="auth-container">
            {currentUser ? (
              <AuthSuccess />
            ) : (
              <form onSubmit={handleSubmit(handleSignInWithEmail)}>
                <h2>Welcome to Youme</h2>
                <span className="auth-label">{t("SignIn to continue")}</span>
                <div className="auth-main">
                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="text" placeholder="Email" control={control} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  </Field>
                  <Field>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      name="password"
                      type="password"
                      placeholder={t("Password")}
                      control={control}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                  </Field>
                  <StyledButtonAuth type="submit" className="auth-primary">
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
                    <img src="images/auth-facebook.png" alt="facebook" />
                    {t("Sign In with Facebook")}
                  </StyledButtonAuth>
                  <StyledButtonAuth
                    type="button"
                    className="auth-google"
                    onClick={signInWithGoogle}
                  >
                    <img src="images/auth-google.png" alt="google" />
                    {t("Sign In with Google")}
                  </StyledButtonAuth>
                </div>
                <div className="already-account">
                  {t("Do not have an account?")} <Link to="/sign-up">{t("Sign Up Here")}</Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </StyledAuth>
    </StyledSignIn>
  );
};

export default SignIn;
