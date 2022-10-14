const toLocaleString = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 현재날짜
const getDate = () => {
  let today = new Date();
  const dateString = getDateFormat(today);
  return dateString;
};

const addDays = (date, days) => {
  // 지정 날짜 , 추가 일자
  const clone = new Date(date);
  clone.setDate(date.getDate() + days);
  return getDateFormat(clone); // YYYY-MM-DD 형식에 맞게 return
};

const getDateFormat = date => {
  //날짜포맷 변경 (YYYY-MM-DD)
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let dateString = year + '-' + month + '-' + day;

  return dateString;
};

// 날짜 시간 자르기
const getNoTimeDate = date => {
  //2022.10.14 10:46:34
  return date.substr(0, 10);
};

// 주문번호 자르기
const getOrderNumber = number => {
  //7563a2f7-057a-493f-8dd8-021fed01c79b
  return number.substr(-12);
};
export {
  toLocaleString,
  getDate,
  addDays,
  getDateFormat,
  getNoTimeDate,
  getOrderNumber,
};
