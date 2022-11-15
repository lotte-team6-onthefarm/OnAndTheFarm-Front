import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAllMainModule } from '../../apis/exhibition/mainpage';
import { dataTool } from '../../components/display/Product/dataTool';
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
  const [banner, setBanner] = useState({});
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});
  const [farmfluencer, setFarmfluencer] = useState({});
  const [miniBanner, setMiniBanner] = useState({});
  const [sns, setSNS] = useState({});

  const { data, isLoading } = useQuery('getAllMainModule', getAllMainModule, {
    onSuccess: res => {
      res.map((r, idx) => {
        if (r.exhibitionModuleName === 'banner')
          setBanner({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
        else if (r.exhibitionModuleName === 'category')
          setCategory({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
        else if (r.exhibitionModuleName === 'product')
          setProduct({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
        else if (r.exhibitionModuleName === 'farmfluencer')
          setFarmfluencer({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
        else if (r.exhibitionModuleName === 'miniBanner')
          setMiniBanner({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
        else if (r.exhibitionModuleName === 'sns')
          setSNS({
            dataPicker: r.exhibitionDataPickerId,
            itemsId: r.exhibitionItemsId,
          });
      });
    },
    onError: () => {},
  });

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
  // 557
  // 556
  // 555
  const tool = 100001;
  const components = {
    MainCarousel: <MainCarousel data={banner} />, // ssssssssssssssssssssssss
    MainCategory: <MainCategory data={category} />, // ssssssssssssssssssssssss
    MainProductsPopular: (
      <MainProductsPopular dataTool={dataTool[tool]} data={product} />
    ),
    MainBanner: <MainBanner data={miniBanner} />, // ssssssssssssssssssssssss
    MainSnsCarousel: <MainSnsCarousel data={sns} />, // ssssssssssssssssssssssss
    MainSns: <MainSns data={farmfluencer} />, // ssssssssssssssssssssssss
    EasterEgg: (
      <div style={{ margin: '100px 0', display: 'none' }}>
        <Link to="snstest">등록</Link>
      </div>
    ),
  };

  return (
    <MainContentDiv>
      {!isLoading &&
        mainLayout.map((item, idx) => {
          return (
            <Suspense
              fallback={
                <div
                  style={{
                    widows: '100%',
                    height: '200px',
                    backgroundColor: 'gray',
                    marginTop: '50px',
                  }}
                ></div>
              }
              key={idx}
            >
              <div>{components[item]}</div>
            </Suspense>
          );
          // <div key={idx}>{components[item]}</div>;
        })}
    </MainContentDiv>
  );
}
