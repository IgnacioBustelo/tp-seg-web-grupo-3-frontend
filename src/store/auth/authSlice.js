import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    authToken: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.authToken = payload;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, checkingCredentials } = authSlice.actions;
