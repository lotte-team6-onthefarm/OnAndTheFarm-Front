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
  const componentsF = (moduleName, display) => {
    if (moduleName === 'banner') {
      return <MainCarousel data={display} />;
    } else if (moduleName === 'category') {
      return <MainCategory data={display} />;
    } else if (moduleName === 'product') {
      return <MainProductsPopular data={display} />;
    } else if (moduleName === 'miniBanner') {
      return <MainBanner data={display} />;
    } else if (moduleName === 'sns') {
      return <MainSnsCarousel data={display} />;
    } else if (moduleName === 'farmfluencer') {
      return <MainSns data={display} />;
    }
    return;
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
                {componentsF(display.exhibitionModuleName, display)}
              </MainDisplayBlock>
            </Suspense>
          );
        })}
    </MainContentDiv>
  );
}
