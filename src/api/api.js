import axios from "axios";

export const api = axios.create({ //TODO completar cuando se tengan los endpoints del back
    baseURL: 'http://localhost:8080/'
})