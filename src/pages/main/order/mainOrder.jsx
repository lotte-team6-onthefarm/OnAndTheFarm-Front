import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../../../components/common/Button';
import {
  PreOrderContentDiv,
  PreOrderListDiv,
  PreOrderPriceDiv,
  PreOrderListHeader,
  PreOrderItems,
  PreOrderPriceHeader,
  PreOrderPriceRow,
  PreOrderPriceTotal,
  OrderSelectBox,
} from './mainOrder.style';
import ProductListComp from '../../../components/main/products/ProductList';
import Input from '../../../components/common/Input';
import { postMakeOrder, postMakePointOrder } from '../../../apis/user/order';
import { getUserInfo } from '../../../apis/user/account';

export default function MainOrder() {
  const { state } = useLocation();
  const [preOrderList, setPreOrderList] = useState(state);
  const [totalPrice, setTotalPrice] = useState(0);

  const [recieverName, setRecieverName] = useState('');
  const [recieverAddress, setRecieverAddress] = useState('');
  const [recieverPhone, setRecieverPhone] = useState('');
  const [recieverRequest, setRecieverRequest] = useState('');
  const [imp_uid, setImp_uid] = useState('');
  const [merchant_uid, setMerchant_uid] = useState('');
  const [paid_amount, setPaid_amount] = useState('');
  const [payment, setPayment] = useState('');
  const [paymentEng, setPaymentEng] = useState('');

  const params = new URLSearchParams(window.location.search);
  const feedNumber = params.get('feedNumber');

  const {
    isLoading: isgetUserInfo,
    // refetch: getUserInfoRefetch,
    // data: userInfo,
  } = useQuery('userInfo', () => getUserInfo(), {
    refetchOnWindowFocus: true,
    onSuccess: res => {
      if (res.userName) {
        setRecieverName(res.userName);
      }
      if (res.userPhone) {
        setRecieverPhone(res.userPhone);
      }
      if (res.userAddress) {
        setRecieverAddress(res.userAddress + res.userAddressDetail);
      }
    },
    onError: () => {
      console.log('에러');
    },
  });

  useEffect(() => {
    if (imp_uid !== '') {
      test();
    }
  }, [imp_uid]);

  const test = () => {
    let productList = [];
    for (let index = 0; index < preOrderList.length; index++) {
      productList.push({
        productId: preOrderList[index].productId,
        productQty: preOrderList[index].cartQty,
        productPrice: preOrderList[index].productPrice,
      });
    }
    console.log(imp_uid);
    console.log(merchant_uid);
    console.log(paid_amount);
    const data = {
      orderRecipientName: recieverName,
      orderAddress: recieverAddress,
      orderPhone: recieverPhone,
      orderRequest: recieverRequest,
      productList: productList,
      imp_uid: imp_uid,
      feedNumber: feedNumber,
      merchant_uid: merchant_uid,
      paid_amount: paid_amount,
    };
    if (feedNumber === null) {
      console.log('그냥주문');
      makeOrder(data);
    } else {
      console.log('포인트주문');
      makePointOrder(data);
    }
  };

  useEffect(() => {
    let tempPrice = 0;
    for (let index = 0; index < preOrderList.length; index++) {
      tempPrice =
        tempPrice +
        preOrderList[index].productPrice * preOrderList[index].cartQty;
    }
    setTotalPrice(tempPrice);
  }, []);
  const navigate = useNavigate();

  const { mutate: makeOrder, isLoading: isMakeOrderLoading } = useMutation(
    postMakeOrder,
    {
      onSuccess: res => {
        alert('주문완료되었습니다');
        navigate(`/order/success`, { state: '주문완료' });
      },
      onError: () => {
        alert('결제가 취소되었습니다.');
      },
    },
  );

  const { mutate: makePointOrder, isLoading: isMakePointOrderLoading } =
    useMutation(postMakePointOrder, {
      onSuccess: res => {
        alert('주문완료되었습니다');
        navigate(`/order/success`, { state: '주문완료' });
      },
      onError: () => {
        alert('결제가 취소되었습니다.');
      },
    });

  const validataionCheck = () => {
    // 유효성 체크
    if (recieverAddress === '') {
      alert('배송지를 입력해주세요');
      return false;
    } else if (recieverPhone === '') {
      alert('전화번호를 입력해주세요');
      return false;
    } else if (recieverRequest === '') {
      alert('배송 요청사항을 입력해주세요');
      return false;
    } else if (paymentEng === '') {
      alert('결제사를 선택해주세요');
      return false;
    } else {
      return true;
    }
  };

  // 아임포트 결제사 연결
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

  const onClickPayment = () => {
    if (validataionCheck()) {
      const { IMP } = window;
      IMP.init('imp15201205'); // 결제 데이터 정의
      const data = {
        pg: paymentEng, // PG사 (필수항목)
        pay_method: 'card', // 결제수단 (필수항목)
        merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
        name: preOrderList[0].productName, // 주문명 (필수항목)
        amount: totalPrice, // 금액 (필수항목)
        custom_data: { name: '부가정보', desc: '세부 부가정보' },
        buyer_name: 'sda', // 구매자 이름
        buyer_tel: '123321', // 구매자 전화번호 (필수항목)
        buyer_email: 'asfa', // 구매자 이메일
        buyer_addr: 'Afdafsd',
        buyer_postalcode: 'Afdsafs',
      };
      IMP.request_pay(data, callback);
    }
  };

  const callback = response => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      console.log(imp_uid);
      setImp_uid(imp_uid);
      setMerchant_uid(merchant_uid);
      setPaid_amount(paid_amount);
      //   pros.test();
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <PreOrderContentDiv>
      <PreOrderListDiv>
        <PreOrderListHeader>
          <p className="subject">주문/결제</p>
          <hr />
          <Input
            value={recieverName}
            onChange={e => setRecieverName(e.target.value)}
            label="받는분"
            placeholder="홍길동"
            id="name"
            type="text"
          />
          <Input
            value={recieverAddress}
            onChange={e => setRecieverAddress(e.target.value)}
            label="배송지"
            placeholder="서울시 강남구"
            id="address"
            type="text"
          />
          <Input
            value={recieverPhone}
            onChange={e => setRecieverPhone(e.target.value)}
            label="전화번호"
            placeholder="010-1234-5678"
            id="phone"
            type="text"
          />
        </PreOrderListHeader>

        <PreOrderListHeader>
          <p className="subject">배송요청사항</p>
          <hr />
          <Input
            value={recieverRequest}
            onChange={e => setRecieverRequest(e.target.value)}
            label="요청사항"
            placeholder="배송 요청사항을 적어주세요"
            id="request"
            type="text"
          />
        </PreOrderListHeader>
        <PreOrderItems>
          <p className="subject">상품 리스트</p>
          <hr />
          {preOrderList.map((cart, index) => {
            return (
              <ProductListComp
                key={index}
                id={index}
                url={cart.productMainImgSrc}
                name={cart.productName}
                number={cart.cartQty}
                price={cart.productPrice}
                likeListSize={preOrderList.length}
              ></ProductListComp>
            );
          })}
        </PreOrderItems>
      </PreOrderListDiv>
      <PreOrderPriceDiv>
        <PreOrderPriceHeader>결제금액</PreOrderPriceHeader>
        <PreOrderPriceRow>
          <p>상품금액</p>
          <p>{totalPrice}원</p>
        </PreOrderPriceRow>
        <PreOrderPriceTotal>
          <span>{totalPrice}</span>원
        </PreOrderPriceTotal>
        <OrderSelectBox>
          <div
            onClick={() => {
              setPayment('토스페이');
              setPaymentEng('uplus.tlgdacomxpay');
            }}
            className={payment === '토스페이' ? 'orderIsActivate' : ''}
          >
            토스페이
          </div>
          <div
            onClick={() => {
              setPayment('KG이니시스');
              setPaymentEng('html5_inicis');
            }}
            className={payment === 'KG이니시스' ? 'orderIsActivate' : ''}
          >
            KG이니시스
          </div>
          <div
            onClick={() => {
              setPayment('휴대폰결제');
              setPaymentEng('danal');
            }}
            className={payment === '휴대폰결제' ? 'orderIsActivate' : ''}
          >
            휴대폰결제
          </div>
        </OrderSelectBox>
        <Button
          text="주문하기"
          color="#16B51E"
          width="280px"
          margin="0 10px"
          onClick={onClickPayment}
        ></Button>
      </PreOrderPriceDiv>
    </PreOrderContentDiv>
  );
}
