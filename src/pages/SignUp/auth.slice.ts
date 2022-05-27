/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi } from "apis/registerApi";

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
  async (user: { fullname: string; email: string; password: string; photoURL: string }) => {
    return registerApi(user);
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
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.currentUser = action.payload;
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
