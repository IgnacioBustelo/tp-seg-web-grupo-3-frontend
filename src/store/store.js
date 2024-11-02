import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice.js";
import { crtcSlice } from "./crtc/crtcSlice.js";

const AUTH_LOCAL_STORAGE_KEY = 'authState';
const CRTC_LOCAL_STORAGE_KEY = 'crtcState';

const saveStateToLocalStorage = (state, key) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const loadStateFromLocalStorage = (key) => {
  const state = localStorage.getItem(key);
  return state ? JSON.parse(state) : undefined;
};

const preloadedState = {
  auth: loadStateFromLocalStorage(AUTH_LOCAL_STORAGE_KEY) || { status: 'not-authenticated', authToken: null },
  crtc: loadStateFromLocalStorage(CRTC_LOCAL_STORAGE_KEY) || { active: { userName: '', rol: '', materiasCursadas: {} } },
};

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    crtc: crtcSlice.reducer,
  },
  preloadedState,
});


// Subscribe to store changes to save auth state to local storage
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state.auth, AUTH_LOCAL_STORAGE_KEY);
  saveStateToLocalStorage(state.crtc, CRTC_LOCAL_STORAGE_KEY);
});