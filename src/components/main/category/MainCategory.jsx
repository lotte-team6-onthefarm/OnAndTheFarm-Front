import React from 'react';
import { useQuery } from 'react-query';
import {
  MainImageA,
  MainImageSpan,
  MainImageWrapper,
  MainCategoryBlock,
  MainCategoryImage,
  MainCategoryWrapper,
} from './MainCategory.styled';
import { getAllMainBadge } from '../../../apis/exhibition/mainpage';

export default function MainCategory(props) {
  const lazys = ['', '', '', '', '', '', '', ''];
  const { data: datas, isLoading } = useQuery(
    'getAllMainBadge',
    () =>
      getAllMainBadge(
        props.data.exhibitionDataPickerId,
        props.data.exhibitionItemsId,
      ),
    {
      onSuccess: () => {},
      enabled: props.data !== {},
    },
  );
  return (
    <MainCategoryWrapper>
      {!isLoading ? (
        <>
          <div className="accountTitle">{props.data.exhibitionAccountName}</div>
          <MainCategoryBlock>
            {datas.badgeATypeResponseList.map((item, index) => (
              <MainImageWrapper key={index}>
                <MainImageA href={item.connectUrl}>
                  <MainCategoryImage src={item.imgSrc} />
                  <MainImageSpan>{item.badgeName} </MainImageSpan>
                </MainImageA>
              </MainImageWrapper>
            ))}
          </MainCategoryBlock>
        </>
      ) : (
        <>
          <div className="accountTitle">{props.data.exhibitionAccountName}</div>
          <MainCategoryBlock>
            {lazys.map((item, index) => (
              <MainImageWrapper
                key={index}
                className="lazyActive skeleton-list-item"
              >
                <MainImageA href={item.connectUrl}>
                  <MainCategoryImage
                    src={item.imgSrc}
                    alt=""
                    // className="lazyActive"
                  />
                  <MainImageSpan>{item.badgeName} </MainImageSpan>
                </MainImageA>
              </MainImageWrapper>
            ))}
          </MainCategoryBlock>
        </>
      )}
    </MainCategoryWrapper>
  );
}
