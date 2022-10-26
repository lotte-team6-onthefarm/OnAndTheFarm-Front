import React, { useEffect } from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './Scrapbook.styled';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getScrapList } from '../../../apis/sns/profile';
import { useInView } from 'react-intersection-observer';

export default function Scrapbook() {
  const { ref, inView } = useInView();

  const {
    data,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getScrapList'],
    ({ pageParam = 0 }) => getScrapList(pageParam),
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

  // const { data, isLoading } = useQuery('getScrapList', getScrapList, {
  //   onSuccess: () => {},
  //   onError: () => {},
  // });

  return (
    <>
      {!isLoading && (
        <FeedScrapWrapper>
          {data.feedResponseList.map((feedResponse, idx) => {
            return (
              <ScrapImgWrapper key={idx}>
                <img src={feedResponse.feedImageSrc} alt="" />
                <div>@ {feedResponse.memberName}</div>
              </ScrapImgWrapper>
            );
          })}
          {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
        </FeedScrapWrapper>
      )}
    </>
  );
}
