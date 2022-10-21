import React from 'react';
import { FeedWrapper } from '../../../pages/sns/snsMain.style';
import { SnsFeedBlock } from './SnsFeed.styled';
import MainMyFeed from './MainMyFeed';
import MainLike from './MainLike';
import MainScrap from './MainScrap';
import like1 from '../../../assets/sns/mysns/like1.png';
import like2 from '../../../assets/sns/mysns/like2.png';
import like3 from '../../../assets/sns/mysns/like3.png';
import like4 from '../../../assets/sns/mysns/like4.png';
import like5 from '../../../assets/sns/mysns/like5.png';
import myfeed1 from '../../../assets/sns/mysns/myfeed1.png';
import myfeed2 from '../../../assets/sns/mysns/myfeed2.png';
import myfeed3 from '../../../assets/sns/mysns/myfeed3.png';
import myfeed4 from '../../../assets/sns/mysns/myfeed4.png';
import myfeed5 from '../../../assets/sns/mysns/myfeed5.png';
import 요리1 from '../../../assets/sns/요리1.jpg';
import 요리2 from '../../../assets/sns/요리2.jpg';
import 요리3 from '../../../assets/sns/요리3.jpg';
import 요리4 from '../../../assets/sns/요리4.jpg';
import 요리5 from '../../../assets/sns/요리5.jpg';
import 요리6 from '../../../assets/sns/요리6.jpg';
import 요리7 from '../../../assets/sns/요리7.jpg';
import 요리8 from '../../../assets/sns/요리8.jpg';

export default function SnsMain() {
  const datas = [myfeed1, myfeed2, myfeed3, myfeed4, myfeed5];
  const three = [
    like1,
    like2,
    like3,
    like4,
    like5,
    'https://contents.lotteon.com/itemimage/_v173027/LF/15/44/31/9_/0/LF1544319_0_1.jpg/dims/optimize/dims/resizemc/360x360',
  ];
  const five = [요리1, 요리2, 요리3, 요리4, 요리5, 요리6, 요리7, 요리8];
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
