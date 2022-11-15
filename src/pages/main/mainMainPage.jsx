import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAllMainModule } from '../../apis/exhibition/mainpage';
import { dataTool } from '../../components/display/Product/dataTool';
import { onErrorImg } from '../../utils/commonFunction';
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
  const mapFunction = res => {
    res.map((r, idx) => {
      if (r.exhibitionModuleName === 'banner')
        setBanner({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
      else if (r.exhibitionModuleName === 'category')
        setCategory({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
      else if (r.exhibitionModuleName === 'product')
        setProduct({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
      else if (r.exhibitionModuleName === 'farmfluencer')
        setFarmfluencer({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
      else if (r.exhibitionModuleName === 'miniBanner')
        setMiniBanner({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
      else if (r.exhibitionModuleName === 'sns')
        setSNS({
          dataPicker: r.exhibitionDataPickerId,
          itemsId: r.exhibitionItemsId,
          accountName: r.exhibitionAccountName,
        });
    });
  };
  const { data, isLoading } = useQuery('getAllMainModule', getAllMainModule, {
    onSuccess: res => {
      mapFunction(res);
    },
    onError: () => {},
  });
  const tool = 100001;
  const components = {
    banner: <MainCarousel data={data} />,
    category: <MainCategory data={data} />,
    product: <MainProductsPopular dataTool={dataTool[tool]} data={data} />,
    miniBanner: <MainBanner data={data} />,
    sns: <MainSnsCarousel data={data} />,
    farmfluencer: <MainSns data={data} />,
    EasterEgg: (
      <div style={{ margin: '100px 0', display: 'none' }}>
        <Link to="snstest">등록</Link>
      </div>
    ),
  };

  return (
    <MainContentDiv>
      {!isLoading &&
        data.map((item, idx) => {
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
              <div>{components[item.exhibitionModuleName]}</div>
            </Suspense>
          );
          // <div key={idx}>{components[item]}</div>;
        })}
    </MainContentDiv>
  );
}
