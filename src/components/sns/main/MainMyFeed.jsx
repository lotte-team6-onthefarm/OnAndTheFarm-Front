import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getProfileFeedList } from '../../../apis/sns/profile';
import { snsNowId } from '../../../recoil';
import NoneFeed from './NoneFeed';
import { MyFeedSection } from './SnsFeed.styled';

export default function MainMyFeed(props) {
  const id = useRecoilValue(snsNowId);
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
                <Link to={`/sns/${id}/feed`}>전체보기</Link>
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
                    <Link to={`/sns/detail/${feedData.feedId}`}>
                      <img
                        className="css-1n0kzcr e1qgexi81"
                        alt=""
                        src={feedData.feedImageSrc}
                      />
                    </Link>
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
