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

const arrayDays = (date, days, status) => {
  // 날짜 배열로 반환 (날짜, 기간, 이전or이후[before,after])
  const arrayDays = [getDateFormat(date)];
  if (status === 'before') {
    for (let i = 1; i < days; i++) {
      arrayDays.unshift(getDateFormat(addDays(date, -i)));
    }
  } else if (status === 'after') {
    for (let i = 1; i < days; i++) {
      arrayDays.push(getDateFormat(addDays(date, i)));
    }
  }
  return arrayDays;
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

const getDateNoConnect = date => {
  // 날짜포맷 변경 (YYYYMMDDHHMMSS)
  let replaced_str =
    date.replace(/-/g, '').replace(/T/g, '').replace(/:/g, '') + '00';
  return replaced_str;
};

const getDateConnect = date => {
  // 날짜포맷 변경 (YYYYMMDDHHMMSS-> YYYY-MM-DD HH:MM:SS)
  let year = date.substr(0, 4);
  let month = date.slice(4, 6);
  let day = date.slice(6, 8);
  let hour = date.slice(8, 10);
  let minute = date.slice(10, 12);
  let dayString =
    year + '년' + month + '월' + day + '일 ' + hour + '시' + minute + '분';
  return dayString;
};

// 날짜 자르기
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

// 주문,배송상태 변경
const changeStatusName = status => {
  if (status === 'activated') {
    return '배송 대기중';
  } else if (status === 'deliveryProgress') {
    return '배송중';
  } else if (status === 'deliveryCompleted') {
    return '배송완료';
  } else if (status === 'canceled') {
    return '주문취소';
  } else if (status === 'refundRequest') {
    return '환불요청';
  } else if (status === 'refundCompleted') {
    return '반품확정';
  }
  return '';
};

// 대체이미지
const onErrorImg = e => {
  e.target.src = 'https://colorate.azurewebsites.net/SwatchColor/B2B2B2';
};

// 소수점 둘째자리까지 표현
const upNumber = num => {
  const number = (num + '').split('.');
  if (number.length > 1 && number[1].length > 2) {
    return num.toFixed(2);
  }
  return num;
};

export {
  toLocaleString,
  getDate,
  arrayDays,
  addDays,
  getDateFormat,
  getNoTimeDate,
  getNoSecDate,
  getOrderNumber,
  getDateDotFormat,
  getGoneTime,
  getDateNoConnect,
  getDateConnect,
  changeStatusName,
  onErrorImg,
  upNumber,
};
