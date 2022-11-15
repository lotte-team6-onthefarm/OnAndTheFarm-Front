import React from 'react';
import {
  MainImageWrapper,
  MainSnsBlock,
  MainSnsImage,
  MainSnsWrapper,
} from './MainSns.styled';
import SellerSNS_1 from '../../../assets/imgs/SellerSNS_1.png';
import SellerSNS_2 from '../../../assets/imgs/SellerSNS_2.png';
import SellerSNS_3 from '../../../assets/imgs/SellerSNS_3.png';
import SellerSNS_4 from '../../../assets/imgs/SellerSNS_4.png';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';

export default function MainSns(props) {
  const { data: datas, isLoading } = useQuery(
    'getAllMainFarmFluencer',
    () => getAllMainBanner(props.data.dataPicker, props.data.itemsId),
    {
      onSuccess: res => {
        console.log(res.bannerATypeResponses, '팜플루언서Res');
      },
      enabled: props.data !== {},
    },
  );

  const SNS = [
    {
      id: 1,
      url: SellerSNS_1,
    },
    {
      id: 2,
      url: SellerSNS_2,
    },
    {
      id: 3,
      url: SellerSNS_3,
    },
    {
      id: 3,
      url: SellerSNS_4,
    },
  ];

  return (
    <MainSnsWrapper>
      <p>신규 팜플루언서</p>
      {!isLoading && (
        <MainSnsBlock>
          {datas.bannerATypeResponses.map((sns, idx) => (
            <MainImageWrapper key={idx}>
              <MainSnsImage src={sns.imgSrc} alt=""></MainSnsImage>
            </MainImageWrapper>
          ))}
        </MainSnsBlock>
      )}
    </MainSnsWrapper>
  );
}
