import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../../common/Box.style';
import { IconBox, IconWrapper } from '../../common/Icon.style';
import { BlackBorderButton } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { MainPopularProductsTable } from './MainPopularProducts.style';

export default function MainPopularProducts(props) {
  const products = props.products;
  console.log(props);

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
            <th width="85%">상품</th>
            <th width="15%">좋아요수</th>
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
                  <div className="title">{product.productName}</div>
                </td>
                <td>
                  <IconWrapper>
                    <IconBox>
                      <AiTwotoneHeart style={{ color: '#f73f2a' }} />
                    </IconBox>
                    {product.productWishCount}
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
