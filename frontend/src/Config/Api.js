import axios from 'axios';
export const API_URL = "http://localhost:8080";
export const DEPLOYED_URL = "https://bazzar-blend-backend.vercel.app";
// change api
export const api = axios.create({
    baseURL:DEPLOYED_URL || API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
