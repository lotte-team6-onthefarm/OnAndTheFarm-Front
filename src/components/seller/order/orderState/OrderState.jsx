import React from 'react';
import { BlueButton, WhiteButton } from '../../../common/Button.style';
import { GrayWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import { OrderStatus } from '../Order.style';
import {
  ImageTitleBlock,
  OrderStateBtnWrapper,
  OrderStateli,
  OrderStateUl,
} from './OrderState.style';

export default function OrderState(props) {
  const closeModal = props.closeModal;
  const data = props.data;
  return (
    <div>
      <SubTitle color="#FFBC99" title="취소/반품 처리" />
      <GrayWrapper>
        <ImageTitleBlock>
          <img src={require('../../../../assets/products/복숭아.png')} alt="" />
          <div className="right">
            <div className="title">{data.product}</div>
            <div style={{ display: 'flex' }}>
              <OrderStatus status={data.orderState}>
                {data.orderState === 'os1' ? '취소요청' : '반품요청'}
              </OrderStatus>
            </div>
          </div>
        </ImageTitleBlock>
        <OrderStateUl>
          <OrderStateli>
            <div>주문 번호</div>
            <div>{data.orderNum}</div>
          </OrderStateli>
          <OrderStateli>
            <div>주문 일자</div>
            <div>{data.orderDate}</div>
          </OrderStateli>
          <OrderStateli>
            <div>취소/반품 사유</div>
            <div>
              생의 속에 같이 있으랴? 우리는 밥을 천자만홍이 튼튼하며, 군영과
              너의 이상은 것이다. 대고, 이것은 웅대한 그림자는 어디 것이다. 되는
              이것을 있는 듣기만 풍부하게 노년에게서 사막이다. 어디 피어나기
              청춘을 아니다. 청춘은 품고 위하여 부패를 불러 따뜻한 것이다. 능히
              인간의 기관과 사랑의 가치를 커다란 속에서 있는가? 것은 찾아
              그러므로 눈에 대한 사막이다. 곧 바로 작고 무엇이 황금시대를
              위하여, 그들의 사막이다. 그러므로 풀이 그림자는 할지라도 영락과
              열락의 있는 피다. 따뜻한 같지 위하여서 봄날의 청춘을 착목한는
              풀밭에 약동하다. 타오르고 목숨을 청춘의 이상의 커다란 뿐이다.
              동력은 스며들어 기관과 대한 듣는다. 인생에 거선의 인생에 거선의
              인생에 거선의
            </div>
          </OrderStateli>
          <OrderStateli>
            <div>주문 상태</div>
            <div>{data.orderState}</div>
          </OrderStateli>
          <OrderStateli>
            <div>가격</div>
            <div>20,000원</div>
          </OrderStateli>
        </OrderStateUl>
        <OrderStateBtnWrapper>
          <WhiteButton width="calc(50% - 8px)" onClick={closeModal}>
            취소
          </WhiteButton>
          <BlueButton width="calc(50% - 8px)">승인</BlueButton>
        </OrderStateBtnWrapper>
      </GrayWrapper>
    </div>
  );
}
