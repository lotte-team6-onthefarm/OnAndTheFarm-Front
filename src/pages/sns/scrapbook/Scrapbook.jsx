import React, { useEffect, useRef } from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './Scrapbook.styled';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { getScrapList } from '../../../apis/sns/profile';
import { useRecoilValue } from 'recoil';
import { snsNowId } from '../../../recoil';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function Scrapbook() {
  const myRef = useRef();
  const queryClient = useQueryClient();
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
    queryClient.removeQueries('getScrapList');
  }, []);
  useEffect(() => {
    if (inView || myRef.current.offsetTop < document.body.offsetHeight-650)
      fetchNextPage();
  }, [inView, isFetchingNextPage]);

  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };
  return (
    <>
      <FeedScrapWrapper>
        {!isLoading &&
          data.pages.map((page, idx) =>
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
        {(!isFetchingNextPage || !isPreviousData) && (
          <div ref={ref}>
            <div ref={myRef}></div>
          </div>
        )}
      </FeedScrapWrapper>
    </>
  );
}
