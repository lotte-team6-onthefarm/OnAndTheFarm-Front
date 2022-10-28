import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getFollowingList } from '../../../apis/sns/profile';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { snsNowId, snsNowRole } from '../../../recoil';
import { FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Followee() {
  const myRef = useRef();
  const queryClient = useQueryClient();
  const role = useRecoilValue(snsNowRole);
  const { ref, inView } = useInView();
  const id = useRecoilValue(snsNowId);

  const {
    data: Followings,
    refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFollowingList', id],
    ({ pageParam = 0 }) => getFollowingList(pageParam, id, 'user'),
    {
      refetchOnMount: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {
        console.log(res, 'ressssss');
      },
    },
  );
  useEffect(() => {
    queryClient.removeQueries('getFollowingList');
  }, []);
  useEffect(() => {
    if (inView || myRef.current.offsetTop < document.body.offsetHeight)
      fetchNextPage();
  }, [inView, isFetchingNextPage]);

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
                  <FollowUser follow={followee} key={idx} refetch={refetch} />
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
