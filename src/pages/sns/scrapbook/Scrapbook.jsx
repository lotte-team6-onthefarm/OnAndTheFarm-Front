import React from 'react';
import { FeedScrapWrapper, ScrapImgWrapper } from './Scrapbook.styled';
import SNS_1 from '../../../assets/sns/요리1.jpg';
import SNS_2 from '../../../assets/sns/요리2.jpg';
import SNS_3 from '../../../assets/sns/요리3.jpg';
import SNS_4 from '../../../assets/sns/요리4.jpg';
import SNS_5 from '../../../assets/sns/요리5.jpg';
import SNS_6 from '../../../assets/sns/요리6.jpg';
import SNS_7 from '../../../assets/sns/요리7.jpg';
import SNS_8 from '../../../assets/sns/요리8.jpg';
import { useQuery } from 'react-query';
import { getScrapList } from '../../../apis/sns/profile';

export default function Scrapbook() {
  const turn = [SNS_1, SNS_2, SNS_3, SNS_4, SNS_5, SNS_6, SNS_7, SNS_8];
  const id = [
    'icanfly14',
    'dmstje22',
    'dmswl2258',
    'homecookMom_',
    'ItsMe',
    'mommom',
    'seoulCook',
    'fafaCooker_',
    'wweoood_o_o',
  ];
  const { data, isLoading } = useQuery('getScrapList', getScrapList, {
    onSuccess: () => {},
    onError: () => {},
  });

  return (
    <>
      {!isLoading && (
        <FeedScrapWrapper>
          {data.feedResponseList.map((feedResponse, idx) => {
            return (
              <ScrapImgWrapper key={idx}>
                <img src={feedResponse.feedImageSrc} alt="" />
                <div>@ {feedResponse.memberName}</div>
              </ScrapImgWrapper>
            );
          })}
        </FeedScrapWrapper>
      )}
    </>
  );
}
