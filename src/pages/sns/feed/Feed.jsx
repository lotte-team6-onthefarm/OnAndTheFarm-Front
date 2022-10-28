import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FeedDetailWrapper } from './Feed.styled';
import { useInfiniteQuery } from 'react-query';
import { getAllFeedList } from '../../../apis/sns/profile';
import { useRecoilValue } from 'recoil';
import { snsNowId } from '../../../recoil';
import FeedComp from '../../../components/sns/feed/FeedComp';

export default function Feed() {
  const id = useRecoilValue(snsNowId);
  const { ref, inView } = useInView();

  const {
    data,
    refetch: getAllFeedListRefetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['allFeedList', id],
    ({ pageParam = 0 }) => getAllFeedList(pageParam, id),
    {
      refetchOnMount: true,
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: () => {},
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      {!isLoading && (
        <FeedDetailWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((post, idx) => (
              <FeedComp
                post={post}
                Refetch={getAllFeedListRefetch}
                parent="ProfileFeed"
                key={idx}
              />
            )),
          )}
          {(!isFetchingNextPage || !isPreviousData) && <div ref={ref}></div>}
        </FeedDetailWrapper>
      )}
    </>
  );
}
