import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getFollowerList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { snsNowId } from '../../../recoil';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Follower() {
  const myRef = useRef();
  const queryClient = useQueryClient();
  const { ref, inView } = useInView();
  const id = useRecoilValue(snsNowId);

  const {
    data: Followers,
    refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFollowerList', id],
    ({ pageParam = 0 }) => getFollowerList(pageParam, id),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {
        console.log(res);
      },
    },
  );

  useEffect(() => {
    queryClient.removeQueries('getFollowerList');
  }, []);
  useEffect(() => {
    if (inView || myRef.current.offsetTop < document.body.offsetHeight)
      fetchNextPage();
  }, [inView, isFetchingNextPage]);

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
                  <FollowUser follow={follow} key={idx} refetch={refetch} />
                )),
              )}
            </>
          )}
        </FollowWrapper>
      )}
      {(!isFetchingNextPage || !isPreviousData) && (
        <div ref={ref}>
          <div ref={myRef}></div>
        </div>
      )}
    </FeedDetailWrapper>
  );
}
