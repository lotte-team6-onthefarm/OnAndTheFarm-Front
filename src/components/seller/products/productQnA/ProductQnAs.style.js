import styled from 'styled-components';

const AnswerBoxWrapper = styled.div`
  margin-top: 10px;
  margin-left: 70px;
`;

const AnswerBtnBox = styled.div`
  color: ${props => props.theme.colors.blue};
  font-size: 15px;
  cursor: pointer;
`;

const AnswerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    margin-left: 10px;
    width: 350px;
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
    width: 53%;
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      /* border: solid 1px red; */
      width: 150px;
    }
  }
`;

const QnATbody = styled.tbody``;
export { AnswerBoxWrapper, AnswerTextWrapper, AnswerBtnBox, QnATbody };
