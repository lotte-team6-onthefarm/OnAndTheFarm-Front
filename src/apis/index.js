import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const SELLER_BASE_URL = process.env.REACT_APP_SELLER_BASE_URL;
// const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsImlkIjoxLCJpYXQiOjE2NjQ5MzU5MDIsImV4cCI6MTY2NTAyMjMwMn0.Tgrn42xyotGm7wCierfbQkCUeFIqVkaHnveFrCNOflvZwot_qZm27LS5SlW0pJWskYqXWOtSTylmDpdsLeJjeg';
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
