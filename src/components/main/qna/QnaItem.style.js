import styled from 'styled-components';

const QnaItem = styled.div`
  height: 70px;
  margin: 10px;
  display: flex;
`;

const QnaItemImg = styled.img`
  border-radius: 7px;
  margin: auto 20px;
`;

const QnaItemContent = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  div{
    padding: 0 20px 0 0;
  }
  h4{
  margin: 0 0 5px 0;
  padding: 0;
}
`;

const QnaItemDetail = styled.div`
/* display: flex; */

align-items: center;
width: 700px;
  padding: 5px;
  font-size: 0.7rem;
  h4{
    width: 100px;
  }
`;
const QnaItemNumber = styled.div`
  padding: 5px;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
`;
const QnaItemPrice = styled.div`
font-size: 0.7rem;
  padding: 5px;
  width: 100%;
`;


export { 
  QnaItem,
  QnaItemImg,
  QnaItemContent,
  QnaItemDetail,
  QnaItemNumber,
  QnaItemPrice,
};
