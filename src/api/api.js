import axios from "axios";
import {store} from "../store/store";

export const api = axios.create({
    //TODO completar cuando se tengan los endpoints del back
    baseURL: "http://localhost:8080/"
});

api.interceptors.request.use((config) => {
    const token = store.getState().auth.authToken;

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});
