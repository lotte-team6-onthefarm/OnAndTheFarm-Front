import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getFollowerList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { snsNowId } from '../../../recoil';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Follower() {
  // const { data: Followers, isLoading: FollowingLoading } = useQuery(
  //   'getFollowerList',
  //   getFollowerList,
  //   {
  //     onSuccess: () => {},
  //   },
  // );

  const { ref, inView } = useInView();
  const [id, setId] = useRecoilState(snsNowId); // client 전역

  const {
    data: Followers,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFollowerList'],
    ({ pageParam = 0 }) => getFollowerList(pageParam, id),
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
          <h1>팔로워</h1>
          {Followers.pages[0].length === 0 ? (
            <div>팔로워가 없습니다.</div>
          ) : (
            <>
              {Followers.pages.map((page, idx) =>
                page.posts.map((follow, idx) => (
                  <FollowUser follow={follow} key={idx} />
                )),
              )}
            </>
          )}
        </FollowWrapper>
      )}
      {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
    </FeedDetailWrapper>
  );
}
