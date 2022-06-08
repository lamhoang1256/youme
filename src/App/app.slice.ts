/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = {};
    },
  },
});

export const { setCurrentUser, logout } = authSlice.actions;
export default authSlice.reducer;
