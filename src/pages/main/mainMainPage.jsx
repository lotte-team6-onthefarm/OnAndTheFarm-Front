import React, { lazy, Suspense } from 'react';
import { useQuery } from 'react-query';
import { getAllMainModule } from '../../apis/exhibition/mainpage';
import { MainContentDiv, MainDisplayBlock } from './mainMainPage.style';

import FadeLoader from 'react-spinners/FadeLoader';
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

// import MainCategory from '../../components/main/category/MainCategory';
// import MainBanner from '../../components/main/main/MainBanner';
// import MainCarousel from '../../components/main/main/MainCarousel';
// import MainSns from '../../components/main/main/MainSns';
// import MainSnsCarousel from '../../components/main/main/MainSnsCarousel';
// import MainProductsPopular from '../../components/main/products/MainProductsPopular';

export default function MainMainPage() {
  const { data: displays, isLoading } = useQuery(
    'getAllMainModule',
    getAllMainModule,
    {
      onSuccess: res => {},
      onError: () => {},
    },
  );
  const components = (moduleName, display) => {
    if (moduleName === 'banner') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainCarousel data={display} />
        </Suspense>
      );
    } else if (moduleName === 'category') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainCategory data={display} />
        </Suspense>
      );
    } else if (moduleName === 'product') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainProductsPopular data={display} />
        </Suspense>
      );
    } else if (moduleName === 'miniBanner') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainBanner data={display} />
        </Suspense>
      );
    } else if (moduleName === 'sns') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainSnsCarousel data={display} />
        </Suspense>
      );
    } else if (moduleName === 'farmfluencer') {
      return (
        <Suspense
          fallback={
            <FadeLoader
              color="#C63DEE"
              height={15}
              width={5}
              radius={2}
              margin={2}
            />
          }
        >
          <MainSns data={display} />
        </Suspense>
      );
    }
    return;
  };

  return (
    <MainContentDiv>
      {!isLoading &&
        displays.map((display, idx) => {
          return (
            // <Suspense
            //   fallback={
            //     <FadeLoader
            //       color="#C63DEE"
            //       height={15}
            //       width={5}
            //       radius={2}
            //       margin={2}
            //     />
            //   }
            // >

            // </Suspense>
            <MainDisplayBlock>
              {components(display.exhibitionModuleName, display)}
            </MainDisplayBlock>
          );
        })}
    </MainContentDiv>
  );
}
