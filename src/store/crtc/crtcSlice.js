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
      console.log("STATE HOLA:", state);
      console.log("ACTION HOLA:", action);
      state.active = {
        userName: state.active.userName,
        rol: state.active.rol,
        materiasCursadas: action.payload,
      };
    },
    setUsername: (state, action) => {
      state.active = {
        userName: action.payload,
        rol: state.active.rol,
        materiasCursadas: state.active.materiasCursadas,
      };
    },
    setRol: (state, action) => {
      state.active = {
        userName: state.active.userName,
        rol: action.payload,
        materiasCursadas: state.active.materiasCursadas,
      };
    },
  },
});

export const {
  setMaterias,
  setUsername,
  setRol } = crtcSlice.actions;
