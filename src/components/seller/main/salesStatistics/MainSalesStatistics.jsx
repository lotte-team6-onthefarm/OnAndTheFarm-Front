import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { getSellerCondition } from '../../../../apis/seller/account';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import {
  SalesStatisticsBlock,
  SalesStatisticsWrapper,
} from './MainSalesStatistics.style';

export default function MainSalesStatistics() {
  const { data: conditionData } = useQuery(
    'sellerCondition',
    getSellerCondition,
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );
  const navigate = useNavigate();
  return (
    <WhiteWrapper width="100%" height="640px">
      <SubTitle color="#CABDFF" title="운영 현황" />
      <SalesStatisticsWrapper>
        <SalesStatisticsBlock onClick={() => navigate('products')}>
          <div className="SalesStatisticsTitle">판매 상품수</div>
          <div className="SalesStatisticsCount">
            {conditionData.sellingProducts}
          </div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock onClick={() => navigate('products')}>
          <div className="SalesStatisticsTitle">판매 중지</div>
          <div className="SalesStatisticsCount">{conditionData.notSelling}</div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock onClick={() => navigate('order')}>
          <div className="SalesStatisticsTitle">환불 요청</div>
          <div className="SalesStatisticsCount">
            {conditionData.requestRefund}
          </div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock onClick={() => navigate('order')}>
          <div className="SalesStatisticsTitle">취소 요청</div>
          <div className="SalesStatisticsCount">
            {conditionData.cancelOrders}
          </div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock onClick={() => navigate('delivery')}>
          <div className="SalesStatisticsTitle">배송 전</div>
          <div className="SalesStatisticsCount">
            {conditionData.beforeDelivery}
          </div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock
          onClick={() => navigate('delivery/deliveryProgress')}
        >
          <div className="SalesStatisticsTitle">배송 중</div>
          <div className="SalesStatisticsCount">{conditionData.delivering}</div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock
          onClick={() => navigate('delivery/deliveryCompleted')}
        >
          <div className="SalesStatisticsTitle">배송 완료</div>
          <div className="SalesStatisticsCount">
            {conditionData.deliverCompletes}
          </div>
        </SalesStatisticsBlock>
        <SalesStatisticsBlock onClick={() => navigate('products/qnas')}>
          <div className="SalesStatisticsTitle">답변 대기</div>
          <div className="SalesStatisticsCount">
            {conditionData.beforeAnswer}
          </div>
        </SalesStatisticsBlock>
      </SalesStatisticsWrapper>
    </WhiteWrapper>
  );
}
