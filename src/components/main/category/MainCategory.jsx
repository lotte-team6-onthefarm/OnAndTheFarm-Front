import React from 'react';
import {
  MainImageA,
  MainImageSpan,
  MainImageWrapper,
  MainSnsBlock,
  MainSnsImage,
  MainSnsWrapper,
} from './MainCategory.styled';
import SellerSNS_1 from '../../../assets/imgs/SellerSNS_1.png';
import SellerSNS_2 from '../../../assets/imgs/SellerSNS_2.png';
import SellerSNS_3 from '../../../assets/imgs/SellerSNS_3.png';
import SellerSNS_4 from '../../../assets/imgs/SellerSNS_4.png';

export default function MainCategory() {
  const Category = [
    {
      id: 1,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485672496321483.png?w=256',
      text: '쇼핑하기',
    },
    {
      id: 2,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166774467947795922.png?w=256',
      text: '오시즌위크',
    },
    {
      id: 3,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485696782888460.png?w=256',
      text: '오늘의딜',
    },
    {
      id: 4,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166556933560554347.png?w=256',
      text: '오늘뭐하지',
    },
    {
      id: 5,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485744673486167.png?w=256',
      text: '식품관',
    },
    {
      id: 6,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485744334279663.png?w=256',
      text: '집들이',
    },
    {
      id: 7,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166536291332183981.png?w=256',
      text: '꿀잼시리즈',
    },
    {
      id: 8,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485741189749105.png?w=256',
      text: '빠른배송',
    },
    {
      id: 9,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485741189749105.png?w=256',
      text: '빠른배송',
    },
    {
      id: 10,
      move: '/products',
      url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/shortcut/home_feed_shortcut_sets/166485740201992331.png?w=256',
      text: '리모델링',
    },
  ];

  return (
    <MainSnsWrapper>
      <p>카테고리</p>
      <MainSnsBlock>
        {Category.map((item, index) => (
          <MainImageWrapper key={index}>
            <MainImageA href={item.move}>
              <MainSnsImage
                src={item.url}
              />
              <MainImageSpan>
                {item.text}{' '}
              </MainImageSpan>
            </MainImageA>
          </MainImageWrapper>
        ))}
      </MainSnsBlock>
    </MainSnsWrapper>
  );
}
