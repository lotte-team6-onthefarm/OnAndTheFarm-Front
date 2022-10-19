import styled from 'styled-components';

const ProductQnaDiv = styled.div`
  align-items: center;
  margin: 20px auto;
  
  width: 800px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    padding-bottom: 20px;
    span {
      color: #40aa54;
      margin-left: 4px;
    }
  }
`;

const QnaStatisticsDiv = styled.div`
  margin: auto;
  width: 300px;
  display: flex;
`;

const QnaTotalDiv = styled.div`
  width: 100px;
`;

const QnaCoutnListDiv = styled.div`
  width: 170px;
`;

const QnaCoutnDiv = styled.div`
  width: 170px;
`;

const QnaAddDiv = styled.div`
  margin: auto;
  width: 500px;
  display: flex;
`;

const QnaAddButtonDiv = styled.div`
  margin: auto;
  height: 100px;
  display: grid;
  div {
    text-align: center;
  }
`;

const QnaListDiv = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export {
  ProductQnaDiv,
  QnaStatisticsDiv,
  QnaTotalDiv,
  QnaCoutnListDiv,
  QnaCoutnDiv,
  QnaAddDiv,
  QnaAddButtonDiv,
  QnaListDiv,
};
