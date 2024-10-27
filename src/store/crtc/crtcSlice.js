import { createSlice } from "@reduxjs/toolkit";

export const crtcSlice = createSlice({
  name: "crtc",
  initialState: {
    active: {
      flows: [],
      selectedFlow: null,
      selectedNode: null,
    },
  },
  reducers: {},
});

export const {} = crtcSlice.actions;
