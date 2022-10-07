import styled from 'styled-components';

const LikeItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
`;

const LikeItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const LikeItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div{
    padding: 0 20px;
  }
`;

const LikeItemDetail = styled.div`
  padding: 5px;
`;
const LikeItemNumber = styled.div`
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const LikeItemPrice = styled.div`
  padding: 5px;
`;


export { 
  LikeItem,
  LikeItemImg,
  LikeItemContent,
  LikeItemDetail,
  LikeItemNumber,
  LikeItemPrice,
};
