const toLocaleString = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 현재날짜
const getDate = () => {
  let today = new Date();
  // const dateString = getDateFormat(today);
  return today;
};

const addDays = (date, days) => {
  // 지정 날짜 , 추가 일자
  const clone = new Date(date);
  clone.setDate(clone.getDate() + days);
  return clone;
};

const getDateFormat = date => {
  //날짜포맷 변경 (YYYY-MM-DD)
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let dateString = year + '-' + month + '-' + day;

  return dateString;
};

const getDateDotFormat = date => {
  //날짜포맷 변경 (YYYY.MM.DD)
  let replaced_str = date.replace(/-/g, '.');

  return replaced_str;
};

// 날짜 시간 자르기
const getNoTimeDate = date => {
  //2022.10.14
  return date.substr(0, 10);
};

// 날짜 시간 자르기
const getNoSecDate = date => {
  //2022.10.14 10:46
  return date.substr(0, 16);
};

// 현재시간 - 지정시간
const getGoneTime = data => {
  const today = new Date();
  const timeValue = new Date(data);
  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60,
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
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
  getNoSecDate,
  getOrderNumber,
  getDateDotFormat,
  getGoneTime,
};
