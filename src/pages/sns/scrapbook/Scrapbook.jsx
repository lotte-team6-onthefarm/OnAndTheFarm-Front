import React, { useEffect } from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './Scrapbook.styled';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getScrapList } from '../../../apis/sns/profile';
import { useRecoilState } from 'recoil';
import { snsNowId } from '../../../recoil';
import { useInView } from 'react-intersection-observer';

export default function Scrapbook() {
  const [id, setId] = useRecoilState(snsNowId);
  const { ref, inView } = useInView();

  const {
    data,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getScrapList', id],
    ({ pageParam = 0 }) => getScrapList(pageParam, id),
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
    <>
      {!isLoading && (
        <FeedScrapWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((feedResponse, idx) => (
              <ScrapImgWrapper key={idx}>
                <img src={feedResponse.feedImageSrc} alt="" />
                <div>@ {feedResponse.memberName}</div>
              </ScrapImgWrapper>
            )),
          )}
          {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
        </FeedScrapWrapper>
      )}
    </>
  );
}
