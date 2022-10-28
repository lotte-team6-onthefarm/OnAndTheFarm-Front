import React, { useRef, useState } from 'react';
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

import { useLocation, useParams } from 'react-router-dom';
import Carousel from '../../../components/common/Carousel';
import { postAddFollow } from '../../../apis/sns/profile';

export default function FeedDetail(props) {
  const inputRef = useRef([]);
  const param = useParams();
  const [feedImgIdx, setFeedImgIdx] = useState(0);
  const [feedImageProductList, setFeedImageProductList] = useState([]);
  const [allFeedImageProductList, setAllFeedImageProductList] = useState([]);
  const [feedId, setFeedId] = useState(param.id);
  const [likeStatus, setLikeStatus] = useState(false);
  const [scrapStatus, setScrapStatus] = useState(false);
  // feedId = props.feedId
  const queryClient = useQueryClient();

  const {
    isLoading: isFeedDetailLoading,
    data: feedDetail,
    refetch: getFeedDetailRefetch,
  } = useQuery('FeedDetail', () => getFeedDetail(feedId), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    onSuccess: res => {
      setFeedImgIdx(res.feedImageList[0].feedImageId);
      setAllFeedImageProductList(res.feedImageProductList);
      setFeedImageProductList(
        res.feedImageProductList.filter(
          product => product.feedImageId === res.feedImageList[0].feedImageId,
        ),
      );
      setLikeStatus(res.feedLikeStatus);
      setScrapStatus(res.scrapStatus);

    },
    onError: () => {
      console.log('에러');
    },
  });

  const { isLoading: isCommentLoading, data: commentList, refetch: getCommentRefetch, } = useQuery(
    'Comment',
    () => getComment(feedId),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { mutate: feedLike } = useMutation(putFeedLike, {
    onSuccess: res => {
      alert('피드 좋아요');
      getFeedDetailRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnLike } = useMutation(putFeedUnLike, {
    onSuccess: res => {
      alert('피드 좋아요 취소');
      getFeedDetailRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedScrap } = useMutation(putFeedScrap, {
    onSuccess: res => {
      alert('피드 스크랩');
      getFeedDetailRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnScrap } = useMutation(putFeedUnScrap, {
    onSuccess: res => {
      alert('피드 스크랩 취소');
      getFeedDetailRefetch();
    },
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
  const changeFeedImg = id => {
    setFeedImgIdx(id);
    setFeedImageProductList(
      allFeedImageProductList.filter(product => product.feedImageId === id),
    );
  };
  const scroll = () => {
    const x = inputRef.current[0].offsetTop;
    window.scrollTo({ top: x, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!isFeedDetailLoading && !isCommentLoading && (
        <FeedDetailWrapper>
          <FeedDetailBlock>
            <FeedWriter
              memberProfileImg={feedDetail.memberProfileImg}
              memberName={feedDetail.memberName}
              followStatus={feedDetail.followStatus}
              getFeedDetailRefetch={getFeedDetailRefetch}
              memberId={feedDetail.memberId}
              memberRole={feedDetail.memberRole}
              isModifiable={feedDetail.isModifiable}
            />
            <FeedImageWrapper>
              <Carousel
                images={feedDetail.feedImageList}
                changeFeedImg={changeFeedImg}
                width="550px"
                height="540px"
              ></Carousel>
              {/* <img src={feedDetail.feedImageList[0].feedImageSrc} alt="" /> */}
              {/* <div>
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
            </div> */}
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

            <FeedProduct
              feedContent={feedDetail.feedContent}
              feedImageProductList={feedImageProductList}
            />
            <FeedTag feedTag={feedDetail.feedTag} />
            <HorizontalLine color="#d7d7d7" />
            <div ref={elem => (inputRef.current[0] = elem)}></div>
            <FeedComment
              feedId={feedDetail.feedId}
              feedCommentCount={feedDetail.feedCommentCount}
              getCommentRefetch={getCommentRefetch}
              getFeedDetailRefetch={getFeedDetailRefetch}
            />
            <FeedCommentList commentList={commentList} />
          </FeedDetailBlock>
          <FeedDetailSideWrapper>
            <FeedDetailStickyContainer>
              <FeedDetailSideBlock>
                <SideButton
                  icon="heart"
                  count={feedDetail.feedLikeCount}
                  status={likeStatus}
                  setStatus={setLikeStatus}
                  feedId={feedDetail.feedId}
                  buttonClick={feedLike}
                  buttonUnClick={feedUnLike}
                />
                <SideButton
                  icon="scrap"
                  count={feedDetail.feedScrapCount}
                  status={scrapStatus}
                  setStatus={setScrapStatus}
                  feedId={feedDetail.feedId}
                  buttonClick={feedScrap}
                  buttonUnClick={feedUnScrap}
                />
                <SideButton
                  icon="comment"
                  buttonClick={scroll}
                  count={feedDetail.feedCommentCount}
                />
                <SideButton id={feedDetail.feedId} icon="share" count={feedDetail.feedShareCount} getFeedDetailRefetch={getFeedDetailRefetch}/>
              </FeedDetailSideBlock>
            </FeedDetailStickyContainer>
          </FeedDetailSideWrapper>
        </FeedDetailWrapper>
      )}
    </>
  );
}
