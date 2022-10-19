import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../../common/Box.style';
import ReviewStar from '../../common/reviewStar/ReviewStar';
import { BlackBorderButton } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { EmptyTable } from '../popularProducts/MainPopularProducts.style';

export default function MainReviews(props) {
  const reviews = props.reviews;
  const products = [
    {
      title: '달콤 샤인 머스캣',
      review: '빠른배송 너무 좋아요! 샤인 머스캣 맨날 먹고 싶어요!',
      reviewRate: 5,
      img: '../../../../assets/products/머스캣.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      review: '빠른배송 너무 좋아요! 거봉 맨날 먹고 싶어요!',
      reviewRate: 3,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      review: '빠른배송 너무 좋아요! 거봉 맨날 먹고 싶어요!',
      reviewRate: 1,
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      review: '빠른배송 너무 좋아요! 거봉 맨날 먹고 싶어요!',
      reviewRate: 4,
      img: '../../../../assets/products/거봉.png',
    },
  ];

  // hook
  const navigate = useNavigate();

  //function
  const reviewUrl = () => {
    navigate('/seller/products/reviews');
  };

  return (
    <WhiteWrapper width="100%" height="650px">
      <SubTitle color="#B1E5FC" title="실시간 리뷰" />
      {reviews.length === 0 ? (
        <EmptyTable height="480px">
          <h3>현재 등록된 리뷰가 없습니다</h3>
        </EmptyTable>
      ) : (
        <div style={{ minHeight: '480px' }}>
          {reviews.map((review, idx) => {
            return (
              <div key={idx} style={{ display: 'flex', width: '100%' }}>
                <img
                  src={require('../../../../assets/products/머스캣.png')}
                  alt=""
                  style={{
                    marginRight: '10px',
                    width: '95px',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ width: '70%' }}>
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: 'bold',
                      height: '30%',
                      cursor: 'pointer',
                    }}
                  >
                    {review.productName}
                  </div>
                  <ReviewStar reviewRate={review.reviewRate}></ReviewStar>
                  <div
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {review.reviewContent}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <BlackBorderButton onClick={reviewUrl}>리뷰 전체</BlackBorderButton>
    </WhiteWrapper>
  );
}
