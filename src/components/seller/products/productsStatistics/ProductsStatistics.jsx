import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import { BsPencil } from 'react-icons/bs';
import { ProductStatisticsTable } from './ProductsStatistics.style';
import { AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai';
import { IconBox, IconWrapper } from '../../common/Icon.style';
import { useQuery } from 'react-query';
import {
  getSellerMyProduct,
  getSellerPauseProduct,
} from '../../../../apis/seller/product';
import { useState } from 'react';
import { EmptyTable } from '../../main/popularProducts/MainPopularProducts.style';
import { GreenRedStatusButton } from '../../common/ColorStatusButton';
import { DeliveryButtonWrapper } from '../../delivery/Delivery.style';
import useDidMountEffect from '../../../common/useDidMountEffect';
import Pagination from '../../../common/Pagination';

// selling : 판매중
// soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
// pause : 판매자가 판매를 일시 정지
export default function ProductsStatistics() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [productCnt, setProductCnt] = useState(0);
  const [productState, setProductState] = useState('selling');

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
    // selling : 판매중
    // soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
    // pause : 판매자가 판매를 일시 정지
    if (productStatus === 'selling') {
      return '판매중';
    } else if (productStatus === 'soldout') {
      return '재고부족';
    } else if (productStatus === 'pause') {
      return '판매정지';
    }
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

  return (
    <>
      <SellerTitle>상품 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#FFBC99" title={title} />
        <DeliveryButtonWrapper state={productState}>
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
        </DeliveryButtonWrapper>
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
                      <th width="30%">상품명</th>
                      <th width="10%">상태</th>
                      <th width="12.5%">가격</th>
                      <th width="10%">별점</th>
                      <th width="10%">좋아요수</th>
                      <th width="12.5%">판매량</th>
                    </tr>
                  </thead>
                  {products.productSelectionResponses.map((product, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{16 * nowPage + idx + 1}</td>
                          <td
                            className="title"
                            onClick={() => {
                              productDetailUrl(product.productId);
                            }}
                          >
                            <img src={product.productMainImgSrc} alt={''} />
                            <div>{product.productName}</div>
                          </td>
                          <td>
                            <GreenRedStatusButton
                              fontSize="12px"
                              status={productStatusStyleCheck(
                                product.productStatus,
                              )}
                              text={productStatusCheck(product.productStatus)}
                            />
                            <div className="updateBtn">
                              <div onClick={() => updateUrl(product.productId)}>
                                <BsPencil />
                              </div>
                            </div>
                          </td>
                          <td>{product.productPrice.toLocaleString()}원</td>
                          <td className="grayBack">
                            <IconWrapper>
                              {product.reviewRate === null ? (
                                <div className="IconWrapper_none_review">
                                  등록된 리뷰가 없습니다
                                </div>
                              ) : (
                                <>
                                  <IconBox>
                                    <AiTwotoneStar
                                      style={{ color: '#eff21b' }}
                                    />
                                  </IconBox>
                                  {product.reviewRate}
                                </>
                              )}
                            </IconWrapper>
                          </td>
                          <td>
                            <IconWrapper>
                              <IconBox>
                                <AiTwotoneHeart style={{ color: '#f73f2a' }} />
                              </IconBox>
                              {product.productWishCount}
                            </IconWrapper>
                          </td>
                          <td>{product.productSoldCount}</td>
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
      </WhiteWrapper>
    </>
  );
}
