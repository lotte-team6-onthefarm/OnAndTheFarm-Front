import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { useState } from 'react';
import { WhiteWrapper } from '../../../components/seller/common/Box.style';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Payment = pros => {
  const [price, setPrice] = useState('');
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  useEffect(() => {
    let qs = queryString.parse(window.location.search);
    setPrice(qs.price);
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp15201205'); // 결제 데이터 정의
    const data = {
      pg: 'kakaopay', // PG사 (필수항목)
      pay_method: 'card', // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
      name: '재결제', // 주문명 (필수항목)
      amount: price, // 금액 (필수항목)
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: 'sda', // 구매자 이름
      buyer_tel: '123321', // 구매자 전화번호 (필수항목)
      buyer_email: 'asfa', // 구매자 이메일
      buyer_addr: 'Afdafsd',
      buyer_postalcode: 'Afdsafs',
    };
    IMP.request_pay(data, callback);
  };
  const navigate = useNavigate();

  const callback = response => {
    const { success, error_msg, imp_uid, merchant_uid, paid_amount } = response;
    if (success) {
      alert('재결제가 완료되었습니다');
      navigate('/');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={onClickPayment}
        style={{
          width: '500px',
          height: '300px',
          fontSize: '30px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        재결제 하기
      </button>
    </div>
  );
};

export default Payment;
