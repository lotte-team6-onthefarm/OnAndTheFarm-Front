import { JWTapiAdmin } from '..';

// 모듈등록
const postModuleAdd = async formData => {
  const response = await JWTapiAdmin.post('module/new', formData);
  return response.data;
};

// 모듈목록 페이지네이션
const getModuleList = async data => {
  const response = await JWTapiAdmin.get(`module/list/all/newest/${data.page}`);
  return response.data.data;
};

// 전체 모듈목록
const getAllModuleList = async data => {
  const response = await JWTapiAdmin.get(`module/list/all`);
  return response.data.data;
};

export {
  postModuleAdd,
  getModuleList,
  getAllModuleList,
};
