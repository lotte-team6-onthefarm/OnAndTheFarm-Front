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

export default function MainCategory(props) {
  const { data: datas, isLoading } = useQuery(
    'getAllMainBadge',
    () => getAllMainBadge(
      props.data.exhibitionDataPickerId,
      props.data.exhibitionItemsId,
      ),
    {
      onSuccess: () => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainSnsWrapper>
      <div className="accountTitle">{props.data.exhibitionAccountName}</div>
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
