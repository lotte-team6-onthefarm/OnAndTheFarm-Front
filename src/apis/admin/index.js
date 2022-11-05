import axios from 'axios';

const ADMIN_BASE_URL = process.env.REACT_APP_ADMIN_BASE_URL;

const ACCESS_TOKEN = localStorage.getItem('token');

const JWTapiAdmin = axios.create({
  baseURL: ADMIN_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

export { JWTapiAdmin };
