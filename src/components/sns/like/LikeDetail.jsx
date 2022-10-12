import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgBlock,
  LikeImgWrapper,
  LikeItemDescription,
} from './LikeDetail.styled';

export default function LikeDetail() {
  const data = ['', '', '', '', '', '', '', '', '', ''];
  const a = (
    <LikeCardWrapper>
      <LikeImgWrapper>
        <LikeImgBlock>
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166022826437388126.jpg?gif=1&w=640&h=640&c=c&webp=1"
            alt=""
          />
        </LikeImgBlock>
      </LikeImgWrapper>
      <LikeItemDescription>
        <h1>
          <span>메이커스무브먼트 </span>
          <span>[맞춤]앤플라워 봄 빈티지 커튼</span>
        </h1>
        <span className="production-item-price">
          <span>12%</span>
          <span>35,000</span>
        </span>
        <p className="production-item-stats">
          <div className="production-item-stats--icon">
            <AiFillStar />
          </div>
          <strong>5</strong>
          <span>리뷰1</span>
        </p>
      </LikeItemDescription>
    </LikeCardWrapper>
  );
  return (
    <FeedLikeWrapper>
      {data.map(() => {
        return a;
      })}
    </FeedLikeWrapper>
  );
}
