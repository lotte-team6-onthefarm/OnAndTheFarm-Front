import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getAllMainModule } from '../../apis/exhibition/mainpage';
import { dataTool } from '../../components/display/Product/dataTool';
import { onErrorImg } from '../../utils/commonFunction';
import { MainContentDiv, MainDisplayBlock } from './mainMainPage.style';

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
  const { data: displays, isLoading } = useQuery(
    'getAllMainModule',
    getAllMainModule,
    {
      onSuccess: res => {},
      onError: () => {},
    },
  );

  const components = {
    banner: <MainCarousel data={displays} />,
    category: <MainCategory data={displays} />,
    product: <MainProductsPopular data={displays} />,
    miniBanner: <MainBanner data={displays} />,
    sns: <MainSnsCarousel data={displays} />,
    farmfluencer: <MainSns data={displays} />,
    EasterEgg: (
      <div style={{ margin: '100px 0', display: 'none' }}>
        <Link to="snstest">등록</Link>
      </div>
    ),
  };

  return (
    <MainContentDiv>
      {!isLoading &&
        displays.map((display, idx) => {
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
              <MainDisplayBlock>
                {components[display.exhibitionModuleName]}
              </MainDisplayBlock>
            </Suspense>
          );
        })}
    </MainContentDiv>
  );
}
