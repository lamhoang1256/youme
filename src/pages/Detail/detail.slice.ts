/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "apis/axiosClient";
import configAPI from "apis/configAPI";
import { RootState } from "App/store";
import { MovieDetail } from "interfaces/api";

interface IParams {
  idMovie: number;
  cate: number;
}

type InitialStateType = {
  isLoading: boolean;
  detailMovie: MovieDetail | null;
};

const initialState: InitialStateType = {
  isLoading: true,
  detailMovie: null,
};

export const fetchDetail = createAsyncThunk("detail/fetchDetail", async (params: IParams) => {
  const { idMovie, cate } = params;
  const { data } = await axiosClient.get(configAPI.getMovieDetail("movieDrama", idMovie, cate));
  return data.data;
});

export const detailSlice = createSlice({
  name: "detail",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.detailMovie = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchDetail.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const selectorDetail = (state: RootState) => state.detail;
