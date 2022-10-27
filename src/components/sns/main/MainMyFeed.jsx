import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProfileFeedList } from '../../../apis/sns/profile';
import { snsNowId } from '../../../recoil';
import NoneFeed from './NoneFeed';
import { MyFeedSection } from './SnsFeed.styled';

export default function MainMyFeed(props) {
  const [id, setId] = useRecoilState(snsNowId); // client 전역
  const { data: feedListData, isLoading: feedListLoading } = useQuery(
    ['profileFeedList', id],
    () => getProfileFeedList({ memberId: id }),
    {
      refetchOnMount: true,
      onSuccess: () => {},
      onError: () => {},
    },
  );
  return (
    <>
      {!feedListLoading && (
        <MyFeedSection>
          <div className="FeedTitle">
            <h1>
              사진 <span>{props.photoCount}</span>
            </h1>
            {feedListData.length === 0 ? (
              ''
            ) : (
              <div>
                <Link to="/sns/feed">전체보기</Link>
              </div>
            )}
          </div>
          {feedListData.length === 0 ? (
            <Link to="/sns/add">
              <NoneFeed text="첫번째 사진을 올려보세요" />
            </Link>
          ) : (
            <div className="FeedContents">
              {feedListData.map((feedData, idx) => {
                return (
                  <div key={idx}>
                    <a
                      className="css-gi86zd e1qgexi82"
                      href="/contents/card_collections/16854578"
                    >
                      <img
                        className="css-1n0kzcr e1qgexi81"
                        alt=""
                        src={feedData.feedImageSrc}
                        srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166540107473518899.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;webp=1 3x"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </MyFeedSection>
      )}
    </>
  );
}
