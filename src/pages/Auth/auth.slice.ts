/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export interface AuthState {
  currentUser: any;
  loading: boolean;
  error?: any;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const authRegister = createAsyncThunk(
  "auth/register",
  async (user: { username: string; email: string; password: string }) => {
    const { username, email, password } = user;
    await createUserWithEmailAndPassword(auth, email, password);
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username,
      email,
      password,
      createdAt: serverTimestamp(),
      favorites: [],
    });
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authRegister.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
