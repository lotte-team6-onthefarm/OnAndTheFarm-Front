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
    padding: 0 10px;
  }
`;

const CartItemDetail = styled.div`
  width: 280px;
  padding: 5px;
  max-height: 100px;
  display: block;
  word-break: break-all;
  font-weight: 400;
  /* line-height: 13px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
`;
const CartItemNumber = styled.div`
  width: 110px;
  padding: 5px;
  border-left: 1px solid lightgray;
`;
const CartItemPrice = styled.div`
  overflow: hidden;
  width: 60px;
  border-left: 1px solid lightgray;
  display: flex;
  justify-content: center;
  div {
    display: flex;
  }
`;

const CartItemTotalPrice = styled.div`
  overflow: hidden;
  width: 100px;
  border-left: 1px solid lightgray;
  display: flex;
  justify-content: end;
  div {
    display: flex;
  }
`;

export {
  CartItem,
  CartItemImg,
  CartItemContent,
  CartItemDetail,
  CartItemNumber,
  CartItemTotalPrice,
  CartItemPrice,
};
