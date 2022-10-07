import React from 'react';
import { useQuery } from 'react-query';
import { getSellerMypage } from '../../../apis/seller/account';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import MainPopularProducts from '../../../components/seller/main/popularProducts/MainPopularProducts';
import MainReviews from '../../../components/seller/main/reviews/MainReviews';
import MainSalesStatistics from '../../../components/seller/main/salesStatistics/MainSalesStatistics';
import MainUserManagement from '../../../components/seller/main/userManagement/MainUserManagement';

export default function SellerMainPage() {
  // const [mainDatas, setMainDatas] = useState({});
  // 셀러별 메인페이지
  const {
    isLoading: sellerMainProductLoading,
    // refetch: sellerMainProduct,
    data: mainData,
  } = useQuery(
    'sellerMain',
    () =>
      getSellerMypage({
        startDate: '2022.09.23 09:09:55',
        endDate: '2022.09.30 15:09:55',
      }),
    {
      onSuccess: () => {
        // setMainData(res.data);
      },
      onError: {},
    },
  );

  return (
    <>
      {!sellerMainProductLoading && (
        <RightWrapper>
          <SellerTitle>메인 페이지</SellerTitle>
          <PageRow>
            <PageCol width="calc(100% - 400px)" paddingRight="8px">
              <MainUserManagement mainData={mainData.data} />
              <MainSalesStatistics mainData={mainData.data} />
            </PageCol>
            <PageCol width="400px">
              <MainPopularProducts products={mainData.data.popularProducts} />
              <MainReviews reviews={mainData.data.reviews} />
            </PageCol>
          </PageRow>
        </RightWrapper>
      )}
    </>
  );
}
