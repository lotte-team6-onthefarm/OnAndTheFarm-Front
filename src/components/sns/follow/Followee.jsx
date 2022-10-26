import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getFollowingList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Followee() {
  // const { data: Followings, isLoading: FollowingLoading } = useQuery(
  //   'getFollowingList',
  //   getFollowingList,
  //   {
  //     onSuccess: () => {},
  //   },
  // );

  const { ref, inView } = useInView();

  const {
    data: Followings,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFollowingList'],
    ({ pageParam = 0 }) => getFollowingList(pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {},
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <FeedDetailWrapper>
      {!isLoading && (
        <FollowWrapper>
          <h1>팔로잉</h1>
          {Followings.length === 0 ? (
            <div>팔로잉 하는 유저가 없습니다.</div>
          ) : (
            <>
              {Followings.map((followee, idx) => {
                return <FollowUser follow={followee} key={idx} />;
              })}
            </>
          )}
        </FollowWrapper>
      )}
      {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
    </FeedDetailWrapper>
  );
}
