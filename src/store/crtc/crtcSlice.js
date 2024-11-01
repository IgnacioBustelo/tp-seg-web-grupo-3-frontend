import { createSlice } from "@reduxjs/toolkit";

export const crtcSlice = createSlice({
  name: "crtc",
  initialState: {
    active: {
      userName: "Pepito",
      rol: "admin",
      materiasCursadas: {
        Física: 8,
        Algebra: 7,
      },
    },
  },
  reducers: {
    setInitialState: (state, action) => {
      state.active = action.payload;
    },
    setMaterias: (state, action) => {
      console.log(state);
      console.log(action);
      state.active = {
        userName: state.active.userName,
        rol: state.active.rol,
        materiasCursadas: action.payload,
      };
    },
  },
});

export const { setMaterias } = crtcSlice.actions;
