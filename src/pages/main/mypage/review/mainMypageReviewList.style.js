import styled from 'styled-components';

const ReviewContentDiv = styled.div`
  
`;

const AnswerDiv = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const AnswerBtnDiv = styled.div`
  color: ${props => props.theme.colors.blue};
  font-size: 15px;
  cursor: pointer;
`;

const AnswerTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    margin-left: 10px;
    width: 500px;
    height: 80px;
    font-size: 16px;
    overflow: hidden;
    border: none;
    resize: none;
    outline: none;
  }
  .textInput {
    display: flex;
  }
  .btn {
    /* border: solid 1px red; */
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      button:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  .sellerAnswer {
    margin-left: 10px;
    width: 350px;
  }
`;

const ReviewTbody = styled.tbody``;

const AnswerBoxDiv = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

export { ReviewContentDiv, AnswerDiv, AnswerTextDiv, AnswerBtnDiv, ReviewTbody, AnswerBoxDiv };
