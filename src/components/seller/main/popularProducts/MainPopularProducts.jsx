import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../../common/Box.style';
import { IconBox, IconWrapper } from '../../common/Icon.style';
import { BlackBorderButton } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { MainPopularProductsTable } from './MainPopularProducts.style';

export default function MainPopularProducts() {
  const products = [
    {
      title: '달콤 샤인 머스캣',
      sales: '1231',
      img: '../../../../assets/products/머스캣.png',
    },
    {
      title: '경북 청도 천도복숭아 2kg/1box',
      sales: '321',
      img: '../../../../assets/products/복숭아.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      sales: '212',
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g2',
      sales: '24',
      img: '../../../../assets/products/거봉2.png',
    },
  ];

  // hook
  const navigate = useNavigate();

  //function
  const productUrl = () => {
    navigate('/seller/products');
  };
  return (
    <WhiteWrapper width="100%" marginBottom="10px" padding="24px">
      <SubTitle color="#B5E4CA" title="인기 상품" />
      <MainPopularProductsTable>
        <thead>
          <tr>
            <th width="80%">상품</th>
            <th width="20%">좋아요수</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img
                    src={require('../../../../assets/products/거봉.png')}
                    alt=""
                  />
                  <div className="title">{product.title}</div>
                </td>
                <td>
                  <IconWrapper>
                    <IconBox>
                      <AiTwotoneHeart style={{ color: '#f73f2a' }} />
                    </IconBox>
                    {product.sales}
                  </IconWrapper>
                </td>
              </tr>
            );
          })}
        </tbody>
      </MainPopularProductsTable>
      <BlackBorderButton onClick={productUrl}>전체 상품</BlackBorderButton>
    </WhiteWrapper>
  );
}
