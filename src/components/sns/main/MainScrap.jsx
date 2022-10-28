import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getProfileScrapList } from '../../../apis/sns/profile';
import { snsNowId } from '../../../recoil';
import NoneFeed from './NoneFeed';
import { ScrapSection } from './SnsFeed.styled';

export default function MainScrap(props) {
  const id = useRecoilValue(snsNowId);
  const { data: scrapListData, isLoading: scrapListLoading } = useQuery(
    ['profileScrapList', id],
    () => getProfileScrapList({ memberId: id }),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
  return (
    <>
      {!scrapListLoading && (
        <ScrapSection>
          <div className="FeedTitle">
            <h1>
              스크랩북 <span>{props.scrapCount}</span>
            </h1>
            {scrapListData.length === 0 ? (
              ''
            ) : (
              <div>
                <Link to={`/sns/${id}/scrapbook`}>전체보기</Link>
              </div>
            )}
          </div>
          {scrapListData.length === 0 ? (
            <Link to="/sns/main">
              <NoneFeed text="첫번째 스크랩을 눌러보세요" />
            </Link>
          ) : (
            <div className="FeedContents">
              {scrapListData.map((scrapData, idx) => {
                return (
                  <div key={idx}>
                    <Link to={`/sns/detail/${scrapData.feedId}`}>
                      <img
                        className="css-1n0kzcr e1qgexi81"
                        alt=""
                        src={scrapData.feedImageSrc}
                        srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;webp=1 3x"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </ScrapSection>
      )}
    </>
  );
}
