import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { SellerTitle } from '../../../../components/seller/common/Title.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import SubTitle from '../../../../components/seller/common/SubTitle';
import { EmptyTable } from '../../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductStatisticsTable } from '../../../../components/seller/products/productsStatistics/ProductsStatistics.style';
import { GreenRedStatusButton } from '../../../../components/seller/common/ColorStatusButton';
import { IconWrapper } from '../../../../components/seller/common/Icon.style';
import Pagination from '../../../../components/common/Pagination';
import Modal from '../../../../components/common/Modal';
import {
  getAllModuleList,
  getModuleList,
} from '../../../../apis/exhibition/module';
// selling : 판매중
// soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
// pause : 판매자가 판매를 일시 정지
export default function ModuleList() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [moduleCnt, setModuleCnt] = useState(0);
  const [moduleState, setModuleState] = useState('selling');
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const {
    isLoading: getModuleListLoading,
    data: moduleList,
    refetch: getModuleListRefetch,
  } = useQuery(
    ['getModuleList', nowPage],
    () => getModuleList({ page: nowPage }),
    {
      refetchOnWindowFcous: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
        setModuleCnt(res.pageVo.totalElement);
      },
      onError: {},
    },
  );

  const title = `전체 모듈 (총 ${moduleCnt}개)`;

  const moduleStatusCheck = moduleStatus => {
    return '사용가능';
  };

  const moduleStatusStyleCheck = moduleStatus => {
    // selling : 판매중   1
    // soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)  2
    // pause : 판매자가 판매를 일시 정지  3
    if (moduleStatus === 'selling') {
      return 1;
    } else if (moduleStatus === 'soldout') {
      return 2;
    } else if (moduleStatus === 'pause') {
      return 3;
    }
  };

  const zoomIn = imgSrc => {
    setSelectedImg(imgSrc);
    setModal(!modal);
  };

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <SellerTitle>모듈 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#FFBC99" title={title} />
        {!getModuleListLoading && (
          <>
            {moduleList.moduleListResponses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 모듈이 없습니다</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductStatisticsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="10%">모듈미리보기</th>
                      <th width="20%">모듈이름</th>
                      <th width="40%">모듈설명</th>
                      <th width="10%">모듈상태</th>
                      <th width="20%">모듈생성 날짜</th>
                    </tr>
                  </thead>
                  {moduleList.moduleListResponses.map((module, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{16 * nowPage + idx + 1}</td>
                          <td className="title">
                            <img
                              src={module.moduleImgSrc}
                              alt={''}
                              onClick={() => zoomIn(module.moduleImgSrc)}
                            />
                          </td>
                          <td>{module.moduleName}</td>
                          <td>{module.moduleContent}</td>
                          <td>
                            <GreenRedStatusButton
                              fontSize="12px"
                              status={moduleStatusStyleCheck(
                                module.moduleUsableStatus,
                              )}
                              text={moduleStatusCheck(
                                module.moduleUsableStatus,
                              )}
                            />
                          </td>
                          <td className="grayBack">{module.moduleCreatedAt}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ProductStatisticsTable>
              </div>
            )}
          </>
        )}
        {moduleState === 'selling'
          ? totalPage !== 0 && (
              <Pagination
                nowPage={nowPage + 1}
                totalPage={totalPage}
                setPage={setNowPage}
              ></Pagination>
            )
          : totalPage !== 0 && (
              <Pagination
                nowPage={nowPage + 1}
                totalPage={totalPage}
                setPage={setNowPage}
              ></Pagination>
            )}
        {/* modal */}
        {modal && (
          <Modal closeModal={() => setModal(!modal)} width='100%'>
            <img src={selectedImg} alt={''} />
          </Modal>
        )}
      </WhiteWrapper>
    </div>
  );
}
