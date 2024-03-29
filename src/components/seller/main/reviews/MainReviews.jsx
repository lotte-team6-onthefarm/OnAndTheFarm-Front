import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../../common/Box.style';
import ReviewStar from '../../common/reviewStar/ReviewStar';
import { BlackBorderButton } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { EmptyTable } from '../popularProducts/MainPopularProducts.style';

export default function MainReviews(props) {
  const reviews = props.reviews;
  // hook
  const navigate = useNavigate();

  //function
  const reviewUrl = () => {
    navigate('/seller/products/reviews');
  };
  const productDetailUrl = productId => {
    navigate(`/products/detail/${productId}`);
  };

  return (
    <WhiteWrapper width="100%" height="670px">
      <SubTitle color="#B1E5FC" title="실시간 리뷰" />
      {reviews.length === 0 ? (
        <EmptyTable height="500px">
          <h3>현재 등록된 리뷰가 없습니다</h3>
        </EmptyTable>
      ) : (
        <div style={{ minHeight: '500px' }}>
          {reviews.map((review, idx) => {
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  width: '100%',
                  marginBottom: '20px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  productDetailUrl(review.productId);
                }}
              >
                <img
                  src={review.productImg}
                  alt=""
                  style={{
                    borderRadius: '8px',
                    marginRight: '10px',
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
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
