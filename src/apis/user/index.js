import axios from 'axios';

const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

let ACCESS_TOKEN = localStorage.getItem('token');
let REFRESH_TOKEN = localStorage.getItem('refreshToken');

let JWTapiUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

const ApiUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
  },
});

let JWTapiLogoutUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
    refresh: REFRESH_TOKEN,
  },
});

JWTapiUser.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response && err.response.status === 406) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        // 리프레시 토큰으로 access토큰 받아오기
        const data = await axios({
          url: `${USER_BASE_URL}members/refresh`,
          method: 'post',
          data: {
            accessToken: ACCESS_TOKEN,
            refreshToken: refreshToken,
          },
        });
        if (data) {
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('token');
          localStorage.setItem('token', data.data.data.token.token);
          localStorage.setItem(
            'refreshToken',
            data.data.data.token.refreshToken,
          );
          ACCESS_TOKEN = data.data.data.token.token;

          // api update
          JWTapiUser = axios.create({
            baseURL: USER_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiUser.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);

JWTapiLogoutUser.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response && err.response.status === 406) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        // 리프레시 토큰으로 access토큰 받아오기
        const data = await axios({
          url: `${USER_BASE_URL}members/refresh`,
          method: 'post',
          data: {
            accessToken: ACCESS_TOKEN,
            refreshToken: refreshToken,
          },
        });
        if (data) {
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('token');
          localStorage.setItem('token', data.data.data.token.token);
          localStorage.setItem(
            'refreshToken',
            data.data.data.token.refreshToken,
          );
          ACCESS_TOKEN = data.data.data.token.token;

          // api update
          JWTapiUser = axios.create({
            baseURL: USER_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiUser.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);

export { JWTapiUser, ApiUser, JWTapiLogoutUser };
