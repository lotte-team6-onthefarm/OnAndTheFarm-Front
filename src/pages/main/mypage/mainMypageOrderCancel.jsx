import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MenuTabComp from '../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable } from '../../../components/seller/products/productReviews/ProductReviews.style';
import { ReviewContentDiv } from './mainMypageReview.style';
import ReviewEditInput from '../../../components/main/mypage/ReviewEditInput';
import { getCancelOrderList, getMyOrderList } from '../../../apis/user/order';
import OrderItemComp from '../../../components/main/mypage/OrderItem';

export default function MainMypageOrderCancel() {
  const menuTab = [
    { title: '주문내역', url: '/mypage/orders/list' },
    { title: '주문취소/반품 내역', url: '/mypage/orders/cancel' },
  ];
  const {
    isLoading: cancelOrderListLoading,
    // refetch: getCancelOrderListRefetch,
    data: claimList,
  } = useQuery('CancelOrderList', () => getCancelOrderList(0), {
    onError: () => {
      console.log('error');
    },
  });
  const moveDetail = () =>{
    console.log('test')
  }

  return (
    <div>
      <MenuTabComp menuTab={menuTab}></MenuTabComp>
      <ReviewContentDiv>
        {!cancelOrderListLoading && (
          <>
            {claimList.responses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록가능한 리뷰가 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="10%">사진</th>
                      <th width="10%">상품이름</th>
                      <th width="5%">갯수</th>
                      <th width="5%">가격</th>
                      <th width="10%">상태</th>
                      <th width="10%">날짜</th>
                      <th width="45%">내용</th>
                    </tr>
                  </thead>
                  {claimList.responses.map((data, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr onClick={moveDetail}>
                          <td width="5%">{idx + 1}</td>
                          <td width="10%" className="title">
                            <img src={data.orderProductMainImg} alt="" />
                          </td>
                          <td width="10%">{data.orderProductName}</td>
                          <td width="5%">{data.orderProductQty}</td>
                          <td width="5%">{data.orderProductPrice}</td>
                          <td width="10%">{data.orderProductStatus}</td>
                          <td width="10%">{data.ordersDate}</td>
                          <td width="45%">{data.orderStatus}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ProductReviewsTable>
              </div>
            )}
          </>
        )}
      </ReviewContentDiv>
    </div>
  );
}
