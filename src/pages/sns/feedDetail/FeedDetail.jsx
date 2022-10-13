import React from 'react';
import { HorizontalLine } from '../../../components/common/HorizontalLine.style';
import FeedWriter from '../../../components/sns/feed/FeedWriter';
import FeedComment from '../../../components/sns/feedDetail/FeedComment/FeedCommentInput';
import FeedCommentList from '../../../components/sns/feedDetail/FeedComment/FeedCommentList';
import FeedProduct from '../../../components/sns/feedDetail/FeedProduct/FeedProduct';
import SideButton from '../../../components/sns/feedDetail/SideButton';
import {
  FeedDetailBlock,
  FeedDetailSideBlock,
  FeedDetailSideWrapper,
  FeedDetailStickyContainer,
  FeedDetailWrapper,
  FeedImageWrapper,
} from './FeedDetail.styled';

export default function FeedDetail() {
  return (
    <FeedDetailWrapper>
      <FeedDetailBlock>
        <FeedWriter />
        <FeedImageWrapper>
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166547899181963276.jpeg?gif=1&w=720&webp=1"
            alt=""
          ></img>
        </FeedImageWrapper>
        <FeedProduct />
        <HorizontalLine color="#d7d7d7" />
        <FeedComment />
        <FeedCommentList />
      </FeedDetailBlock>
      <FeedDetailSideWrapper>
        <FeedDetailStickyContainer>
          <FeedDetailSideBlock>
            <SideButton icon="heart" count="13" />
            <SideButton icon="scrap" count="15" />
            <SideButton icon="comment" count="13" />
            <SideButton icon="share" count="13" />
          </FeedDetailSideBlock>
        </FeedDetailStickyContainer>
      </FeedDetailSideWrapper>
    </FeedDetailWrapper>
  );
}
