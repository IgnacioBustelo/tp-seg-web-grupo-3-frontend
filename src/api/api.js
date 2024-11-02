import axios from "axios";
import {store} from "../store/store";

const authToken = store.getState().auth.authToken;
export const api = axios.create({
    //TODO completar cuando se tengan los endpoints del back
    baseURL: "http://localhost:8080/", headers: {
        'Authorization': 'Bearer ' + authToken,
    }
});
