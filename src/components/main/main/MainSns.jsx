import React from 'react';
import {
  MainImageWrapper,
  MainSnsBlock,
  MainSnsImage,
  MainSnsWrapper,
} from './MainSns.styled';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';
import { displayMap } from '../../../utils/exhibition';

export default function MainSns(props) {
  const data = displayMap(props.data, 'farmfluencer');
  const { data: datas, isLoading } = useQuery(
    'getAllMainFarmFluencer',
    () => getAllMainBanner(data[0].dataPicker, data[0].itemsId),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainSnsWrapper>
      <div className="accountTitle">{data[0].accountName}</div>
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
