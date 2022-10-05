import styled from 'styled-components';

const ButtonGroupDiv = styled.div`
.deactive{
    color: #000;
    background-color: #f7f7f7;
  }
`;

const StyledButton = styled.button`
  color: #fff;
  width: ${props => props.width?props.width:'fit-content'};
  height: ${props => props.height?props.height:'40px'};;
  margin: ${props => props.margin?props.margin:'auto'};
  background-color: ${props => props.color};
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  
`;

export { ButtonGroupDiv, StyledButton };
