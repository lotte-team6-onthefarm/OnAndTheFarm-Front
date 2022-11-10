import React from 'react';
import { Link } from 'react-router-dom';
import MainCategory from '../../components/main/category/MainCategory';
import MainBanner from '../../components/main/main/MainBanner';
import MainCarousel from '../../components/main/main/MainCarousel';
import MainSns from '../../components/main/main/MainSns';
import MainSnsCarousel from '../../components/main/main/MainSnsCarousel';
import MainProductsPopular from '../../components/main/products/MainProductsPopular';
import { MainContentDiv } from './mainMainPage.style';
import { dataTool } from '../../components/display/Product/dataTool';
export default function MainMainPage() {
  const mainLayout = [
    'EasterEgg',
    'MainCarousel',
    'MainProductsPopular',
    'MainSnsCarousel',
    'MainCategory',
    'MainBanner',
    'MainSns',
  ];
  // const dataTool = [<Product10001 />, <Product10002 />, <Product10003 />];
  /* 100001 : 전체 데이터
 * 100002 : id, image, name, price ,saleCount 
   100003 : id, image, name, price, saleCount, sellerName
*/
  const tool = 100001;
  const components = {
    MainCarousel: <MainCarousel />,
    MainCategory: <MainCategory />,
    MainProductsPopular: <MainProductsPopular dataTool={dataTool[tool]} />,
    MainBanner: <MainBanner />,
    MainSnsCarousel: <MainSnsCarousel />,
    MainSns: <MainSns />,
    EasterEgg: (
      <div style={{ margin: '100px 0', display: 'none' }}>
        <Link to="snstest">등록</Link>
      </div>
    ),
  };

  return (
    <MainContentDiv>
      {mainLayout.map((item, idx) => {
        return <div key={idx}>{components[item]}</div>;
      })}
    </MainContentDiv>
  );
}
