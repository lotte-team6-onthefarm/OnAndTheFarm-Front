import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const SELLER_BASE_URL = process.env.REACT_APP_SELLER_BASE_URL;
// const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsImlkIjoxLCJpYXQiOjE2NjQ3ODgzNjUsImV4cCI6MTY2NDg3NDc2NX0.4hvyDRf9m1W5-fOZGLZzeoqDlLkko2SaNdSz4tRWB2c9RZ94_4cpfSOqDnNinIabtf1M1qqA4xCFlrRfdoaiwA';
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
