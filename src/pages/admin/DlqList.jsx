import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getDlt } from '../../apis/admin/feignclient';
import { SellerTitle } from '../../components/seller/common/Title.style';
import { WhiteWrapper } from '../../components/seller/common/Box.style';
import SubTitle from '../../components/seller/common/SubTitle';
import { EmptyTable } from '../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductStatisticsTable } from '../../components/seller/products/productsStatistics/ProductsStatistics.style';
import { GreenRedStatusButton } from '../../components/seller/common/ColorStatusButton';
import { IconWrapper } from '../../components/seller/common/Icon.style';
import Pagination from '../../components/common/Pagination';
import Modal from '../../components/common/Modal';

// selling : 판매중
// soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
// pause : 판매자가 판매를 일시 정지
export default function DlqList() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [moduleCnt, setModuleCnt] = useState(0);
  const [moduleState, setModuleState] = useState('selling');
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const {
    isLoading: getDltListLoading,
    data: moduleList,
    refetch: getDltListRefetch,
  } = useQuery(['getDltList', nowPage], () => getDlt({ page: nowPage }), {
    refetchOnWindowFcous: true,
    keepPreviousData: true,
    onSuccess: res => {
    },
    onError: {},
  });

  const title = `전체 리스트 (총 0개)`;

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <SellerTitle>데드레터큐</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#FFBC99" title={title} />
        {!getDltListLoading && (
          <>
            {moduleList.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 모듈이 없습니다</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductStatisticsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="15%">dlqPaymentId</th>
                      <th width="40%">orderSerial</th>
                      <th width="40%">paymentDepositAmount</th>
                    </tr>
                  </thead>
                  {moduleList.map((item, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{16 * nowPage + idx + 1}</td>
                          <td className="title">
                            {item.dlqPaymentId}
                          </td>
                          <td>{item.orderSerial}</td>
                          <td>{item.paymentDepositAmount}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ProductStatisticsTable>
              </div>
            )}
          </>
        )}
      </WhiteWrapper>
    </div>
  );
}
