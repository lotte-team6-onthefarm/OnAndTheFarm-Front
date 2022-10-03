import styled from 'styled-components';

const ReviewItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
`;

const ReviewItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const ReviewItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div{
    padding: 0 20px 0 0;
  }
`;

const ReviewItemDetail = styled.div`
width: 700px;
  padding: 5px;
  font-size: 0.7rem;
`;
const ReviewItemNumber = styled.div`
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const ReviewItemPrice = styled.div`
font-size: 0.7rem;
  padding: 5px;
  width: 100%;
`;


export { 
  ReviewItem,
  ReviewItemImg,
  ReviewItemContent,
  ReviewItemDetail,
  ReviewItemNumber,
  ReviewItemPrice,
};
