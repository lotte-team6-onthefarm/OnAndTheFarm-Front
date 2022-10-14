import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAddReviewList } from '../../../apis/user/review';
import { Button } from '../../../components/common/Button';
import ReviewInput from '../../../components/main/mypage/ReviewInput';
import MenuTabComp from '../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../components/seller/main/popularProducts/MainPopularProducts.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../../../components/seller/products/productReviews/ProductReviews.style';
import { ReviewContentDiv, AnswerDiv } from './mainMypageReview.style';

export default function MainMypageReview() {
  const menuTab = [
    { title: '작성 가능한 리뷰', url: '/mypage/review/addlist' },
    { title: '내가 작성한 리뷰', url: '/mypage/review/myreview' },
    { title: '문의사항', url: '/mypage/review/qna' },
  ];
  const {
    isLoading: AddReviewListLoading,
    // refetch: getAddReviewListRefetch,
    data: reviews,
  } = useQuery('AddReviewList', () => getAddReviewList(), {
    onError: () => {
      console.log('error');
    },
  });


  return (
    <div>
      <MenuTabComp menuTab={menuTab}></MenuTabComp>
      <ReviewContentDiv>
        {!AddReviewListLoading && (
          <>
            {reviews.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록가능한 리뷰가 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="10%">상품이미지</th>
                      <th width="25%">상품이름</th>
                      <th width="10%">주문날짜</th>
                      <th width="50%">리뷰작성</th>
                    </tr>
                  </thead>
                  {reviews.map((data, idx) => {
                    return (
                      <tbody
                        key={idx}
                      >
                        <tr>
                          <td>{idx + 1}</td>
                          <td className="title">
                            <img src={data.productMainImgSrc} alt="" />
                          </td>
                          <td>
                            <ReviewBlock>
                              <div>
                                <div>{data.productName}</div>
                              </div>
                            </ReviewBlock>
                          </td>
                          <td>{data.ordersDate}</td>
                          <td style={{display:"flex"}}>
                            <ReviewInput
                              placeholder="나의리뷰"
                              id="review"
                              type="text"
                              orderProductId={data.orderProductId}
                            />
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
