import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const SELLER_BASE_URL = process.env.REACT_APP_SELLER_BASE_URL;
const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

const ACCESS_TOKEN = localStorage.getItem('token');
const JWTapiSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});
const JWTapiSellertoUser = axios.create({
  baseURL: USER_BASE_URL,
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

const BaseApi = axios.create({
  baseURL: '',
  headers: {
    contentType: 'application/json',
  },
});

const CommonJWTapi = () => {
  // seller user 둘 다 필요한 API
  const sellerToken = localStorage.getItem('sellerToken');
  const userToken = localStorage.getItem('token');
  if (sellerToken !== null) {
    return axios.create({
      baseURL: SELLER_BASE_URL,
      headers: {
        contentType: 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    });
  } else if (userToken !== null) {
    return axios.create({
      baseURL: USER_BASE_URL,
      headers: {
        contentType: 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    });
  }
};

// 상품상세정보 이 미지
const getProductDetailImg = async data => {
  const response = await BaseApi.get(data);
  return response.data;
};

export {
  JWTapiSeller,
  ApiSeller,
  JWTapiSellertoUser,
  CommonJWTapi,
  getProductDetailImg,
};
