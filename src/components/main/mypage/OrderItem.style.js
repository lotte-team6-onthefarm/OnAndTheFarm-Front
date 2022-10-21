import styled from 'styled-components';

const OrderItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
  .orderItemNumber {
    width: 30px;
  }
`;

const OrderItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const OrderItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div {
    padding: 0 20px;
  }
`;

const OrderItemDetail = styled.div`
  width: 100px;
  padding: 5px;
`;
const OrderItemNumber = styled.div`
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const OrderItemPrice = styled.div`
  padding: 5px;
`;

export {
  OrderItem,
  OrderItemImg,
  OrderItemContent,
  OrderItemDetail,
  OrderItemNumber,
  OrderItemPrice,
};
