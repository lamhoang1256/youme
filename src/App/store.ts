import { configureStore } from "@reduxjs/toolkit";
import { detailSlice } from "pages/Detail/detail.slice";
import { homeSlice } from "pages/Home/home.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    detail: detailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
