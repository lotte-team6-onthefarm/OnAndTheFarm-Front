import React from 'react';
import { FeedWrapper } from '../../../pages/sns/snsMain.style';
import { SnsFeedBlock } from './SnsFeed.styled';
import MainMyFeed from './MainMyFeed';
import MainLike from './MainLike';
import MainScrap from './MainScrap';
import { useRecoilValue } from 'recoil';
import { snsNowRole } from '../../../recoil';
import MainProduct from './seller/MainProduct';

export default function SnsMain(props) {
  const role = useRecoilValue(snsNowRole); // client 전역
  return (
    <FeedWrapper>
      <SnsFeedBlock>
        {/* 내가 올린 피드 */}
        <MainMyFeed photoCount={props.countData.photoCount} />
        {/* 좋아요 */}
        {role === 'user' ? (
          <MainLike wishCount={props.countData.wishCount} />
        ) : (
          <MainProduct productCount={props.countData.productCount} />
        )}

        {/* 스크랩북 */}
        <MainScrap scrapCount={props.countData.scrapCount} />
      </SnsFeedBlock>
    </FeedWrapper>
  );
}
