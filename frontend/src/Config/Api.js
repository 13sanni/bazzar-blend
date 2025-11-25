import axios from 'axios';
export const API_URL = "https://bazzar-blend-backend.vercel.app";

// change api
export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
