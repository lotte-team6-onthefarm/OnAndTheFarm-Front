import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  getSellerOrderClaimDetailList,
  postOrderClaimApprove,
} from '../../../../apis/seller/order';
import { BlueButton, WhiteButton } from '../../../common/Button.style';
import { GrayWrapper } from '../../common/Box.style';
import { GreenPurpleStatusButton } from '../../common/ColorStatusButton';
import SubTitle from '../../common/SubTitle';
import {
  ImageTitleBlock,
  OrderStateBtnWrapper,
  OrderStateli,
  OrderStateUl,
} from './OrderState.style';

// canceled : 주문취소
// refundRequest : 반품신청
// refundCompleted : 반품확정

export default function OrderState(props) {
  const queryClient = useQueryClient();
  const closeModal = props.closeModal;
  const orderProductId = props.selectData.orderProductId;
  const selectData = props.selectData;

  const { data, isLoading: isClaimListDetail } = useQuery(
    'orderClaimListDetail',
    () => getSellerOrderClaimDetailList(orderProductId),
    { refetchOnMount: true },
  );

  const navigate = useNavigate();

  const { mutate: orderClaimApprove, isLoading: isOrderClaimApproveLoading } =
    useMutation(postOrderClaimApprove, {
      onSuccess: () => {
        // 콜백 부분에 쿼리키 무효화를 실행
        queryClient.invalidateQueries('orderClaimList');
        closeModal();
        navigate('/seller/order');
      },
    });

  return (
    <div>
      <SubTitle color="#FFBC99" title="취소/반품 처리" />
      {!isClaimListDetail && (
        <GrayWrapper>
          <ImageTitleBlock>
            <img
              src={require('../../../../assets/products/복숭아.png')}
              alt=""
            />
            <div className="right">
              <div className="title">{data.productName}</div>
              <div style={{ display: 'flex' }}>
                <GreenPurpleStatusButton
                  fontSize="15px"
                  text={
                    (data.productStatus === 'canceled' && '취소요청') ||
                    (data.productStatus === 'refundRequest' && '반품신청') ||
                    (data.productStatus === 'refundCompleted' && '반품확정')
                  }
                  status={
                    (data.productStatus === 'canceled' && 1) ||
                    (data.productStatus === 'refundRequest' && 2) ||
                    (data.productStatus === 'refundCompleted' && 3)
                  }
                />
              </div>
            </div>
          </ImageTitleBlock>
          <OrderStateUl>
            <OrderStateli>
              <div>주문자</div>
              <div>{data.userName}</div>
            </OrderStateli>
            <OrderStateli>
              <div>상품 수량</div>
              <div>{data.productQty}개</div>
            </OrderStateli>
            <OrderStateli>
              <div>가격</div>
              <div>{data.productTotalPrice}원</div>
            </OrderStateli>
            <OrderStateli>
              <div>환불 주소</div>
              <div>{data.userAddress}</div>
            </OrderStateli>
            <OrderStateli>
              <div>취소/반품 사유</div>
              <div>{data.cancelDetail}</div>
            </OrderStateli>
          </OrderStateUl>
          <OrderStateBtnWrapper>
            <WhiteButton width="calc(50% - 8px)" onClick={closeModal}>
              취소
            </WhiteButton>
            <BlueButton
              width="calc(50% - 8px)"
              onClick={() => {
                orderClaimApprove(selectData.orderProductId);
              }}
            >
              승인
            </BlueButton>
          </OrderStateBtnWrapper>
        </GrayWrapper>
      )}
    </div>
  );
}
