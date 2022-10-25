import React from 'react';
import { Link } from 'react-router-dom';
import NoneFeed from './NoneFeed';
import { MyFeedSection } from './SnsFeed.styled';

export default function MainMyFeed(props) {
  const datas = props.datas;
  return (
    <MyFeedSection>
      <div className="FeedTitle">
        <h1>
          사진 <span>5</span>
        </h1>
        {datas.length === 0 ? (
          ''
        ) : (
          <div>
            <Link to="/sns/feed">전체보기</Link>
          </div>
        )}
      </div>
      {/* 사진 */}
      {datas.length === 0 ? (
        <NoneFeed text="첫번째 사진을 올려보세요" />
      ) : (
        <div className="FeedContents">
          {datas.map((data, idx) => {
            return (
              <div key={idx}>
                <a
                  className="css-gi86zd e1qgexi82"
                  href="/contents/card_collections/16854578"
                >
                  <img
                    className="css-1n0kzcr e1qgexi81"
                    alt=""
                    src={data}
                    srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;webp=1 3x"
                  />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </MyFeedSection>
  );
}
