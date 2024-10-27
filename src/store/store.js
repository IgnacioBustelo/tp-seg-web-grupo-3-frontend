import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice.js";
import { crtcSlice } from "./crtc/crtcSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    crtc: crtcSlice.reducer,
  },
});
