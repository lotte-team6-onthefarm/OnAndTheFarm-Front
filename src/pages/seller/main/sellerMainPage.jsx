import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import {
  getSellerCondition,
  getSellerMypage,
} from '../../../apis/seller/account';
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
import {
  addDays,
  getDateDotFormat,
  getDateFormat,
} from '../../../utils/commonFunction';

export default function SellerMainPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [preStartDate, setPreStartDate] = useState('');
  const [preEndDate, setPreEndDate] = useState('');

  useEffect(() => {
    const eDate = new Date();
    const sDate = addDays(eDate, -7);
    const pEDate = addDays(eDate, -8);
    const pSDate = addDays(eDate, -14);
    setStartDate(getDateDotFormat(getDateFormat(sDate)));
    setEndDate(getDateDotFormat(getDateFormat(eDate)));
    setPreStartDate(getDateDotFormat(getDateFormat(pSDate)));
    setPreEndDate(getDateDotFormat(getDateFormat(pEDate)));
  }, []);
  // 셀러별 메인페이지
  const { isLoading: MainProductLoading, data: mainData } = useQuery(
    'sellerMain',
    () =>
      getSellerMypage({
        startDate: startDate,
        endDate: endDate,
      }),
    {
      enabled: startDate !== '' && endDate !== '',
      onSuccess: () => {},
      onError: {},
    },
  );
  // 셀러별 메인페이지 전주 데이터
  const { isLoading: PreMainProductLoading, data: preMainData } = useQuery(
    'sellerPreMain',
    () =>
      getSellerMypage({
        startDate: preStartDate,
        endDate: preEndDate,
      }),
    {
      enabled: preStartDate !== '' && preEndDate !== '',
      onSuccess: () => {},
      onError: {},
    },
  );
  const { isLoading: MainConditiontLoading, data: conditionData } = useQuery(
    'sellerCondition',
    getSellerCondition,
    {
      onSuccess: () => {},
      onError: {},
    },
  );
  return (
    <>
      {!MainProductLoading && !MainConditiontLoading && !PreMainProductLoading && (
        <RightWrapper>
          <SellerTitle>메인 페이지</SellerTitle>
          <PageRow>
            <PageCol width="calc(100% - 400px)" paddingRight="8px">
              <MainUserManagement
                mainData={mainData}
                preMainData={preMainData}
              />
              <MainSalesStatistics conditionData={conditionData} />
            </PageCol>
            <PageCol width="400px">
              <MainPopularProducts products={mainData.popularProducts} />
              <MainReviews reviews={mainData.reviews} />
            </PageCol>
          </PageRow>
        </RightWrapper>
      )}
    </>
  );
}
