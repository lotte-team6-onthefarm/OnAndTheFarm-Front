import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { useState } from 'react';
import {
  getSellerMyProduct,
  getSellerPauseProduct,
} from '../../../../apis/seller/product';
import { SellerTitle } from '../../../../components/seller/common/Title.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import SubTitle from '../../../../components/seller/common/SubTitle';
import useDidMountEffect from '../../../../components/common/useDidMountEffect';
import { DeliveryButtonWrapper } from '../../../../components/seller/delivery/Delivery.style';
import { EmptyTable } from '../../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductStatisticsTable } from '../../../../components/seller/products/productsStatistics/ProductsStatistics.style';
import { GreenRedStatusButton } from '../../../../components/seller/common/ColorStatusButton';
import {
  IconBox,
  IconWrapper,
} from '../../../../components/seller/common/Icon.style';
import Pagination from '../../../../components/common/Pagination';
import Modal from '../../../../components/common/Modal';
// selling : 판매중
// soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
// pause : 판매자가 판매를 일시 정지
export default function ModuleList() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productCnt, setProductCnt] = useState(0);
  const [productState, setProductState] = useState('selling');
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');


  // function
  const productStateHandler = num => {
    setProductState(num);
  };
  const {
    isLoading: sellerProductLoading,
    data: products,
    refetch: sellerProductListRefetch,
  } = useQuery(
    ['sellerProducts', nowPage],
    productState === 'selling'
      ? () => getSellerMyProduct(nowPage)
      : () => getSellerPauseProduct(nowPage),
    {
      refetchOnWindowFcous: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
        setProductCnt(res.pageVo.totalElement);
      },
      onError: {},
    },
  );

  const title = `전체 상품 (총 ${productCnt}개)`;
  // hook
  const navigate = useNavigate();

  //function
  const updateUrl = id => {
    navigate(`/seller/products/update/${id}`);
  };

  const productDetailUrl = id => {
    navigate(`/products/detail/${id}`);
  };

  const productStatusCheck = productStatus => {
    return '사용가능'
  };

  const productStatusStyleCheck = productStatus => {
    // selling : 판매중   1
    // soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)  2
    // pause : 판매자가 판매를 일시 정지  3
    if (productStatus === 'selling') {
      return 1;
    } else if (productStatus === 'soldout') {
      return 2;
    } else if (productStatus === 'pause') {
      return 3;
    }
  };

  useDidMountEffect(() => {
    //요일이 바뀔때 마다 refetch
    sellerProductListRefetch();
  }, [productState]);

  const zoomIn = (imgSrc) => {
    setSelectedImg(imgSrc)
    setModal(!modal)
  }

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <SellerTitle>모듈 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#FFBC99" title={title} />
        {/* <DeliveryButtonWrapper state={productState}>
          <div
            className="productStateButton"
            onClick={() => {
              productStateHandler('selling');
            }}
          >
            판매 중
          </div>
          <div
            className="productStateButton"
            onClick={() => {
              productStateHandler('pause');
            }}
          >
            판매 중지
          </div>
        </DeliveryButtonWrapper> */}
        {!sellerProductLoading && (
          <>
            {products.productSelectionResponses.length === 0 ? (
              <EmptyTable height="60vh">
                {productState === 'selling' ? (
                  <h3>현재 등록된 상품이 없습니다</h3>
                ) : (
                  <h3>일시정지 중인 상품이 없습니다</h3>
                )}
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
                  {products.productSelectionResponses.map((product, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{16 * nowPage + idx + 1}</td>
                          <td className="title">
                            <img src={product.productMainImgSrc} alt={''} onClick={() => zoomIn(product.productMainImgSrc)}/>
                          </td>
                          <td>{product.productName}</td>
                          <td>
                            {product.productName}
                            {product.productName}
                            {product.productName}원
                          </td>
                          <td>
                            <GreenRedStatusButton
                              fontSize="12px"
                              status={productStatusStyleCheck(
                                product.productStatus,
                              )}
                              text={productStatusCheck(product.productStatus)}
                            />
                          </td>

                          <td className="grayBack">
                            <IconWrapper>
                              {product.reviewRate === null ? (
                                <div className="IconWrapper_none_review">
                                  등록된 리뷰가 없습니다
                                </div>
                              ) : (
                                <>{product.productRegisterDate}</>
                              )}
                            </IconWrapper>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ProductStatisticsTable>
              </div>
            )}
          </>
        )}
        {productState === 'selling'
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
          <Modal closeModal={() => setModal(!modal)}>
            <img src={selectedImg} alt={''}/>
          </Modal>
        )}
      </WhiteWrapper>
    </div>
  );
}
