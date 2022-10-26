import React from 'react';
import { useQuery } from 'react-query';
import { getFollowerList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Follower() {
  const { data: Followers, isLoading: FollowingLoading } = useQuery(
    'getFollowerList',
    getFollowerList,
    {
      onSuccess: () => {},
    },
  );

  return (
    <FeedDetailWrapper>
      {!FollowingLoading && (
        <FollowWrapper>
          <h1>팔로워</h1>
          {Followers.length === 0 ? (
            <div>팔로워가 없습니다.</div>
          ) : (
            <>
              {Followers.map((follow, idx) => {
                return <FollowUser follow={follow} key={idx} />;
              })}
            </>
          )}
        </FollowWrapper>
      )}
    </FeedDetailWrapper>
  );
}
