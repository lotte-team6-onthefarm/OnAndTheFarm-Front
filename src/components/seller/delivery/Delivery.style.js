import styled from 'styled-components';

const DeliveryWrapper = styled.div``;

// activated : 주문완료
// canceled : 주문취소
// refundRequest : 반품신청
// refundCompleted : 반품확정
// deliveryProgress : 배송중
// deliveryCompleted : 배송완료

const DeliveryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  color: #cccccc;
  .deliveryStateButton {
    font-size: 18px;
    cursor: pointer;
    margin: auto;
    :nth-child(1) {
      color: ${props => props.state === 'activated' && 'black'};
      font-weight: ${props => props.state === 'activated' && 600};
    }
    :nth-child(2) {
      color: ${props => props.state === 'deliveryProgress' && 'black'};
      font-weight: ${props => props.state === 'deliveryProgress' && 600};
    }
    :nth-child(3) {
      color: ${props => props.state === 'deliveryCompleted' && 'black'};
      font-weight: ${props => props.state === 'deliveryCompleted' && 600};
    }
  }
  .orderStateButton {
    font-size: 18px;
    cursor: pointer;
    margin: auto;
    :nth-child(1) {
      color: ${props => props.state === 'canceled' && 'black'};
      font-weight: ${props => props.state === 'canceled' && 600};
    }
    :nth-child(2) {
      color: ${props => props.state === 'refundRequest' && 'black'};
      font-weight: ${props => props.state === 'refundRequest' && 600};
    }
  }
`;
const DeliveryDateWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 350px;
  justify-content: space-between;
  div {
    font-size: 18px;
    margin-right: 20px;
  }
`;
const DeliveryTableWrapper = styled.table`
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
  border-collapse: collapse;
  th {
    text-align: left;
    font-size: 13px;
    color: #6f767e;
  }
  th,
  td {
    padding: 16px 12px;
    font-weight: 600;
    border-collapse: collapse;
    border: solid 1px ${props => props.theme.colors.gray};
  }
  tbody {
    :hover {
      background-color: ${props => props.theme.colors.gray};
    }
  }
  .content {
    padding-top: 25px;
    div {
      :nth-child(1) {
        padding-top: 3px;
        font-size: 12px;
        color: gray;
      }
    }
  }
  span {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 12px;
  }
  .deliveryNumberInput {
    border-radius: 4px;
    border: solid 1px ${props => props.theme.colors.snsGray};
    padding-left: 10px;
    height: 30px;
    :focus {
      outline: none;
    }
  }
`;

const ProductDetailDiv = styled.div`
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    width: 70px;
    height: 70px;
  }
  :nth-child(n + 2) {
    border-top: solid 1px ${props => props.theme.colors.gray};
  }
  div {
    padding-left: 20px;
    div {
      font-size: 13px;
      color: gray;
      :nth-child(1) {
        font-size: 15px;
        color: black;
      }
    }
  }
`;

const WaybillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  select {
    padding: 5px 10px;
    border-radius: 8px;
  }
  input {
    text-align: center;
    border: none;
    outline: none;
  }
`;
export {
  DeliveryWrapper,
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  WaybillWrapper,
  ProductDetailDiv,
};
