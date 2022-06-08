/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  currentUser: any;
  loading: boolean;
  error?: any;
}

const initialState: AppState = {
  currentUser: null,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
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

export const { setCurrentUser, logout } = appSlice.actions;
export default appSlice.reducer;
