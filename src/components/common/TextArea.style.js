import styled from 'styled-components';

const StyledInputDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: start;
`;

const StyledLabel = styled.label`
  color: #8b8b97;
  font-size: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: calc(100% - 15px);
  height: 200px;
  margin-top: 20px;
  padding: 15px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
`;



export { StyledInputDiv, StyledLabel, StyledTextArea };
