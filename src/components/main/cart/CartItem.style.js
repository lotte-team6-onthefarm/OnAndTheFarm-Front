import styled from 'styled-components';

const CartItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
`;

const CartItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const CartItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div {
    padding: 0 20px;
  }
`;

const CartItemDetail = styled.div`
  padding: 5px;
`;
const CartItemNumber = styled.div`
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const CartItemPrice = styled.div`
  padding: 5px;
`;

export {
  CartItem,
  CartItemImg,
  CartItemContent,
  CartItemDetail,
  CartItemNumber,
  CartItemPrice,
};
