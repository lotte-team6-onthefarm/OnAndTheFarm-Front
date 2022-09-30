import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsImlkIjoxLCJpYXQiOjE2NjQ1MjIwNTMsImV4cCI6MTY2NDYwODQ1M30.H9BwlWCNmIMh8WRFiPMexuaAVnJS18cb6mcC6ITXJCEhTpQuMEQvOpw3btGtleYAgm2FJMZfLr3Bd_DxmQv2YA';

console.log(BASE_URL);
const JWTapiFileSeller = axios.create({
  baseURL: BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

export default JWTapiFileSeller;
