import { JWTapiUser, ApiUser } from '../user/index';

// 메인페이지 전시
const getAllMainModule = async data => {
  console.log('너 불러?');
  let response;
  if (localStorage.getItem('token') === null) {
    response = await ApiUser.get(`exhibition/all`);
    return response.data.data;
  }
  response = await JWTapiUser.get(`exhibition/all`);
  return response.data.data;
};

// 배너 데이터 호출
const getAllMainBanner = async (dataToolId, itemsId) => {
  console.log(dataToolId, itemsId, '배너 데이터툴 호출');
  let response;
  if (localStorage.getItem('token') === null) {
    response = await ApiUser.get(
      `data-call/banner?dataToolId=${dataToolId}&itemsId=${itemsId}`,
    );
    return response.data.data;
  }
  response = await JWTapiUser.get(
    `data-call/banner?dataToolId=${dataToolId}&itemsId=${itemsId}`,
  );
  return response.data.data;
};

// 뱃지 데이터 호출
const getAllMainBadge = async (dataToolId, itemsId) => {
  console.log(dataToolId, itemsId, '들어와?');
  let response;
  if (localStorage.getItem('token') === null) {
    response = await ApiUser.get(
      `data-call/badge?dataToolId=${dataToolId}&itemsId=${itemsId}`,
    );
    return response.data.data;
  }
  response = await JWTapiUser.get(
    `data-call/badge?dataToolId=${dataToolId}&itemsId=${itemsId}`,
  );
  return response.data.data;
};

// 상품 데이터 호출
const getAllMainProduct = async (dataToolId, itemsId) => {
  let response;
  if (localStorage.getItem('token') === null) {
    response = await ApiUser.get(
      `data-call/product?dataToolId=${dataToolId}&itemsId=${itemsId}`,
    );
    return response.data.data;
  }
  response = await JWTapiUser.get(
    `data-call/product?dataToolId=${dataToolId}&itemsId=${itemsId}`,
  );
  return response.data.data;
};

// sns 데이터 호출
const getAllMainSNS = async (dataToolId, itemsId) => {
  let response;
  if (localStorage.getItem('token') === null) {
    response = await ApiUser.get(
      `data-call/sns?dataToolId=${dataToolId}&itemsId=${itemsId}`,
    );
    return response.data.data;
  }
  response = await JWTapiUser.get(
    `data-call/sns?dataToolId=${dataToolId}&itemsId=${itemsId}`,
  );
  return response.data.data;
};

export {
  getAllMainModule,
  getAllMainBanner,
  getAllMainBadge,
  getAllMainProduct,
  getAllMainSNS,
};
