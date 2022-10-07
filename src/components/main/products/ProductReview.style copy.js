import styled from 'styled-components';

const ReviewDiv = styled.div`
margin: auto;
  width: 800px;
`;

const ReviewStatisticsDiv = styled.div`
margin: auto;
  width: 300px;
  display: flex;
`;

const ReviewTotalDiv = styled.div`
width: 100px;

`;

const ReviewCountListDiv = styled.div`
width: 170px;
`;

const ReviewCountDiv = styled.div`
width: 170px;
display: flex;
span{
  font-size: 15px;
  width: 100%;
}
`;

const ReviewAddDiv = styled.div`
margin: auto;
  width: 500px;
  display: flex;
`;

const ReviewAddButtonDiv = styled.div`
margin: auto;
  height: 100px;
  display: grid;
  div{
    text-align: center;
  }
`;

const ReviewListDiv = styled.div`
width: 80%;
margin: 20px auto;
`;

export { ReviewDiv,
  ReviewStatisticsDiv,
  ReviewCountDiv,
  ReviewTotalDiv,
  ReviewCountListDiv,
  ReviewAddDiv,
  ReviewAddButtonDiv,
  ReviewListDiv, };
