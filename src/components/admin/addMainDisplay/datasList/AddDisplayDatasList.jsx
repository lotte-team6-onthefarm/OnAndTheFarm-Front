import React from 'react';
import { useQuery } from 'react-query';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';
import { getExhibitionItems } from '../../../../apis/admin/account';

export default function AddDisplayDatasList(props) {
  const { data: items, isLoading } = useQuery(
    ['getExhibitionItems', props.account],
    () => getExhibitionItems(props.account),
    {
      keepPreviousData: true,
      onSuccess: res => {
        if (res.length > 0) {
          props.setItems(res[0].exhibitionItemsId);
          props.setItemsName(res[0].exhibitionItemsName);
          props.setItemsDetail(res[0].exhibitionItemsDetail);
        }
      },
      onError: () => {},
    },
  );
  const setItemsBtn = item => {
    props.setItems(item.exhibitionItemsId);
    props.setItemsName(item.exhibitionItemsName);
    props.setItemsDetail(item.exhibitionItemsDetail);
  };
  return (
    <>
      {!isLoading && (
        <WhiteWrapper width="49%" miHeight="300px">
          소재 리스트
          <div
            style={{
              marginTop: '10px',
              height: '300px',
              overflow: 'auto',
            }}
          >
            {items.map((item, idx) => {
              return (
                <ListTextWrapper
                  key={idx}
                  style={{
                    marginRight: items.length > 5 ? '10px' : '0px',
                  }}
                  onClick={() => {
                    setItemsBtn(item);
                  }}
                >
                  <div className="mainTextContent">
                    {item.exhibitionItemsName}
                  </div>
                </ListTextWrapper>
              );
            })}
          </div>
        </WhiteWrapper>
      )}
    </>
  );
}
