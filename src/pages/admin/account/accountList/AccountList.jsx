import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getAccountList } from '../../../../apis/admin/account';
import Pagination from '../../../../components/common/Pagination';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import { ProductStatisticsTable } from '../../../../components/seller/products/productsStatistics/ProductsStatistics.style';
import { getDateConnect } from '../../../../utils/commonFunction';
import { AccountListTbody } from './AccoutList.styled';

export default function AccountList() {
  const [nowPage, setNowPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const datas = [
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
    { title: 'KB 이벤트 배너', sTime: '2022-10-12', eTime: '2022-10-15' },
  ];

  const navigate = useNavigate();
  const accountDetailUrl = id => {
    navigate(`account/detail/${id}`);
  };

  const { data, isLoading } = useQuery(
    ['getAccountList', nowPage],
    () => getAccountList(nowPage),
    {
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
      },
      onError: () => {},
    },
  );

  return (
    <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
      <h2>구좌 목록</h2>
      {!isLoading && (
        <div style={{ minHeight: '60vh' }}>
          <ProductStatisticsTable>
            <thead>
              <tr style={{ fontSize: '13px' }}>
                <th width="8%">NO.</th>
                <th width="56%">구좌이름</th>
                <th width="18%">시작시간</th>
                <th width="18%">종료시간</th>
              </tr>
            </thead>
            {data.exhibitionSelectionResponses.map((data, idx) => {
              return (
                <AccountListTbody key={idx}>
                  <tr>
                    <td>{idx + 1}</td>
                    <td
                      className="accountListTitle"
                      onClick={() => {
                        accountDetailUrl(data.exhibitionAccountId);
                      }}
                    >
                      {data.exhibitionAccountName}
                    </td>
                    <td>{getDateConnect(data.exhibitionAccountStartTime)}</td>
                    <td>{getDateConnect(data.exhibitionAccountEndTime)}</td>
                  </tr>
                </AccountListTbody>
              );
            })}
          </ProductStatisticsTable>
        </div>
      )}
      {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
    </WhiteWrapper>
  );
}
