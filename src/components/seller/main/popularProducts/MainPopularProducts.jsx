import React from 'react';
import { toLocaleString } from '../../../../utils/commonFunction';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function MainPopularProducts() {
  const products = [
    {
      title: '달콤 샤인 머스캣',
      sales: '1249000',
      img: '../../../../assets/products/머스캣.png',
    },
    {
      title: '경북 청도 천도복숭아 2kg/1box',
      sales: '480500',
      img: '../../../../assets/products/복숭아.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      sales: '385500',
      img: '../../../../assets/products/거봉.png',
    },
    {
      title: '국내산 프리미엄 거봉포도 900g',
      sales: '3855003',
      img: '../../../../assets/products/거봉.png',
    },
  ];
  return (
    <WhiteWrapper
      width="100%"
      height="500px"
      marginBottom="10px"
      padding="24px"
    >
      <SubTitle color="#B5E4CA" title="인기 상품" />
      <table>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>상품</th>
            <th>수익</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return (
              <tr key={{ idx }}>
                <td
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={require('../../../../assets/products/거봉.png')}
                    alt=""
                    style={{ marginRight: '10px' }}
                  />
                  {product.title}
                </td>
                <td>{toLocaleString(product.sales)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </WhiteWrapper>
  );
}
