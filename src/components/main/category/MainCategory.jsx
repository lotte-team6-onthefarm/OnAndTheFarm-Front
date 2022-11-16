import React from 'react';
import { useQuery } from 'react-query';
import {
  MainImageA,
  MainImageSpan,
  MainImageWrapper,
  MainSnsBlock,
  MainSnsImage,
  MainSnsWrapper,
} from './MainCategory.styled';
import { getAllMainBadge } from '../../../apis/exhibition/mainpage';
import { displayMap } from '../../../utils/exhibition';

export default function MainCategory(props) {
  console.log(props.data, '카테고리');
  const { data: datas, isLoading } = useQuery(
    'getAllMainBadge',
    () => getAllMainBadge(props.data.dataPicker, props.data.itemsId),
    {
      onSuccess: () => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainSnsWrapper>
      <div className="accountTitle">{props.data.accountName}</div>
      {!isLoading && (
        <MainSnsBlock>
          {datas.badgeATypeResponseList.map((item, index) => (
            <MainImageWrapper key={index}>
              <MainImageA href={item.connectUrl}>
                <MainSnsImage src={item.imgSrc} />
                <MainImageSpan>{item.badgeName} </MainImageSpan>
              </MainImageA>
            </MainImageWrapper>
          ))}
        </MainSnsBlock>
      )}
    </MainSnsWrapper>
  );
}
