import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSellerReview } from '../../../../apis/seller/review';
import { WhiteWrapper } from '../../common/Box.style';
import ReviewStar from '../../common/reviewStar/ReviewStar';
import { UserImgWrapper } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import { EmptyTable } from '../../main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable, ReviewBlock } from './ProductReviews.style';

export default function ProductReviews() {
  // const datas = [
  //   {
  //     name: '손은성',
  //     review:
  //       '과일이 정말 신선하네요! 믿고 구매할 수 있는 상품이라 마음에 들어요 ㅎㅎ',
  //     productName: '경북 청도 천도복숭아 2kg/1box',
  //   },
  //   {
  //     name: '김명자',
  //     review:
  //       '포도 씨알도 크고 산지직송이라 신선함이 살아있어요! 달달하니 맛있네요',
  //     productName: '국내산 프리미엄 거봉포도 900g',
  //   },
  //   {
  //     name: '박철순',
  //     review:
  //       '과일이 정말 신선하네요! 믿고 구매할 수 있는 상품이라 마음에 들어요 ㅎㅎ',
  //     productName: '경북 청도 천도복숭아 2kg/1box',
  //   },
  // ];
  const [pageNo, setPageNo] = useState(0);

  const {
    isLoading: sellerReviewLoading,
    // refetch: sellerReviewProduct,
    data: reviews,
  } = useQuery('sellerReview', () => getSellerReview(pageNo), {
    onError: () => {
      console.log('error');
    },
  });

  console.log(reviews);
  return (
    <>
      <SellerTitle>리뷰 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#CABDFF" title="상품별 리뷰" />
        {!sellerReviewLoading && (
          <>
            {reviews.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 리뷰가 없습니다</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="70%">리뷰</th>
                      <th width="25%">상품</th>
                    </tr>
                  </thead>
                  {reviews.map((review, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{idx + 1}</td>
                          <td>
                            <ReviewBlock>
                              <UserImgWrapper
                                src={require('../../../../assets/구데타마.png')}
                                alt=""
                                width="50px"
                                className="productReviewsImg"
                              ></UserImgWrapper>
                              <div>
                                <div>dmstjd3256</div>
                                <div className="review">
                                  {review.reviewContent}
                                </div>
                              </div>
                              <div className="time">
                                <ReviewStar reviewRate={review.reviewRate} />
                              </div>
                            </ReviewBlock>
                          </td>
                          <td className="title">
                            <img
                              src={require('../../../../assets/products/복숭아.png')}
                              alt=""
                            />
                            <div>{review.productName}</div>
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
      </WhiteWrapper>
    </>
  );
}
