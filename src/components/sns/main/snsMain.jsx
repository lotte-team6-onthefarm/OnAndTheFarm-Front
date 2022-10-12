import React from 'react';
import { FeedWrapper } from '../../../pages/sns/snsMain.style';
import { SnsFeedBlock } from './SnsFeed.styled';
import MainMyFeed from './MainMyFeed';
import MainLike from './MainLike';
import MainScrap from './MainScrap';

export default function SnsMain() {
  const datas = ['', '', '', '', '', '', '', ''];
  const three = ['', '', '', '', ''];
  const five = ['', '', '', '', ''];
  return (
    <FeedWrapper>
      <SnsFeedBlock>
        <MainMyFeed datas={datas} />
        {/* 좋아요 */}
        <MainLike three={three} />
        {/* 스크랩북 */}
        <MainScrap five={five} />
      </SnsFeedBlock>
    </FeedWrapper>
  );
}
