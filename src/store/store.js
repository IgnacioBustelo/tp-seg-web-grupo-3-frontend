import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice.js";
import { crtcSlice } from "./crtc/crtcSlice.js";

const LOCAL_STORAGE_KEY = 'authState';

const saveAuthStateToLocalStorage = (state) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

const loadAuthStateFromLocalStorage = () => {
  const state = localStorage.getItem(LOCAL_STORAGE_KEY);
  return state ? JSON.parse(state) : undefined;
};

const preloadedState = {
  auth: loadAuthStateFromLocalStorage() || { status: 'not-authenticated', authToken: null },
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
  saveAuthStateToLocalStorage(state.auth);
});