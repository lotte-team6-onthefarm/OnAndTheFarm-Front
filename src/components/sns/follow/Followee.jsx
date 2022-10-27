import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getFollowingList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { snsNowId } from '../../../recoil';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Followee() {
  const { ref, inView } = useInView();
  const [id, setId] = useRecoilState(snsNowId); // client 전역

  const {
    data: Followings,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFollowingList', id],
    ({ pageParam = 0 }) => getFollowingList(pageParam, id),
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
          {Followings.pages[0].length === 0 ? (
            <div>팔로잉 하는 유저가 없습니다.</div>
          ) : (
            <>
              {Followings.pages.map((page, idx) =>
                page.posts.map((followee, idx) => (
                  <FollowUser follow={followee} key={idx} />
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
