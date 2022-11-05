import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../../components/common/Pagination';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import { ProductStatisticsTable } from '../../../../components/seller/products/productsStatistics/ProductsStatistics.style';
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

  return (
    <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
      <h2>구좌 목록</h2>
      <div style={{ minHeight: '60vh' }}>
        <ProductStatisticsTable>
          <thead>
            <tr style={{ fontSize: '13px' }}>
              <th width="10%">NO.</th>
              <th width="60%">전시명</th>
              <th width="15%">시작시간</th>
              <th width="15%">종료시간</th>
            </tr>
          </thead>
          {datas.map((data, idx) => {
            return (
              <AccountListTbody key={idx}>
                <tr>
                  <td>{idx + 1}</td>
                  <td
                    className="accountListTitle"
                    onClick={() => {
                      accountDetailUrl(1);
                    }}
                  >
                    {data.title}
                  </td>
                  <td>{data.sTime}</td>
                  <td>{data.eTime}</td>
                </tr>
              </AccountListTbody>
            );
          })}
        </ProductStatisticsTable>
      </div>
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
