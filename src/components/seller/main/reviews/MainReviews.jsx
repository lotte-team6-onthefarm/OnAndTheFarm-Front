import React from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import ReviewStar from '../../common/reviewStar/ReviewStar';
import SubTitle from '../../common/SubTitle';

export default function MainReviews() {
  const products = [
    {
      title: '달콤 샤인 머스캣',
      review: '빠른배송 너무 좋아요! 샤인 머스캣 맨날 먹고 싶어요!',
      reviewRate: '5',
      img: '../../../../assets/products/머스캣.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      review: '빠른배송 너무 좋아요! 거봉 맨날 먹고 싶어요!',
      reviewRate: '3',
      img: '../../../../assets/products/거봉.png',
    },
  ];
  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#B1E5FC" title="실시간 리뷰" />
      {products.map((product, idx) => {
        return (
          <div key={idx} style={{ display: 'flex', width: '100%' }}>
            <img
              src={require('../../../../assets/products/머스캣.png')}
              alt=""
              style={{ marginRight: '10px', width: '30%', cursor: 'pointer' }}
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
                {product.title}
              </div>
              <ReviewStar reviewRate={product.reviewRate}></ReviewStar>
              <div
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.review}
              </div>
            </div>
          </div>
        );
      })}
    </WhiteWrapper>
  );
}
