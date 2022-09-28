import React from 'react';
import { HorizontalLine } from '../../../common/HorizontalLine.style';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function DeliveryDetail() {
  const data = {
    orderDate: '2022.09.30',
    orderNum: '202209302231',
    orderUser: 'dmstjd3256',
    product: '준비 샤인 머스캣 1kg',
    quantity: '1box',
    orderState: 'os1',
    waybill: '23123123122',
    userName: '손은성',
    phone: '010-9560-6840',
    address: '서울 관악구 신림동 1234-23 203호',
    requre: '문 앞에 놔둬주세요!',
    total: '1000000',
  };
  const os5data = {
    orderDate: '2022.09.30',
    orderNum: '546347435',
    orderUser: 'dmstjd3256',
    product: '완료 샤인 머스캣 1kg',
    quantity: '1box',
    orderState: 'os5',
    waybill: '57243235112',
    userName: '홍길동',
    phone: '010-2131-2343',
    address: '서울 관악구 신림동 1234-23 203호',
    requre: '문 앞에 놔둬주세요!',
    total: '1000000',
  };
  return (
    <>
      <WhiteWrapper width="1400px">
        <SubTitle color="#FFBC99" title="주문 상세 보기" />
        <div
          style={{
            textAlign: 'right',
            marginRight: '50px',
            fontSize: '18px',
          }}
        >
          {data.orderState === 'os1' && '배송처리'}
          {data.orderState === 'os4' && '배송중'}
          {data.orderState === 'os5' && '배송완료'}
        </div>
        <div
          style={{
            fontSize: '20px',
            fontWeight: '500',
            marginBottom: '20px',
          }}
        >
          {data.orderNum}
        </div>
        <div
          style={{
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={require('../../../../assets/products/복숭아.png')}
            alt=""
            style={{ width: '170px', height: '170px' }}
          ></img>
          <div
            style={{
              marginLeft: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '200px',
              fontSize: '18px',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>상품명</div>
              <div>{data.product}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>수량</div>
              <div>{data.quantity}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>가격</div>
              <div>{data.total}원</div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>주문일자</div>
              <div>{data.orderDate}</div>
            </div>
          </div>{' '}
          {/* 고객 정보 */}
          <div
            style={{
              marginBottom: '20px',
              paddingLeft: '200px',
            }}
          >
            <div
              style={{
                fontSize: '23px',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              고객 정보
            </div>
            <div
              style={{
                marginBottom: '20px',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                fontSize: '18px',
              }}
            >
              <div style={{ display: 'flex' }}>
                <div style={{ width: '150px' }}>수취인 이름</div>
                <div>{data.userName}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '150px' }}>전화번호</div>
                <div>{data.phone}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '150px' }}>배송지 주소</div>
                <div>{data.address}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '150px' }}>배송지 요청사항</div>
                <div>{data.requre}</div>
              </div>
            </div>
          </div>
        </div>
        {/* horizontal line */}
        <HorizontalLine />
        {/* 배송 */}
        <div>
          <div
            style={{
              fontSize: '23px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            배송 입력사항
          </div>
          <div
            style={{
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>택배사명</div>
              <input
                type="text"
                style={{
                  width: '100%',
                  height: '30px',
                  border: 'none',
                  background: '#f8f8f8',
                  borderRadius: '4px',
                  paddingLeft: '20px',
                }}
                placeholder="ex) 우체국 택배"
              ></input>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '150px' }}>운송장 번호</div>
              <input
                type="text"
                style={{
                  width: '100%',
                  height: '30px',
                  border: 'none',
                  background: '#f8f8f8',
                  borderRadius: '4px',
                  paddingLeft: '20px',
                }}
                placeholder="000-00000-000"
              ></input>
            </div>
          </div>
        </div>
      </WhiteWrapper>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
      >
        <button
          style={{
            width: '100px',
            height: '50px',
            border: 'none',
            backgroundColor: '#07b544',
            color: 'white',
            fontSize: '15px',
            borderRadius: '8px',
          }}
        >
          배송 처리
        </button>
      </div>
    </>
  );
}
