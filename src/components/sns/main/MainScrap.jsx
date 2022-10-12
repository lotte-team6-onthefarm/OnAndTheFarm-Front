import React from 'react';
import { Link } from 'react-router-dom';
import NoneFeed from './NoneFeed';
import { ScrapSection } from './SnsFeed.styled';

export default function MainScrap(props) {
  const five = props.five;
  return (
    <ScrapSection>
      <div className="FeedTitle">
        <h1>
          스크랩북 <span>145</span>
        </h1>
        {five.length === 0 ? (
          ''
        ) : (
          <div>
            <Link to="/sns/scrapbook">전체보기</Link>
          </div>
        )}
      </div>
      {five.length === 0 ? (
        <NoneFeed text="첫번째 스크랩을 눌러보세요" />
      ) : (
        <div className="FeedContents">
          {five.map(() => {
            return (
              <div>
                <a
                  class="css-gi86zd e1qgexi82"
                  href="/contents/card_collections/16854578"
                >
                  <img
                    class="css-1n0kzcr e1qgexi81"
                    alt=""
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166515603605133566.jpeg?gif=1&w=360&h=360&c=c"
                    srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;webp=1 3x"
                  />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </ScrapSection>
  );
}
