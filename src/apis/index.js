import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const SELLER_BASE_URL = process.env.REACT_APP_SELLER_BASE_URL;
// const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsImlkIjoxLCJpYXQiOjE2NjQ4NDk3MzYsImV4cCI6MTY2NDkzNjEzNn0.i05reiMUiVgEDmh0Y_BcphctFbEMvQnSU1e3jCjeFbYzYwbna2FFo7zC37TQh6VMV0x3v_JyfVaZHwuY5tU87g';
const JWTapiSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

const ApiSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
  },
});

export { JWTapiSeller, ApiSeller };
