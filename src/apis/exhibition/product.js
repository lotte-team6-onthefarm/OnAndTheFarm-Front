import { JWTapiAdmin } from '..';

// 모듈등록
const postModuleAdd = async formData => {
  const response = await JWTapiAdmin.post('module/new', formData);
  console.log(response)
  return response.data;
};

export {
  postModuleAdd,
};
