import { JWTapiAdmin } from '.';

// 임시 전시 생성
const postTemporaryNew = async data => {
  const response = await JWTapiAdmin.post('/exhibition/temporary/new', data);
  return response;
};
// {
//     "exhibitionTemporaryCategoryId" : 1,
//     "exhibitionTemporaryModuleName" : "module2",
//     "exhibitionTemporaryDataPicker" : 100091,
//     "exhibitionTemporaryAccountId" : 100078,
//     "exhibitionTemporaryItemsId" : 100079,
//     "exhibitionTemporaryPriority" : 99
// }

// 임시 전시 수정
const putTemporaryUpdate = async data => {
  const response = await JWTapiAdmin.put(
    '/exhibition/temporary/update/priority',
    data,
  );
  return response;
};
// {
//     "exhibitionTemporaryId" : 100092,
//     "exhibitionTemporaryCategoryId" : 1,
//     "exhibitionTemporaryModuleName" : "modulenameupdated",
//     "exhibitionTemporaryDataPicker" : 100091,
//     "exhibitionTemporaryAccountId" : 100078,
//     "exhibitionTemporaryItemsId" : 100079,
//     "exhibitionTemporaryPriority": 99
// }

// 임시 전시 삭제
const putTemporaryDelete = async data => {
  const response = await JWTapiAdmin.put('/exhibition/temporary/delete', data);
  return response;
};
// {
//     "exhibitionTemporaryId" : 100092
// }

// 임시 전시 전체 조회
const getTemporaryAll = async time => {
  const response = await JWTapiAdmin.get(`/exhibition/temporary/${time}`);
  return response.data.data;
};

// 임시 전시 적용
const putTemporaryApply = async data => {
  const response = await JWTapiAdmin.put('/exhibition/temporary/apply', data);
  return response;
};
// {
//     "exhibitionTemporaryIds":[100093, 100094]
// }

export {
  postTemporaryNew,
  putTemporaryUpdate,
  putTemporaryDelete,
  getTemporaryAll,
  putTemporaryApply,
};
