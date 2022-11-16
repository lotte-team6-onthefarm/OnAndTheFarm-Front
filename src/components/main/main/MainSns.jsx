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
  console.log(props.data, '팜플루언서');
  // const data = displayMap(props.data, 'farmfluencer');
  const { data: datas, isLoading } = useQuery(
    'getAllMainFarmFluencer',
    () =>
      getAllMainBanner(
        props.data.exhibitionDataPickerId,
        props.data.exhibitionItemsId,
      ),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainSnsWrapper>
      <div className="accountTitle">{props.data.exhibitionAccountName}</div>
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
