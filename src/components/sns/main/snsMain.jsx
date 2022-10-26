import React from 'react';
import { FeedWrapper } from '../../../pages/sns/snsMain.style';
import { SnsFeedBlock } from './SnsFeed.styled';
import MainMyFeed from './MainMyFeed';
import MainLike from './MainLike';
import MainScrap from './MainScrap';

export default function SnsMain(props) {
  return (
    <FeedWrapper>
      <SnsFeedBlock>
        {/* 내가 올린 피드 */}
        <MainMyFeed photoCount={props.countData.photoCount} />
        {/* 좋아요 */}
        <MainLike wishCount={props.countData.wishCount} />
        {/* 스크랩북 */}
        <MainScrap scrapCount={props.countData.scrapCount} />
      </SnsFeedBlock>
    </FeedWrapper>
  );
}
