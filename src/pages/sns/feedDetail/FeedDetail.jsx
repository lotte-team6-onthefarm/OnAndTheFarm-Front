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
  TooltipDiv,
  TooltipBoxDiv,
  TooltipInnerDiv,
  TooltipArrowDiv,
  TooltipContentDiv,
  ProductImg,
  ProductImgDiv,
  ProductInfoDiv,
  SvgDiv,
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
import FeedCarousel from '../../../components/sns/feedDetail/FeedCarousel';
export default function FeedDetail(props) {
  const inputRef = useRef([]);
  const param = useParams();
  const [feedImgIdx, setFeedImgIdx] = useState(0);
  const [feedImageProductList, setFeedImageProductList] = useState([]);
  const [allFeedImageProductList, setAllFeedImageProductList] = useState([]);
  const [feedId, setFeedId] = useState(param.id);
  const [likeStatus, setLikeStatus] = useState(false);
  const [scrapStatus, setScrapStatus] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [tooltip, setTooltip] = useState(false);

  const queryClient = useQueryClient();

  const params = new URLSearchParams(window.location.search);
  const feedNumber = params.get('feedNumber');
  const {
    isLoading: isFeedDetailLoading,
    data: feedDetail,
    refetch: getFeedDetailRefetch,
  } = useQuery('FeedDetail', () => getFeedDetail(feedId,feedNumber), {
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

  const {
    isLoading: isCommentLoading,
    data: commentList,
    refetch: getCommentRefetch,
  } = useQuery('Comment', () => getComment(feedId), {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });

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

  const mouseOff = () => {
    setTooltip(false);
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
              <FeedCarousel
                images={feedDetail.feedImageList}
                changeFeedImg={changeFeedImg}
                feedImageProductList={feedDetail.feedImageProductList}
                height="540px"
                setProductInfo={setProductInfo}
                tooltip={tooltip}
                setTooltip={setTooltip}
              ></FeedCarousel>
            </FeedImageWrapper>

            <FeedProduct
              feedContent={feedDetail.feedContent}
              feedImageProductList={feedImageProductList}
              feedNumber={feedNumber}
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
            {tooltip && (
              <TooltipDiv
                data-popout="true"
                style={{
                  position: 'absolute',
                  top: `${productInfo.posY-60}px`,
                  left: `${productInfo.posX+8}px`,
                  display: 'flex',
                  cursor: 'pointer',
                }}
                onMouseLeave={() => mouseOff()}
              >
                <TooltipBoxDiv>
                  <TooltipInnerDiv>
                    <a
                      axis="1"
                      direction="0,1"
                      overflown="false,false"
                      index="0"
                      href={`/products/detail/${productInfo.productId}`+(feedNumber !== null ? `?feedNumber=`+feedNumber:'')}
                    >
                      <TooltipContentDiv>
                        <ProductImgDiv>
                          <ProductImg
                            src={productInfo.productMainImgSrc}
                            alt="onandthefarmlogo"
                          ></ProductImg>
                        </ProductImgDiv>
                        <ProductInfoDiv>
                          <div>{productInfo.sellerName}</div>
                          <div>
                            {productInfo.productName}
                          </div>
                          <div>{productInfo.productPrice.toLocaleString()} 원</div>
                        </ProductInfoDiv>
                        <SvgDiv>
                          <div>
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <path
                                fill="currentColor"
                                imagehover="nonzero"
                                d="M6 19.692L8.25 22 18 12 8.25 2 6 4.308 13.5 12z"
                              ></path>
                            </svg>
                          </div>
                        </SvgDiv>
                      </TooltipContentDiv>
                    </a>
                  </TooltipInnerDiv>
                  <TooltipArrowDiv></TooltipArrowDiv>
                </TooltipBoxDiv>
              </TooltipDiv>
            )}
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
                <SideButton
                  id={feedDetail.feedId}
                  icon="share"
                  count={feedDetail.feedShareCount}
                  getFeedDetailRefetch={getFeedDetailRefetch}
                  feedNumber={feedDetail.feedNumber}
                />
              </FeedDetailSideBlock>
            </FeedDetailStickyContainer>
          </FeedDetailSideWrapper>
        </FeedDetailWrapper>
      )}
    </>
  );
}
