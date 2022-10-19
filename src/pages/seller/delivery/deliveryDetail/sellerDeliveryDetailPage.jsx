import React from 'react';
import { useParams } from 'react-router-dom';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../../components/seller/common/Title.style';
import DeliveryDetail from '../../../../components/seller/delivery/deliveryDetail/DeliveryDetail';

export default function SellerDeliveryDetailPage() {
  return (
    <RightWrapper>
      <SellerTitle>주문 상세</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <DeliveryDetail />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
