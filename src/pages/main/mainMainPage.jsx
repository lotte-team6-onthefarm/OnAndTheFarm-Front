import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Product10001 from '../../components/display/Product/Product10001';
import Product10002 from '../../components/display/Product/Product10002';
import Product10003 from '../../components/display/Product/Product10003';
import { onErrorImg } from '../../utils/commonFunction';
// import MainCategory from '../../components/main/category/MainCategory';
// import MainBanner from '../../components/main/main/MainBanner';
// import MainCarousel from '../../components/main/main/MainCarousel';
// import MainSns from '../../components/main/main/MainSns';
// import MainSnsCarousel from '../../components/main/main/MainSnsCarousel';
// import MainProductsPopular from '../../components/main/products/MainProductsPopular';
import { MainContentDiv } from './mainMainPage.style';

const MainCategory = lazy(() =>
  import('../../components/main/category/MainCategory'),
);
const MainBanner = lazy(() => import('../../components/main/main/MainBanner'));
const MainCarousel = lazy(() =>
  import('../../components/main/main/MainCarousel'),
);
const MainSns = lazy(() => import('../../components/main/main/MainSns'));
const MainSnsCarousel = lazy(() =>
  import('../../components/main/main/MainSnsCarousel'),
);
const MainProductsPopular = lazy(() =>
  import('../../components/main/products/MainProductsPopular'),
);

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
  const dataTool = [<Product10001 />, <Product10002 />, <Product10003 />];
  /* 100001 : 전체 데이터
 * 100002 : id, image, name, price ,saleCount 
   100003 : id, image, name, price, saleCount, sellerName
*/
  const components = {
    MainCarousel: <MainCarousel />,
    MainCategory: <MainCategory />,
    MainProductsPopular: <MainProductsPopular dataTool={dataTool} />,
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
        return (
          <Suspense
            fallback={
              <div
                key={idx}
                style={{
                  widows: '100%',
                  height: '200px',
                  backgroundColor: 'gray',
                  marginTop: '50px',
                }}
              ></div>
            }
          >
            <div key={idx}>{components[item]}</div>
          </Suspense>
        );
        // <div key={idx}>{components[item]}</div>;
      })}
    </MainContentDiv>
  );
}
