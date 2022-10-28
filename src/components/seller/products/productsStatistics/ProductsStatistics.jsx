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
import { getSellerMyProduct } from '../../../../apis/seller/product';
import { useState } from 'react';
import { EmptyTable } from '../../main/popularProducts/MainPopularProducts.style';
import { GreenRedStatusButton } from '../../common/ColorStatusButton';

export default function ProductsStatistics() {
  const [pageNo, setPageNo] = useState(0);
  const [productCnt, setProductCnt] = useState(0);
  const { isLoading: sellerProductLoading, data: products } = useQuery(
    'sellerProducts',
    () => getSellerMyProduct(pageNo),
    {
      refetchOnMount: true,
      refetchOnWindowFcous: true,
      onSuccess: res => {
        setProductCnt(res.length);
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
    // soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)  1
    // pause : 판매자가 판매를 일시 정지  2
    if (productStatus === 'selling') {
      return 1;
    } else if (productStatus === 'soldout') {
      return 2;
    } else if (productStatus === 'pause') {
      return 3;
    }
  };

  return (
    <>
      <SellerTitle>상품 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#FFBC99" title={title} />
        {!sellerProductLoading && (
          <>
            {products.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 상품이 없습니다</h3>
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
                      <th width="12.5%">조회수</th>
                    </tr>
                  </thead>
                  {products.map((product, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{idx + 1}</td>
                          <td
                            className="title"
                            onClick={() => {
                              productDetailUrl(product.productId);
                            }}
                          >
                            <img
                              src={product.productMainImgSrc}
                              alt={require('../../../../assets/products/복숭아.png')}
                            />
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
                          <td>2회</td>
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
    </>
  );
}
