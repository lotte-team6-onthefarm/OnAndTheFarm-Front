import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getComment } from '../../../apis/sns/comment';
import { getFeedDetail, putUpFeedShareCount } from '../../../apis/sns/content';
import { HorizontalLine } from '../../../components/common/HorizontalLine.style';
import FeedWriter from '../../../components/sns/feed/FeedWriter';
import FeedComment from '../../../components/sns/feedDetail/FeedComment/FeedCommentInput';
import FeedCommentList from '../../../components/sns/feedDetail/FeedComment/FeedCommentList';
import FeedProduct from '../../../components/sns/feedDetail/FeedProduct/FeedProduct';
import FeedTag from '../../../components/sns/feedDetail/FeedTag/FeedTag';
import SideButton from '../../../components/sns/feedDetail/SideButton';
import {
  FeedDetailBlock,
  FeedDetailSideBlock,
  FeedDetailSideWrapper,
  FeedDetailStickyContainer,
  FeedDetailWrapper,
  FeedImageWrapper,
} from './FeedDetail.styled';
import {
  putFeedLike,
  putFeedScrap,
  putFeedUnLike,
  putFeedUnScrap,
} from '../../../apis/sns/content';

export default function FeedDetail(props) {
  const [feedId, setFeedId] = useState(1);
  const [likeStatus, setLikeStatus] = useState(false);
  const [scrapStatus, setScrapStatus] = useState(false);
  // feedId = props.feedId
  const queryClient = useQueryClient();
  console.log('wqkjedklasjdlkqwjd');

  const { isLoading: isFeedDetailLoading, data: feedDetail } = useQuery(
    'FeedDetail',
    () => getFeedDetail(feedId),
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { isLoading: isCommentLoading, data: comment } = useQuery(
    'Comment',
    () => getComment(feedId),
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );
  console.log(feedDetail, comment);

  const { mutate: feedLike } = useMutation(putFeedLike, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnLike } = useMutation(putFeedUnLike, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedScrap } = useMutation(putFeedScrap, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnScrap } = useMutation(putFeedUnScrap, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedShare } = useMutation(putUpFeedShareCount, {
    onSuccess: res => {
      queryClient.invalidateQueries('FeedDetail');
    },
    onError: () => {
      console.log('에러');
    },
  });

  return (
    <>
      {!isFeedDetailLoading && !isCommentLoading && (
        <FeedDetailWrapper>
          <FeedDetailBlock>
            <FeedWriter />
            <FeedImageWrapper>
              <img src={feedDetail.feedImageList[0].feedImageSrc} alt="" />
            </FeedImageWrapper>
            <FeedProduct feedContent={feedDetail.feedContent} />
            <FeedTag feedTag={feedDetail.feedTag} />
            <HorizontalLine color="#d7d7d7" />
            <FeedComment feedId={feedDetail.feedId} comment={comment} />
            <FeedCommentList comment={comment} />
          </FeedDetailBlock>
          <FeedDetailSideWrapper>
            <FeedDetailStickyContainer>
              <FeedDetailSideBlock>
                <SideButton
                  icon="heart"
                  count={feedDetail.feedLikeCount}
                  feedId={feedDetail.feedId}
                  method={
                    feedDetail.feedLikeStatus
                      ? () => feedLike(feedDetail.feedId)
                      : () => feedUnLike(feedDetail.feedId)
                  }
                  status={likeStatus}
                  setStatus={setLikeStatus}
                />
                <SideButton
                  icon="scrap"
                  count={feedDetail.feedScrapCount}
                  feedId={feedDetail.feedId}
                  method={
                    feedDetail.scrapStatus
                      ? () => feedScrap(feedDetail.feedId)
                      : () => feedUnScrap(feedDetail.feedId)
                  }
                  status={scrapStatus}
                  setStatus={setScrapStatus}
                />
                <SideButton
                  icon="comment"
                  count={feedDetail.feedCommentCount}
                />
                <SideButton
                  icon="share"
                  count={feedDetail.feedShareCount}
                  method={() => putUpFeedShareCount(feedDetail.feedId)}
                />
              </FeedDetailSideBlock>
            </FeedDetailStickyContainer>
          </FeedDetailSideWrapper>
        </FeedDetailWrapper>
      )}
    </>
  );
}
