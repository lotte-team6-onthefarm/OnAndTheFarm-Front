import React from 'react';
import { Link } from 'react-router-dom';
import NoneFeed from './NoneFeed';
import { LikeSection } from './SnsFeed.styled';

export default function MainLike(props) {
  return (
    <LikeSection>
      <div className="FeedTitle">
        <h1>
          위시 리스트 <span>6</span>
        </h1>
        {props.three.length === 0 ? (
          ''
        ) : (
          <div>
            <Link to="/sns/like">전체보기</Link>
          </div>
        )}
      </div>
      {props.three.length === 0 ? (
        <NoneFeed text="첫번째 좋아요를 눌러보세요" />
      ) : (
        <div className="FeedContents">
          {props.three.map((thr, idx) => {
            return (
              <div key={idx}>
                <a
                  className="css-gi86zd e1qgexi82"
                  href="/contents/card_collections/16854578"
                >
                  <img
                    className="css-1n0kzcr e1qgexi81"
                    alt=""
                    src={thr}
                    srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;webp=1 3x"
                  />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </LikeSection>
  );
}
