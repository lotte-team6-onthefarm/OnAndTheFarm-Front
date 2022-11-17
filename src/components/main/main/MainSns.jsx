import React from 'react';
import {
  MainImageWrapper,
  MainSnsBlock,
  MainSnsImage,
  MainSnsWrapper,
} from './MainSns.styled';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';

export default function MainSns(props) {
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
