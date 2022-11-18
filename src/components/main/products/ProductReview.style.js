import styled from 'styled-components';

const ReviewDiv = styled.div`
  align-items: center;
  margin: 50px auto 50px;
  width: 800px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    span {
      color: #40AA54;
      margin-left: 4px;
    }
  }
`;

const SelectDiv = styled.div`
  position: relative;
  width: 150px;
  height: 35px;
  border-radius: 4px;
  border: 2px solid;
  .select {
    line-height: 24px;
    width: inherit;
    height: inherit;
    background: transparent;
    border: 0 none;
    outline: 0 none;
    padding: 0 5px;
    position: relative;
    z-index: 3; // select가 위로 올라와야 함
  }
`;

const ReviewStatisticsDiv = styled.div`
  background-color: #f7f8fa;
  border-radius: 8px;
  text-align: center;
  margin: 20px;
  display: flex;
`;

const ReviewTotalDiv = styled.div`
  width: 30%;
  padding-top: 30px;
  flex: 0 0 305px;
  span {
    display: inline-block;
    font-size: 34px;
    margin-left: 12px;
    font-weight: 700;
  }
`;

const RateDiv = styled.div`
  width: 180px;
  position: relative;
  margin: 0 8px;
  div {
    font-size: 18px;
    cursor: pointer;
    :nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      display: inline-block;
      background-color: #dadce0;
      border-radius: 10px;
    }
    :nth-child(2) {
      position: absolute;
      border-radius: 10px;
      display: inline-block;
      background-color: #40AA54;
      height: 5px;
      top: 0;
      left: 0;
      max-width: 100%;
    }
  }
`;

const ReviewCountListDiv = styled.div`
  flex: 0 0 auto;
  margin: 0 auto;
`;

const ReviewCountDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 4px;

  span {
    color: #40AA54;
    font-weight: 700;
  }
`;

const ReviewAddDiv = styled.div`
  margin: auto;
  width: 500px;
  display: flex;
  textarea{
    /* border: none; */
    resize: none;
  }
`;

const ReviewAddButtonDiv = styled.div`
  margin: auto;
  height: 100px;
  display: grid;
  div {
    text-align: center;
  }
`;

const ReviewListDiv = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export {
  ReviewDiv,
  SelectDiv,
  RateDiv,
  ReviewStatisticsDiv,
  ReviewCountDiv,
  ReviewTotalDiv,
  ReviewCountListDiv,
  ReviewAddDiv,
  ReviewAddButtonDiv,
  ReviewListDiv,
};
