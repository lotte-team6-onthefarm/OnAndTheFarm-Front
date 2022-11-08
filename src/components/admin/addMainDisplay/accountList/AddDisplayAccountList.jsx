import React from 'react';
import { useQuery } from 'react-query';
import { getExhibitionCategoryNo } from '../../../../apis/admin/account';
import { WhiteWrapper } from '../../../seller/common/Box.style';

export default function AddDisplayAccountList(props) {
  const handleChange = e => {
    props.setAccount(e.target.value);
  };
  // props.categoryId
  const { data: accounts, isLoading } = useQuery(
    ['getExhibitionCategoryNo', props.categoryId],
    () => getExhibitionCategoryNo(props.categoryId),
    {
      keepPreviousData: true,
      onSuccess: res => {
        if (res.length > 0 && res[0].exhibitionAccountId !== undefined)
          props.setAccount(res[0].exhibitionAccountId);
      },
      onError: () => {},
    },
  );
  return (
    <>
      {!isLoading && (
        <WhiteWrapper
          width="68%"
          style={{
            fontSize: '18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          구좌 선택
          <select className="addMainDisplaySelect" onChange={handleChange}>
            {accounts.map(account => (
              <option
                key={account.exhibitionAccountId}
                value={account.exhibitionAccountId}
              >
                {account.exhibitionAccountName}
              </option>
            ))}
          </select>
        </WhiteWrapper>
      )}
    </>
  );
}
