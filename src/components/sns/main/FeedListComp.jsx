import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { SnsMainWrapper, FeedDetailWrapper } from './FeedListComp.styled';
import { getFeedList } from '../../../apis/sns/main';
import Loading from '../../../components/common/Loading';
import FeedComp from '../feed/FeedComp';

export default function FeedListComp(props) {
  const myRef = useRef();
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  // useQuery
  // 최신순
  const {
    data,
    refetch: getFeedListRefetch,
    fetchNextPage,
    isLoading: getFeedLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFeed', props.url],
    ({ pageParam = 0 }) =>
      getFeedList({ url: props.url, searchWord: props.searchWord }, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: () => {},
    },
  );

  useEffect(() => {
    queryClient.removeQueries('getFeed');
    getFeedListRefetch();
  }, [props.filterList, props.searchWord]);
  useEffect(() => {
    if (inView || myRef.current.offsetTop < document.body.offsetHeight)
      fetchNextPage();
  }, [inView, getFeedLoading]);
  return (
    <SnsMainWrapper>
      {!getFeedLoading && (
        <FeedDetailWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((post, idx) => (
              <FeedComp
                post={post}
                Refetch={getFeedListRefetch}
                parent="FeedList"
                key={idx}
              />
            )),
          )}
        </FeedDetailWrapper>
      )}

      {isFetchingNextPage || isPreviousData ? (
        <Loading></Loading>
      ) : (
        <div ref={ref}></div>
      )}
      <div ref={myRef}></div>
    </SnsMainWrapper>
  );
}
