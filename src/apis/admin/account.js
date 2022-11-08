import { JWTapiAdmin } from '.';

// 전시구좌 추가
const postAccountNew = async data => {
  const response = await JWTapiAdmin.post('/exhibition/account/new', data);
  return response;
};
// {
//   "exhibitionAccountCategoryId":2,
//   "exhibitionAccountName" : "SNS 10월 인기 셀러 순위 top10",
//   "exhibitionAccountStartTime" : "20221211081344",
//   "exhibitionAccountEndTime" : "20221211301344",
//   "exhibitionAccountDetail" : "SNS 10월 인기 셀러 순위 top10을 나타내는 구좌",
//   "exhibitionItemsFormRequests" : [
//    {
//       "exhibitionItemsName" : "김춘자",

//       "exhibitionItemsDetail" : "배 농장주 김춘자",

//       "exhibitionItemFormRequests":[
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":1,
//               "exhibitionItemPriority":1,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           },
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":2,
//               "exhibitionItemPriority":2,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           }
//       ]
//   },
//   {
//       "exhibitionItemsName" : "박순기",

//       "exhibitionItemsDetail" : "사과 농장주 박순기",

//       "exhibitionItemFormRequests":[
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":1,
//               "exhibitionItemPriority":1,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           },
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":2,
//               "exhibitionItemPriority":2,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           }
//       ]
//   },
//   {
//       "exhibitionItemsName" : "최명의",

//       "exhibitionItemsDetail" : "귤 농장주 최명의",

//       "exhibitionItemFormRequests":[
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":1,
//               "exhibitionItemPriority":1,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           },
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":2,
//               "exhibitionItemPriority":2,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           }
//       ]
//   },
//   {
//       "exhibitionItemsName" : "소재호",

//       "exhibitionItemsDetail" : "포도 농장주 소재호",

//       "exhibitionItemFormRequests":[
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":3,
//               "exhibitionItemPriority":1,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           },
//           {
//               "exhibitionCategoryId":2,
//               "exhibitionItemNumber":4,
//               "exhibitionItemPriority":2,
//               "exhibitionItemStartTime":20221027,
//               "exhibitionItemEndTime":20221028,
//               "exhibitionItemCreatedAt":202020200202020,
//               "exhibitionItemModifiedAt":20202020202021
//           }
//       ]
//   }
// ]
// }
// 전시구좌 수정
const putAccountUpdate = async data => {
  const response = await JWTapiAdmin.put('/exhibition/account/update', data);
  return response;
};

// 전시구좌 삭제
const putAccountDelete = async data => {
  const response = await JWTapiAdmin.put('/exhibition/account/delete', data);
  return response;
};
// {
//   "exhibitionAccountId" : 100065
// }

// 전시 카테고리 전체 조회 - 카테고리 선택시 사용
const getCategory = async data => {
  const response = await JWTapiAdmin.get('/exhibition/category', data);
  return response;
};

// 전시카테고리 별 전시구좌 조회 - 전시구좌 선택시 사용
const getExhibitionCategoryNo = async exhibitionCategoryNo => {
  const response = await JWTapiAdmin.get(
    `/exhibition/account/by-category/${exhibitionCategoryNo}`,
  );
  return response;
};

// 전시 구좌 내 소재리스트 불러오기
const getExhibitionItems = async exhibitionAccountId => {
  const response = await JWTapiAdmin.get(
    `/exhibition/accout/items/${exhibitionAccountId}`,
  );
  return response.data.data;
};

// 전시 소재리스트 내 소재들 불러오기
const getExhibitionAllItem = async exhibitionAccountId => {
  const response = await JWTapiAdmin.get(
    `/exhibition/account/all-item/${exhibitionAccountId}`,
  );
  return response.data.data;
};

// 전시구좌 상세보기
const getExhibitionAccountId = async exhibitionAccountId => {
  const response = await JWTapiAdmin.get(
    `/exhibition/account/detail/${exhibitionAccountId}`,
  );
  return response.data.data;
};

export {
  postAccountNew,
  putAccountUpdate,
  putAccountDelete,
  getCategory,
  getExhibitionCategoryNo,
  getExhibitionItems,
  getExhibitionAllItem,
  getExhibitionAccountId,
};
