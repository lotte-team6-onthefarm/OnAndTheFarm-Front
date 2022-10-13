import styled from 'styled-components';

const StyledReviewInputDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: start;
`;

const StyledLabel = styled.label`
  color: #8b8b97;
  font-size: 0.8rem;
`;

const StyledReviewInput = styled.input`
  width: calc(100% - 15px);
  height: 40px;
  margin-top: 5px;
  padding-left: 15px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`;



export { StyledReviewInputDiv, StyledLabel, StyledReviewInput };
