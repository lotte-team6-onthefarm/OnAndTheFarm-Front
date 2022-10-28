import React, { useEffect } from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './Scrapbook.styled';
import { useInfiniteQuery } from 'react-query';
import { getScrapList } from '../../../apis/sns/profile';
import { useRecoilValue } from 'recoil';
import { snsNowId } from '../../../recoil';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function Scrapbook() {
  const id = useRecoilValue(snsNowId);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isLoading, isFetchingNextPage, isPreviousData } =
    useInfiniteQuery(
      ['getScrapList', id],
      ({ pageParam = 0 }) => getScrapList(pageParam, id),
      {
        refetchOnMount: true,
        keepPreviousData: true,
        getNextPageParam: lastPage =>
          !lastPage.isLast ? lastPage.nextPage : undefined,
        onSuccess: res => {},
      },
    );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };
  return (
    <>
      {!isLoading && (
        <FeedScrapWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((feedResponse, idx) => (
              <ScrapImgWrapper
                key={idx}
                onClick={() => {
                  feedDetailNavigator(feedResponse.feedId);
                }}
              >
                <img src={feedResponse.feedImageSrc} alt="" />
                <div>@ {feedResponse.memberName}</div>
              </ScrapImgWrapper>
            )),
          )}
          {(!isFetchingNextPage || !isPreviousData) && <div ref={ref}></div>}
        </FeedScrapWrapper>
      )}
    </>
  );
}
