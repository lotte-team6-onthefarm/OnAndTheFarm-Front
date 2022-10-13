import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAddReviewList, getMyReviewList } from '../../../apis/user/review';
import { Button } from '../../../components/common/Button';
import ReviewInput from '../../../components/main/mypage/ReviewInput';
import MenuTabComp from '../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../components/seller/main/popularProducts/MainPopularProducts.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../../../components/seller/products/productReviews/ProductReviews.style';
import { ReviewContentDiv, AnswerDiv } from './mainMypageReview.style';
import ReviewEditInput from '../../../components/main/mypage/ReviewEditInput';

export default function MainMypageReviewList() {
  const {
    isLoading: MyReviewListLoading,
    // refetch: getMyReviewListRefetch,
    data: reviews,
  } = useQuery('MyReviewList', () => getMyReviewList(0), {
    onError: () => {
      console.log('error');
    },
  });


  return (
    <div>
      <MenuTabComp></MenuTabComp>
      <ReviewContentDiv>
        {!MyReviewListLoading && (
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
                      <th width="10%">작성날짜</th>
                      <th width="50%">리뷰내용</th>
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
                          <td>{data.reviewCreatedAt}</td>
                          <td style={{display:"flex"}}>
                            <ReviewEditInput
                              placeholder="나의리뷰"
                              id={data.reviewId}
                              type="text"
                              reviewContent={data.reviewContent}
                              reviewRate={data.reviewRate}
                              reviewLikeCount={data.reviewLikeCount}
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
