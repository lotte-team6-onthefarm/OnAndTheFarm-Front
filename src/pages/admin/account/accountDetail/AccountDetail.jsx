import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getExhibitionAccountId } from '../../../../apis/admin/account';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import { getDateConnect } from '../../../../utils/commonFunction';
import { AccountDetailTitle } from './AccountDetail.styled';
import AccountItemDetail from './AccountItemDetail';
import TextWrapper from './TextWrapper';

export default function AccountDetail() {
  const param = useParams();
  const id = param.id;

  const { data, isLoading } = useQuery(
    ['getExhibitionAccountId', id],
    () => getExhibitionAccountId(id),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
  return (
    <>
      <WhiteWrapper width="100%" marginBottom="10px">
        <h2>구좌 상세보기</h2>
        <div>
          {!isLoading && (
            <div style={{ marginTop: '30px' }}>
              <TextWrapper
                title="구좌 이름"
                content={data.exhibitionAccountName}
              />
              <TextWrapper
                title="구좌 설명"
                content={data.exhibitionAccountDetail}
              />
              <TextWrapper
                title="시작 시간"
                content={getDateConnect(data.exhibitionAccountStartTime)}
              />
              <TextWrapper
                title="종료 시간"
                content={getDateConnect(data.exhibitionAccountEndTime)}
              />
            </div>
          )}
        </div>
      </WhiteWrapper>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <AccountDetailTitle>
          <h2 style={{ marginBottom: '30px' }}>데이터 목록</h2>
          <div className="accountDetailNotice">
            * 데이터 순서는 메인페이지 등록 시 수정 가능합니다
          </div>
        </AccountDetailTitle>
        {!isLoading &&
          data.exhibitionAccountItemsDetailResponseList.map((items, idx) => (
            <div key={idx}>
              <TextWrapper
                title="데이터 리스트"
                content={items.exhibitionItemsName}
              />
              <TextWrapper
                title="데이터 리스트 설명"
                content={items.exhibitionItemsDetail}
              />
              <AccountItemDetail title="데이터" items={items} />
              <HorizontalLine color="#F2F2F2" />
            </div>
          ))}
      </WhiteWrapper>
    </>
  );
}
