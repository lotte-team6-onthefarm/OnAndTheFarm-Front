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

import SNS_1 from '../../../assets/sns/요리1.jpg'; // 더미
import { useLocation } from 'react-router-dom';

export default function FeedDetail(props) {
  const { state } = useLocation();
  const [feedId, setFeedId] = useState(state);
  const [likeStatus, setLikeStatus] = useState(false);
  const [scrapStatus, setScrapStatus] = useState(false);
  // feedId = props.feedId
  const queryClient = useQueryClient();

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

  const { isLoading: isCommentLoading, data: commentList } = useQuery(
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
          <FeedWriter memberProfileImg={feedDetail.memberProfileImg} memberName={feedDetail.memberName} followStatus={true}/>
          <FeedImageWrapper>
            <img src={feedDetail.feedImageList[0].feedImageSrc} alt="" />
            <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="Vfsdi jCTZa css-18se8ix"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
                <path
                  stroke="#FFF"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="M12 16V8m-4 4h8"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="Vfsdi jCTZa css-18se8ix"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
                <path
                  stroke="#FFF"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="M12 16V8m-4 4h8"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="Vfsdi jCTZa css-18se8ix"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
                <path
                  stroke="#FFF"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="M12 16V8m-4 4h8"
                ></path>
              </svg>
            </div>
          </FeedImageWrapper>
          <FeedProduct feedContent={feedDetail.feedContent} />
          <FeedTag feedTag={feedDetail.feedTag} />
          <HorizontalLine color="#d7d7d7" />
          <FeedComment feedId={feedDetail.feedId} feedCommentCount={feedDetail.feedCommentCount}/>
          <FeedCommentList commentList={commentList}/>
        </FeedDetailBlock>
        <FeedDetailSideWrapper>
          <FeedDetailStickyContainer>
            <FeedDetailSideBlock>
              <SideButton icon="heart" count={feedDetail.feedLikeCount} />
              <SideButton icon="scrap" count={feedDetail.feedScrapCount} />
              <SideButton icon="comment" count={feedDetail.feedCommentCount} />
              <SideButton icon="share" count={feedDetail.feedShareCount} />
            </FeedDetailSideBlock>
          </FeedDetailStickyContainer>
        </FeedDetailSideWrapper>
        {/* 더미 */}
        {/* <FeedDetailBlock>
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
          </FeedDetailSideWrapper> */}
      </FeedDetailWrapper>
    )}
    </>
  );
}
