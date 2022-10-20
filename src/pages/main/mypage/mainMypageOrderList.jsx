import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MenuTabComp from '../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable } from '../../../components/seller/products/productReviews/ProductReviews.style';
import { ReviewContentDiv } from './mainMypageReview.style';
import ReviewEditInput from '../../../components/main/mypage/ReviewEditInput';
import { getMyOrderList } from '../../../apis/user/order';
import OrderItemComp from '../../../components/main/mypage/OrderItem';
import { useNavigate } from 'react-router-dom';

export default function MainMypageOrderList() {
  const menuTab = [
    { title: '주문내역', url: '/mypage/orders/list' },
    { title: '주문취소/반품 내역', url: '/mypage/orders/cancel' },
  ];
  const {
    isLoading: MyOrderListLoading,
    // refetch: getMyOrderListRefetch,
    data: orders,
  } = useQuery('MyOrderList', () => getMyOrderList(0), {
    onError: () => {
      console.log('error');
    },
  });
  // hook
  const navigate = useNavigate();
  const moveDetail = id => {
    navigate(`/mypage/orders/detail`, { state: id });
  };

  return (
    <div>
      <MenuTabComp menuTab={menuTab}></MenuTabComp>
      <ReviewContentDiv>
        {!MyOrderListLoading && (
          <>
            {orders.responses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>주문 내역이 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="10%">주문날짜</th>
                      <th width="10%">주문번호</th>
                      <th width="10%">가격</th>
                      <th width="10%">상태</th>
                      <th width="55%">상품리스트</th>
                    </tr>
                  </thead>
                  {orders.responses.map((data, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr onClick={() => moveDetail(data.ordersSerial)}>
                          <td width="5%">{idx + 1}</td>
                          <td width="10%">{data.orderDate}</td>
                          <td width="10%">{data.ordersSerial}</td>
                          <td width="10%">{data.orderTotalPrice}</td>
                          <td width="10%">{data.orderStatus}</td>
                          <td>
                            {data.orderUserResponses.map((item, index) => {
                              return (
                                <OrderItemComp
                                  key={index}
                                  orderProductId={item.orderProductId}
                                  productName={item.orderProductName}
                                  orderProductMainImg={item.orderProductMainImg}
                                  orderProductPrice={item.orderProductPrice}
                                  orderProductQty={item.orderProductQty}
                                  productId={item.productId}
                                  orderProductStatus={item.orderProductStatus}
                                ></OrderItemComp>
                              );
                            })}
                          </td>
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
