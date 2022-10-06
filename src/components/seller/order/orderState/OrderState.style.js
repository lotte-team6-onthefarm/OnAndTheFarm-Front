import styled from 'styled-components';

const ImageTitleBlock = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  cursor: pointer;
  .right {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    height: 60px;
    justify-content: space-between;
  }
  img {
    width: 80px;
  }
`;

const OrderStateUl = styled.ul`
  list-style-type: none;
`;
const OrderStateli = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(17, 19, 21, 0.1);
  div {
    :nth-child(1) {
      margin-right: auto;
      padding-right: 12px;
      color: #6f767e;
    }
    :nth-child(2) {
      max-width: 330px;
      text-align: right;
    }
  }
`;
const OrderStateBtnWrapper = styled.div`
  display: flex;
  margin: 24px -4px 0;
`;

export { ImageTitleBlock, OrderStateUl, OrderStateli, OrderStateBtnWrapper };
